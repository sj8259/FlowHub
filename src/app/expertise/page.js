'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const expertiseOptions = [
    { id: 1, name: 'Frontend', icon: '🎨', color: 'blue' },
    { id: 2, name: 'Backend', icon: '⚙️', color: 'purple' },
    { id: 3, name: 'Machine Learning', icon: '🤖', color: 'aqua' },
    { id: 4, name: 'UI/UX', icon: '✨', color: 'blue' },
    { id: 5, name: 'DevOps', icon: '🚀', color: 'purple' },
    { id: 6, name: 'Mobile', icon: '📱', color: 'aqua' },
    { id: 7, name: 'Data Engineering', icon: '📊', color: 'blue' },
    { id: 8, name: 'Cybersecurity', icon: '🔒', color: 'purple' },
    { id: 9, name: 'Cloud', icon: '☁️', color: 'aqua' },
    { id: 10, name: 'Blockchain', icon: '⛓️', color: 'blue' },
    { id: 11, name: 'Game Dev', icon: '🎮', color: 'purple' },
    { id: 12, name: 'IoT', icon: '📡', color: 'aqua' },
]

export default function ExpertiseSelectionPage() {
    const router = useRouter()
    const [selectedExpertise, setSelectedExpertise] = useState([])

    const toggleExpertise = (id) => {
        setSelectedExpertise(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        )
    }

    const handleSubmit = () => {
        if (selectedExpertise.length === 0) {
            alert('Please select at least one area of expertise')
            return
        }
        router.push('/expert-profile')
    }

    return (
        <div className="center-layout">
            <div style={{ maxWidth: '900px', width: '100%' }}>
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)', animation: 'fadeIn 0.6s ease-out' }}>
                    <h1 style={{ fontSize: 'var(--font-size-4xl)', fontWeight: '400', marginBottom: 'var(--spacing-sm)' }}>
                        Select Your Expertise
                    </h1>
                    <p className="text-lg text-gray">Choose the areas where you can help teams succeed</p>
                </div>

                <div className="card card-lg" style={{ animation: 'scaleIn 0.5s ease-out 0.2s backwards' }}>
                    <div className="grid grid-4" style={{ gap: 'var(--spacing-md)' }}>
                        {expertiseOptions.map((expertise, index) => (
                            <div
                                key={expertise.id}
                                className={`card card-interactive ${selectedExpertise.includes(expertise.id) ? 'selected' : ''}`}
                                onClick={() => toggleExpertise(expertise.id)}
                                style={{
                                    padding: 'var(--spacing-lg)',
                                    animation: `scaleIn 0.5s ease-out ${0.3 + index * 0.05}s backwards`,
                                    cursor: 'pointer'
                                }}
                            >
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: 'var(--font-size-4xl)', marginBottom: 'var(--spacing-sm)' }}>
                                        {expertise.icon}
                                    </div>
                                    <h3 className="text-base font-medium" style={{ marginBottom: 0 }}>{expertise.name}</h3>
                                    {selectedExpertise.includes(expertise.id) && (
                                        <div style={{
                                            marginTop: 'var(--spacing-sm)',
                                            animation: 'scaleIn 0.3s ease-out'
                                        }}>
                                            <span style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: '24px',
                                                height: '24px',
                                                background: 'var(--primary-blue)',
                                                borderRadius: 'var(--radius-full)',
                                                color: 'white',
                                                fontSize: '14px'
                                            }}>✓</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: 'var(--spacing-2xl)', textAlign: 'center' }}>
                        <p className="text-sm text-light mb-lg">
                            {selectedExpertise.length} area{selectedExpertise.length !== 1 ? 's' : ''} selected
                        </p>
                        <button
                            className="btn btn-primary btn-lg"
                            onClick={handleSubmit}
                            style={{ minWidth: '200px' }}
                        >
                            Save Expertise
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
