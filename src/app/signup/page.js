'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'

export default function SignupPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const { data: session, status } = useSession()
    const [role, setRole] = useState(null) // 'rookie' or 'expert'
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleRoleUpdate = useCallback(async (selectedRole) => {
        try {
            const response = await fetch('/api/update-role', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ role: selectedRole })
            })

            if (response.ok) {
                router.push('/dashboard')
            } else {
                setError('Failed to update role')
            }
        } catch (error) {
            setError('Something went wrong')
        }
    }, [router])

    // Handle role selection after Google sign-in
    useEffect(() => {
        if (status === 'authenticated' && session?.user) {
            const urlRole = searchParams.get('role')
            if (urlRole && (urlRole === 'rookie' || urlRole === 'expert')) {
                // User just signed in with Google and needs to set role
                handleRoleUpdate(urlRole)
            } else if (!session.user.role) {
                // User signed in but doesn't have a role yet
                // Show role selection
                setRole('select')
            } else {
                // User has a role, redirect to dashboard
                router.push('/dashboard')
            }
        }
    }, [status, session, searchParams, router, handleRoleUpdate])

    const registerUser = async (e) => {
        e.preventDefault()

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords don't match")
            return
        }

        setLoading(true)
        setError('')

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    role: role
                })
            })

            if (response.ok) {
                router.push('/login')
            } else {
                const text = await response.text()
                setError(text)
            }
        } catch (error) {
            setError('Something went wrong')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="center-layout">
            <div style={{ maxWidth: '550px', width: '100%' }}>
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)', animation: 'fadeIn 0.6s ease-out' }}>
                    <div style={{ width: '200px', margin: '0 auto var(--spacing-md)' }}>
                        <img
                            src="/logo-icon-only.svg"
                            alt="FlowHub Logo"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                    <h1 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: '400', marginBottom: 'var(--spacing-sm)' }}>
                        Join FlowHub
                    </h1>
                    <p className="text-gray">Choose how you want to participate</p>
                </div>

                <div className="card" style={{ animation: 'scaleIn 0.5s ease-out 0.2s backwards' }}>
                    {role === 'select' ? (
                        <div style={{ animation: 'fadeIn 0.4s ease-out' }}>
                            <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                                <h2 style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--spacing-xs)' }}>
                                    Choose Your Role
                                </h2>
                                <p className="text-gray">Select how you want to participate in FlowHub</p>
                            </div>

                            <div className="role-selection">
                                <div
                                    className="role-card rookie"
                                    onClick={() => handleRoleUpdate('rookie')}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="role-icon">🚀</div>
                                    <h3>I am a Rookie</h3>
                                    <p>I have an idea and want to build a team</p>
                                </div>

                                <div
                                    className="role-card expert"
                                    onClick={() => handleRoleUpdate('expert')}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="role-icon">⚡</div>
                                    <h3>I am an Expert</h3>
                                    <p>I want to join projects and mentor others</p>
                                </div>
                            </div>
                        </div>
                    ) : !role ? (
                        <>
                            <div className="role-selection">
                                <div
                                    className="role-card rookie"
                                    onClick={() => setRole('rookie')}
                                >
                                    <div className="role-icon">🚀</div>
                                    <h3>I am a Rookie</h3>
                                    <p>I have an idea and want to build a team</p>
                                </div>

                                <div
                                    className="role-card expert"
                                    onClick={() => setRole('expert')}
                                >
                                    <div className="role-icon">⚡</div>
                                    <h3>I am an Expert</h3>
                                    <p>I want to join projects and mentor others</p>
                                </div>
                            </div>

                            <div className="divider-text" style={{ marginTop: 'var(--spacing-xl)' }}>
                                <span>or</span>
                            </div>

                            <button
                                className="btn btn-google w-full"
                                onClick={() => {
                                    signIn('google', { 
                                        callbackUrl: '/signup?role=select',
                                        redirect: true 
                                    })
                                }}
                            >
                                <svg className="google-btn-icon" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                Continue with Google
                            </button>
                        </>
                    ) : (
                        <div style={{ animation: 'fadeIn 0.4s ease-out' }}>
                            <button
                                className="btn btn-text"
                                onClick={() => setRole(null)}
                                style={{ marginBottom: 'var(--spacing-lg)', paddingLeft: 0 }}
                            >
                                ← Back to role selection
                            </button>

                            <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                                <h2 style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--spacing-xs)' }}>
                                    Sign up as a {role === 'rookie' ? 'Rookie' : 'Expert'}
                                </h2>
                                <p className="text-gray">Fill in your details to get started</p>
                            </div>

                            <form onSubmit={registerUser}>
                                <div className="input-group">
                                    <label className="input-label">Full Name</label>
                                    <input
                                        type="text"
                                        className="input"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="input-group">
                                    <label className="input-label">Email</label>
                                    <input
                                        type="email"
                                        className="input"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="grid-2">
                                    <div className="input-group">
                                        <label className="input-label">Password</label>
                                        <input
                                            type="password"
                                            className="input"
                                            placeholder="••••••••"
                                            value={formData.password}
                                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="input-group">
                                        <label className="input-label">Confirm Password</label>
                                        <input
                                            type="password"
                                            className="input"
                                            placeholder="••••••••"
                                            value={formData.confirmPassword}
                                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>

                                {error && (
                                    <p style={{ color: 'var(--error)', fontSize: '14px', marginBottom: '16px' }}>
                                        {error}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg w-full"
                                    disabled={loading}
                                >
                                    {loading ? 'Creating Account...' : 'Create Account'}
                                </button>
                            </form>

                            <div className="divider-text" style={{ marginTop: 'var(--spacing-lg)' }}>
                                <span>or</span>
                            </div>

                            <button
                                className="btn btn-google w-full"
                                onClick={async () => {
                                    await signIn('google', { 
                                        callbackUrl: `/signup?role=${role}`,
                                        redirect: true 
                                    })
                                }}
                            >
                                <svg className="google-btn-icon" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                Continue with Google
                            </button>
                        </div>
                    )}

                    <div style={{ marginTop: 'var(--spacing-xl)', textAlign: 'center', borderTop: '1px solid var(--gray-200)', paddingTop: 'var(--spacing-lg)' }}>
                        <p className="text-sm text-gray">
                            Already have an account? <Link href="/login" style={{ color: 'var(--primary-blue)', fontWeight: '500' }}>Sign in</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
