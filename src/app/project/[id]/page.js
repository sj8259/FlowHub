'use client'

import { useRouter } from 'next/navigation'
import Navigation from '@/components/Navigation'

export default function ProjectDetailPage({ params }) {
    const router = useRouter()

    const project = {
        title: 'AI-Powered Recipe Generator',
        description: 'Build an AI application that generates personalized recipes based on available ingredients, dietary preferences, and nutritional goals. The app will use machine learning to understand user preferences and suggest creative recipe combinations.',
        rookie: {
            name: 'Sarah Martinez',
            avatar: 'SM',
            bio: 'Passionate about food tech and healthy eating. Looking to build my first AI-powered app.'
        },
        skills: ['React', 'Python', 'Machine Learning', 'UI/UX Design', 'API Development'],
        timeline: '3 months',
        deadline: 'June 30, 2024',
        status: 'Open',
        teamMembers: [
            { name: 'Alex Chen', role: 'Frontend', avatar: 'AC' },
            { name: 'Jordan Lee', role: 'Backend', avatar: 'JL' }
        ],
        comments: [
            { id: 1, author: 'Alex Chen', text: 'I love this idea! I can handle the React frontend.', time: '2 days ago' },
            { id: 2, author: 'Sarah Martinez', text: 'That would be amazing! Let\'s connect.', time: '2 days ago' }
        ]
    }

    const handleJoinTeam = () => {
        router.push('/workspace')
    }

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
                <div className="container" style={{ maxWidth: '1200px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--spacing-2xl)' }}>
                        {/* Left Column - Main Content */}
                        <div>
                            {/* Header */}
                            <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-lg)' }}>
                                    <h1 className="text-4xl" style={{ marginBottom: 0 }}>{project.title}</h1>
                                    <span className="badge badge-open">{project.status}</span>
                                </div>
                            </div>

                            {/* Project Description */}
                            <div className="card" style={{ marginBottom: 'var(--spacing-2xl)' }}>
                                <h2 className="text-xl mb-lg">About This Project</h2>
                                <p className="text-base text-gray" style={{ lineHeight: 1.7 }}>
                                    {project.description}
                                </p>
                            </div>

                            {/* Skills Needed */}
                            <div className="card" style={{ marginBottom: 'var(--spacing-2xl)' }}>
                                <h2 className="text-xl mb-lg">Skills Needed</h2>
                                <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
                                    {project.skills.map((skill, idx) => (
                                        <span key={idx} className="chip chip-blue">{skill}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Rookie Profile Preview */}
                            <div className="card" style={{ marginBottom: 'var(--spacing-2xl)' }}>
                                <h2 className="text-xl mb-lg">Project Creator</h2>
                                <div style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'flex-start' }}>
                                    <div className="avatar avatar-lg" style={{ background: 'var(--primary-blue)', color: 'white' }}>
                                        {project.rookie.avatar}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h3 className="text-lg mb-xs">{project.rookie.name}</h3>
                                        <span className="badge mb-md">Rookie</span>
                                        <p className="text-sm text-gray" style={{ marginBottom: 0 }}>
                                            {project.rookie.bio}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Timeline */}
                            <div className="card">
                                <h2 className="text-xl mb-lg">Timeline</h2>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--spacing-lg)' }}>
                                    <div>
                                        <p className="text-sm text-light mb-xs">Duration</p>
                                        <p className="text-base font-medium">{project.timeline}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-light mb-xs">Target Completion</p>
                                        <p className="text-base font-medium">{project.deadline}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Sidebar */}
                        <div>
                            {/* Join Team Card */}
                            <div className="card" style={{ marginBottom: 'var(--spacing-2xl)' }}>
                                <h3 className="text-xl mb-md">Join This Team</h3>
                                <p className="text-sm text-gray mb-lg">
                                    Contribute your expertise and help bring this project to life
                                </p>
                                <button className="btn btn-primary btn-lg w-full" onClick={handleJoinTeam}>
                                    🚀 Join as Expert
                                </button>
                            </div>

                            {/* Current Team Members */}
                            <div className="card" style={{ marginBottom: 'var(--spacing-2xl)' }}>
                                <h3 className="text-lg mb-lg">Team Members ({project.teamMembers.length})</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                                    {project.teamMembers.map((member, idx) => (
                                        <div key={idx} style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center' }}>
                                            <div className="avatar avatar-sm" style={{ background: `hsl(${idx * 120}, 65%, 60%)`, color: 'white' }}>
                                                {member.avatar}
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium" style={{ marginBottom: 0 }}>{member.name}</p>
                                                <p className="text-sm text-light" style={{ marginBottom: 0 }}>{member.role}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Comments Section */}
                            <div className="card">
                                <h3 className="text-lg mb-lg">Discussion</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
                                    {project.comments.map((comment) => (
                                        <div key={comment.id}>
                                            <div style={{
                                                padding: 'var(--spacing-md)',
                                                background: 'var(--gray-50)',
                                                borderRadius: 'var(--radius-lg)'
                                            }}>
                                                <p className="text-sm font-medium mb-xs">{comment.author}</p>
                                                <p className="text-sm text-gray mb-xs">{comment.text}</p>
                                                <p className="text-sm text-light" style={{ marginBottom: 0 }}>{comment.time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div style={{ marginTop: 'var(--spacing-md)' }}>
                                    <input
                                        type="text"
                                        className="input"
                                        placeholder="Add a comment..."
                                        style={{ width: '100%' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
