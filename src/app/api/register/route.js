import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function POST(request) {
  try {
    const { name, email, password, role } = await request.json()

    if (!name || !email || !password) {
      return new Response('Missing required fields', { status: 400 })
    }

    if (role && role !== 'rookie' && role !== 'expert') {
      return new Response('Invalid role', { status: 400 })
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return new Response('User with this email already exists', { status: 400 })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: role || null
      }
    })

    return Response.json({ 
      success: true, 
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    })
  } catch (error) {
    console.error('Registration error:', error)
    return new Response('Internal server error', { status: 500 })
  }
}

