'use client'

import Navigation from '@/components/Navigation'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function DashboardPage() {
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/login')
        }
    }, [status, router])

    if (status === 'loading') {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>
    }

    const projects = [
        { id: 1, title: 'AI Recipe Generator', status: 'In Progress', expertsInterested: 5, skills: ['Frontend', 'ML', 'Design'] },
        { id: 2, title: 'Fitness Tracker App', status: 'Open', expertsInterested: 8, skills: ['Mobile', 'Backend'] },
    ]

    const recommendedProjects = [
        { id: 1, title: 'E-commerce Platform', rookie: 'Sarah M.', skills: ['React', 'Node.js'], status: 'Open' },
        { id: 2, title: 'Social Learning App', rookie: 'Mike R.', skills: ['UI/UX', 'Mobile'], status: 'Open' },
        { id: 3, title: 'Task Management Tool', rookie: 'Emily K.', skills: ['Frontend', 'Cloud'], status: 'Open' },
    ]

    const activities = [
        { id: 1, text: 'Alex joined your project "AI Recipe Generator"', time: '2h ago', type: 'join' },
        { id: 2, text: 'New message in Fitness Tracker App', time: '5h ago', type: 'message' },
        { id: 3, text: 'Task completed in AI Recipe Generator', time: '1d ago', type: 'task' },
    ]

    return (
        <div style={{ display: 'flex' }}>
            <Navigation />

            <main style={{
                marginLeft: '260px',
                flex: 1,
                padding: 'var(--spacing-2xl)',
                background: 'var(--gray-50)',
                minHeight: '100vh'
            }}>
                <div className="container" style={{ maxWidth: '1400px' }}>
                    {/* Header */}
                    <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
                        <h1 style={{ fontSize: 'var(--font-size-4xl)', marginBottom: 'var(--spacing-sm)' }}>
                            Welcome back, {session?.user?.name?.split(' ')[0] || 'User'}! 👋
                        </h1>
                        <p className="text-lg text-gray">Here's what's happening with your projects</p>
                    </div>

                    {/* Quick Actions */}
                    <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
                        <Link href="/create-project" className="btn btn-primary btn-lg">
                            ✨ Create New Project
                        </Link>
                    </div>

                    {/* Main Content Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--spacing-xl)' }}>
                        {/* Left Column */}
                        <div>
                            {/* Your Projects */}
                            <section style={{ marginBottom: 'var(--spacing-2xl)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
                                    <h2 className="text-2xl">Your Projects</h2>
                                    <Link href="/dashboard" className="text-blue text-sm font-medium">View all →</Link>
                                </div>

                                <div style={{ display: 'grid', gap: 'var(--spacing-md)' }}>
                                    {projects.map((project) => (
                                        <div key={project.id} className="card card-interactive">
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-md)' }}>
                                                <div>
                                                    <h3 className="text-xl mb-sm">{project.title}</h3>
                                                    <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
                                                        {project.skills.map((skill, idx) => (
                                                            <span key={idx} className="chip chip-blue">{skill}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <span className={`badge ${project.status === 'Open' ? 'badge-open' : 'badge-warning'}`}>
                                                    {project.status}
                                                </span>
                                            </div>

                                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                                                    <div style={{ display: 'flex', marginLeft: '-8px' }}>
                                                        {[...Array(Math.min(project.expertsInterested, 3))].map((_, i) => (
                                                            <div key={i} className="avatar avatar-sm" style={{
                                                                marginLeft: '-8px',
                                                                border: '2px solid white',
                                                                background: `hsl(${i * 80}, 70%, 70%)`
                                                            }}>
                                                                {String.fromCharCode(65 + i)}
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <span className="text-sm text-gray">
                                                        {project.expertsInterested} experts interested
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Recommended Projects */}
                            <section>
                                <h2 className="text-2xl mb-lg">Recommended for You</h2>
                                <div className="grid grid-2" style={{ gap: 'var(--spacing-md)' }}>
                                    {recommendedProjects.map((project) => (
                                        <Link key={project.id} href="/explore" className="card card-interactive" style={{ textDecoration: 'none' }}>
                                            <div style={{ marginBottom: 'var(--spacing-md)' }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-sm)' }}>
                                                    <h3 className="text-lg mb-xs">{project.title}</h3>
                                                    <span className="badge badge-open">{project.status}</span>
                                                </div>
                                                <p className="text-sm text-light">by {project.rookie}</p>
                                            </div>
                                            <div style={{ display: 'flex', gap: 'var(--spacing-xs)', flexWrap: 'wrap' }}>
                                                {project.skills.map((skill, idx) => (
                                                    <span key={idx} className="chip chip-purple">{skill}</span>
                                                ))}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Right Column */}
                        <div>
                            {/* Recent Activity */}
                            <section>
                                <h2 className="text-2xl mb-lg">Recent Activity</h2>
                                <div className="card">
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
                                        {activities.map((activity, index) => (
                                            <div key={activity.id}>
                                                <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                                                    <div style={{
                                                        width: '8px',
                                                        height: '8px',
                                                        borderRadius: '50%',
                                                        background: activity.type === 'join' ? 'var(--primary-blue)' :
                                                            activity.type === 'message' ? 'var(--primary-aqua)' :
                                                                'var(--success)',
                                                        marginTop: '8px',
                                                        flex: '0 0 auto'
                                                    }}></div>
                                                    <div style={{ flex: 1 }}>
                                                        <p className="text-sm" style={{ marginBottom: 'var(--spacing-xs)' }}>
                                                            {activity.text}
                                                        </p>
                                                        <p className="text-sm text-light" style={{ marginBottom: 0 }}>
                                                            {activity.time}
                                                        </p>
                                                    </div>
                                                </div>
                                                {index < activities.length - 1 && (
                                                    <div className="divider" style={{ margin: 'var(--spacing-md) 0' }}></div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
