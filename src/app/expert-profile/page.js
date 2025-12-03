'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ExpertProfilePage() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        profilePhoto: null,
        name: 'Alex Johnson',
        email: 'alex@example.com',
        expertise: ['Frontend', 'UI/UX', 'Mobile'],
        experience: 'intermediate',
        bio: '',
        available: true
    })
    const [photoPreview, setPhotoPreview] = useState(null)

    const handlePhotoChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setFormData({ ...formData, profilePhoto: file })
            const reader = new FileReader()
            reader.onloadend = () => {
                setPhotoPreview(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        router.push('/dashboard')
    }

    return (
        <div className="center-layout">
            <div style={{ maxWidth: '750px', width: '100%' }}>
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)', animation: 'fadeIn 0.6s ease-out' }}>
                    <h1 style={{ fontSize: 'var(--font-size-4xl)', fontWeight: '400', marginBottom: 'var(--spacing-sm)' }}>
                        Expert Profile
                    </h1>
                    <p className="text-lg text-gray">Complete your profile to start joining teams</p>
                </div>

                <div className="card card-lg" style={{ animation: 'scaleIn 0.5s ease-out 0.2s backwards' }}>
                    <form onSubmit={handleSubmit}>
                        {/* Profile Photo & Basic Info */}
                        <div style={{ display: 'flex', gap: 'var(--spacing-xl)', marginBottom: 'var(--spacing-2xl)', alignItems: 'flex-start' }}>
                            <div style={{ flex: '0 0 auto', textAlign: 'center' }}>
                                <div style={{
                                    width: '120px',
                                    height: '120px',
                                    borderRadius: 'var(--radius-full)',
                                    background: photoPreview ? `url(${photoPreview})` : 'var(--gray-100)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: 'var(--font-size-5xl)',
                                    color: 'var(--gray-400)',
                                    border: '3px solid var(--gray-200)',
                                    marginBottom: 'var(--spacing-md)'
                                }}>
                                    {!photoPreview && '👤'}
                                </div>

                                <label className="btn btn-sm btn-secondary" style={{ cursor: 'pointer', fontSize: 'var(--font-size-sm)' }}>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handlePhotoChange}
                                        style={{ display: 'none' }}
                                    />
                                    Change Photo
                                </label>
                            </div>

                            <div style={{ flex: '1' }}>
                                <div className="input-group">
                                    <label className="input-label">Full Name</label>
                                    <input
                                        type="text"
                                        className="input"
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
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="divider"></div>

                        {/* Expertise Badges */}
                        <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
                            <label className="input-label">Expertise Areas</label>
                            <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
                                {formData.expertise.map((skill, index) => (
                                    <span key={index} className="chip chip-blue">
                                        {skill}
                                    </span>
                                ))}
                                <button type="button" className="chip chip-selectable">
                                    + Edit
                                </button>
                            </div>
                        </div>

                        {/* Experience Level */}
                        <div className="input-group">
                            <label className="input-label">Experience Level</label>
                            <select
                                className="input select"
                                value={formData.experience}
                                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                            >
                                <option value="beginner">Beginner (0-2 years)</option>
                                <option value="intermediate">Intermediate (2-5 years)</option>
                                <option value="advanced">Advanced (5-10 years)</option>
                                <option value="expert">Expert (10+ years)</option>
                            </select>
                        </div>

                        {/* Bio */}
                        <div className="input-group">
                            <label className="input-label">Bio</label>
                            <textarea
                                className="input textarea"
                                placeholder="Tell teams about your experience and what you're passionate about..."
                                value={formData.bio}
                                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                style={{ minHeight: '120px' }}
                            />
                        </div>

                        {/* Availability */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: 'var(--spacing-lg)',
                            background: 'var(--gray-50)',
                            borderRadius: 'var(--radius-md)',
                            marginBottom: 'var(--spacing-xl)'
                        }}>
                            <div>
                                <h4 className="text-base font-medium" style={{ marginBottom: 'var(--spacing-xs)' }}>
                                    Available for Projects
                                </h4>
                                <p className="text-sm text-light" style={{ marginBottom: 0 }}>
                                    Teams can see you're open to joining new projects
                                </p>
                            </div>
                            <label style={{
                                position: 'relative',
                                display: 'inline-block',
                                width: '52px',
                                height: '28px',
                                cursor: 'pointer'
                            }}>
                                <input
                                    type="checkbox"
                                    checked={formData.available}
                                    onChange={(e) => setFormData({ ...formData, available: e.target.checked })}
                                    style={{ opacity: 0, width: 0, height: 0 }}
                                />
                                <span style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: formData.available ? 'var(--primary-blue)' : 'var(--gray-300)',
                                    borderRadius: 'var(--radius-full)',
                                    transition: 'all var(--transition-base)',
                                }}>
                                    <span style={{
                                        position: 'absolute',
                                        content: '',
                                        height: '20px',
                                        width: '20px',
                                        left: formData.available ? '28px' : '4px',
                                        bottom: '4px',
                                        background: 'white',
                                        borderRadius: '50%',
                                        transition: 'all var(--transition-base)',
                                    }}></span>
                                </span>
                            </label>
                        </div>

                        <button type="submit" className="btn btn-primary btn-lg w-full">
                            Save Profile
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
