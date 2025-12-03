import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.email) {
      return new Response('Unauthorized', { status: 401 })
    }

    const { role } = await request.json()

    if (!role || (role !== 'rookie' && role !== 'expert')) {
      return new Response('Invalid role', { status: 400 })
    }

    const user = await prisma.user.update({
      where: { email: session.user.email },
      data: { role }
    })

    return Response.json({ success: true, user })
  } catch (error) {
    console.error('Error updating role:', error)
    return new Response('Internal server error', { status: 500 })
  }
}

