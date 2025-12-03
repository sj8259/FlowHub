import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '@/lib/prisma'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })

        if (!user || !user.password) {
          return null
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        )

        if (!isPasswordValid) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === 'google') {
        return true
      }
      return true
    },
    async jwt({ token, user, account, trigger, session }) {
      // Initial sign in
      if (account && user) {
        // For Google OAuth, check if we need to set role
        if (account.provider === 'google') {
          const dbUser = await prisma.user.findUnique({
            where: { email: user.email }
          })
          
          if (dbUser) {
            token.id = dbUser.id
            token.role = dbUser.role
          }
        } else {
          token.id = user.id
          token.role = user.role
        }
      }
      
      // Handle role updates from session updates
      if (trigger === 'update' && session?.role) {
        token.role = session.role
      }
      
      return token
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id
        session.user.role = token.role
        
        // If user doesn't have a role yet, fetch from database
        if (!token.role) {
          const dbUser = await prisma.user.findUnique({
            where: { email: session.user.email }
          })
          
          if (dbUser) {
            session.user.id = dbUser.id
            session.user.role = dbUser.role
          }
        }
      }
      return session
    },
  },
  pages: {
    signIn: '/login',
    signOut: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
}

