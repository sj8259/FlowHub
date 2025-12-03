'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'

const projects = [
    {
        id: 1,
        title: 'AI-Powered Recipe Generator',
        description: 'Build an AI app that generates personalized recipes based on ingredients and dietary preferences',
        rookie: { name: 'Sarah Martinez', avatar: 'SM' },
        skills: ['React', 'Python', 'Machine Learning', 'UI/UX'],
        status: 'Open',
        deadline: '3 months',
        interested: 12
    },
    {
        id: 2,
        title: 'Social Learning Platform',
        description: 'Create a collaborative platform where students can share notes and study together',
        rookie: { name: 'Mike Johnson', avatar: 'MJ' },
        skills: ['Vue', 'Node.js', 'MongoDB', 'Design'],
        status: 'Open',
        deadline: '4 months',
        interested: 8
    },
    {
        id: 3,
        title: 'Fitness Tracking App',
        description: 'Mobile app for tracking workouts, nutrition, and progress with AI coaching',
        rookie: { name: 'Emily Chen', avatar: 'EC' },
        skills: ['React Native', 'Firebase', 'AI'],
        status: 'Open',
        deadline: '2 months',
        interested: 15
    },
    {
        id: 4,
        title: 'E-commerce Dashboard',
        description: 'Analytics dashboard for small businesses to track sales and inventory',
        rookie: { name: 'Alex Kumar', avatar: 'AK' },
        skills: ['TypeScript', 'GraphQL', 'Data Viz'],
        status: 'Open',
        deadline: '3 months',
        interested: 6
    },
    {
        id: 5,
        title: 'Smart Home Hub',
        description: 'IoT platform to control and automate smart home devices',
        rookie: { name: 'Jordan Lee', avatar: 'JL' },
        skills: ['IoT', 'Python', 'Cloud', 'Mobile'],
        status: 'Open',
        deadline: '5 months',
        interested: 10
    },
    {
        id: 6,
        title: 'Mental Health Companion',
        description: 'App providing meditation, mood tracking, and mental wellness resources',
        rookie: { name: 'Taylor Swift', avatar: 'TS' },
        skills: ['Flutter', 'Backend', 'Design'],
        status: 'Open',
        deadline: '3 months',
        interested: 9
    },
]

export default function ExploreProjectsPage() {
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
                        <h1 className="text-4xl mb-sm">Explore Projects</h1>
                        <p className="text-lg text-gray">Find exciting projects and join innovative teams</p>
                    </div>

                    {/* Filters */}
                    <div style={{
                        display: 'flex',
                        gap: 'var(--spacing-md)',
                        marginBottom: 'var(--spacing-2xl)',
                        flexWrap: 'wrap'
                    }}>
                        <input
                            type="search"
                            className="input"
                            placeholder="Search projects..."
                            style={{ maxWidth: '300px' }}
                        />
                        <select className="input select" style={{ maxWidth: '200px' }}>
                            <option>All Skills</option>
                            <option>Frontend</option>
                            <option>Backend</option>
                            <option>Mobile</option>
                            <option>AI/ML</option>
                        </select>
                        <select className="input select" style={{ maxWidth: '200px' }}>
                            <option>All Timelines</option>
                            <option>1-2 months</option>
                            <option>3-4 months</option>
                            <option>5+ months</option>
                        </select>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-3" style={{ gap: 'var(--spacing-lg)' }}>
                        {projects.map((project, index) => (
                            <Link
                                key={project.id}
                                href={`/project/${project.id}`}
                                className="card card-interactive"
                                style={{
                                    textDecoration: 'none',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    animation: `scaleIn 0.4s ease-out ${index * 0.05}s backwards`
                                }}
                            >
                                {/* Header */}
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    marginBottom: 'var(--spacing-md)'
                                }}>
                                    <h3 className="text-lg mb-xs">{project.title}</h3>
                                    <span className="badge badge-open">{project.status}</span>
                                </div>

                                {/* Description */}
                                <p className="text-sm text-gray mb-lg" style={{ flex: 1 }}>
                                    {project.description}
                                </p>

                                {/* Rookie Info */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 'var(--spacing-sm)',
                                    marginBottom: 'var(--spacing-md)',
                                    padding: 'var(--spacing-sm)',
                                    background: 'var(--gray-50)',
                                    borderRadius: 'var(--radius-md)'
                                }}>
                                    <div className="avatar avatar-sm" style={{ background: 'var(--primary-blue)', color: 'white' }}>
                                        {project.rookie.avatar}
                                    </div>
                                    <span className="text-sm text-gray">{project.rookie.name}</span>
                                </div>

                                {/* Skills */}
                                <div style={{
                                    display: 'flex',
                                    gap: 'var(--spacing-xs)',
                                    flexWrap: 'wrap',
                                    marginBottom: 'var(--spacing-md)'
                                }}>
                                    {project.skills.map((skill, idx) => (
                                        <span key={idx} className="chip chip-purple">{skill}</span>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    paddingTop: 'var(--spacing-md)',
                                    borderTop: '1px solid var(--gray-200)'
                                }}>
                                    <span className="text-sm text-light">⏱️ {project.deadline}</span>
                                    <span className="text-sm text-light">👥 {project.interested} interested</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}
