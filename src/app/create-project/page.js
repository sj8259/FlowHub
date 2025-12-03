'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navigation from '@/components/Navigation'

const skillOptions = [
    'React', 'Vue', 'Angular', 'Node.js', 'Python', 'Django',
    'Machine Learning', 'AI', 'Data Science', 'UI/UX Design',
    'Mobile', 'iOS', 'Android', 'DevOps', 'Cloud', 'AWS',
    'Cybersecurity', 'Blockchain', 'GraphQL', 'TypeScript'
]

export default function CreateProjectPage() {
    const router = useRouter()
    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        goal: '',
        skills: [],
        deadline: ''
    })

    const toggleSkill = (skill) => {
        setFormData(prev => ({
            ...prev,
            skills: prev.skills.includes(skill)
                ? prev.skills.filter(s => s !== skill)
                : [...prev.skills, skill]
        }))
    }

    const handleNext = () => {
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1)
        }
    }

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    const handlePublish = () => {
        router.push('/dashboard')
    }

    return (
        <div style={{ display: 'flex' }}>
            <Navigation />

            <main style={{
                marginLeft: '260px',
                flex: 1,
                padding: 'var(--spacing-2xl)',
                background: 'var(--gray-50)',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{ maxWidth: '700px', width: '100%' }}>
                    {/* Header */}
                    <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
                        <h1 className="text-4xl mb-sm">Create New Project</h1>
                        <p className="text-lg text-gray">Share your idea and find the perfect team</p>
                    </div>

                    {/* Progress Indicator */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 'var(--spacing-md)',
                        marginBottom: 'var(--spacing-2xl)'
                    }}>
                        {[1, 2, 3].map((step) => (
                            <div key={step} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                                <div style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    background: step <= currentStep ? 'var(--primary-blue)' : 'var(--gray-200)',
                                    color: step <= currentStep ? 'white' : 'var(--gray-500)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: '500',
                                    transition: 'all var(--transition-base)'
                                }}>
                                    {step}
                                </div>
                                {step < 3 && (
                                    <div style={{
                                        width: '60px',
                                        height: '2px',
                                        background: step < currentStep ? 'var(--primary-blue)' : 'var(--gray-200)',
                                        transition: 'all var(--transition-base)'
                                    }}></div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Form Card */}
                    <div className="card card-lg">
                        {/* Step 1: Project Overview */}
                        {currentStep === 1 && (
                            <div className="fade-in">
                                <h2 className="text-2xl mb-lg">Project Overview</h2>

                                <div className="input-group">
                                    <label className="input-label">Project Title</label>
                                    <input
                                        type="text"
                                        className="input"
                                        placeholder="e.g., AI-Powered Recipe Generator"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    />
                                </div>

                                <div className="input-group">
                                    <label className="input-label">Description</label>
                                    <textarea
                                        className="input textarea"
                                        placeholder="Describe your project idea..."
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        style={{ minHeight: '120px' }}
                                    />
                                </div>

                                <div className="input-group">
                                    <label className="input-label">Main Goal</label>
                                    <input
                                        type="text"
                                        className="input"
                                        placeholder="What do you want to achieve?"
                                        value={formData.goal}
                                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Step 2: Skills Needed */}
                        {currentStep === 2 && (
                            <div className="fade-in">
                                <h2 className="text-2xl mb-sm">Skills Needed</h2>
                                <p className="text-sm text-light mb-lg">Select the skills your team will need</p>

                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: 'var(--spacing-sm)',
                                    marginBottom: 'var(--spacing-lg)'
                                }}>
                                    {skillOptions.map((skill) => (
                                        <span
                                            key={skill}
                                            className={`chip chip-selectable ${formData.skills.includes(skill) ? 'selected' : ''}`}
                                            onClick={() => toggleSkill(skill)}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-sm text-light">
                                    {formData.skills.length} skill{formData.skills.length !== 1 ? 's' : ''} selected
                                </p>
                            </div>
                        )}

                        {/* Step 3: Deadline & Publish */}
                        {currentStep === 3 && (
                            <div className="fade-in">
                                <h2 className="text-2xl mb-lg">Deadline & Publish</h2>

                                <div className="input-group">
                                    <label className="input-label">Target Completion Date</label>
                                    <input
                                        type="date"
                                        className="input"
                                        value={formData.deadline}
                                        onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                                    />
                                </div>

                                <div style={{
                                    padding: 'var(--spacing-lg)',
                                    background: 'var(--gray-50)',
                                    borderRadius: 'var(--radius-lg)',
                                    marginTop: 'var(--spacing-xl)'
                                }}>
                                    <h3 className="text-lg mb-md">Project Summary</h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                                        <p className="text-sm"><strong>Title:</strong> {formData.title || 'Not set'}</p>
                                        <p className="text-sm"><strong>Goal:</strong> {formData.goal || 'Not set'}</p>
                                        <p className="text-sm"><strong>Skills:</strong> {formData.skills.length > 0 ? formData.skills.join(', ') : 'None selected'}</p>
                                        <p className="text-sm"><strong>Deadline:</strong> {formData.deadline || 'Not set'}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: 'var(--spacing-2xl)',
                            gap: 'var(--spacing-md)'
                        }}>
                            {currentStep > 1 && (
                                <button className="btn btn-secondary" onClick={handleBack}>
                                    ← Back
                                </button>
                            )}

                            <div style={{ marginLeft: 'auto', display: 'flex', gap: 'var(--spacing-md)' }}>
                                {currentStep < 3 ? (
                                    <button className="btn btn-primary" onClick={handleNext}>
                                        Next →
                                    </button>
                                ) : (
                                    <button className="btn btn-primary btn-lg" onClick={handlePublish}>
                                        🚀 Publish Project
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
