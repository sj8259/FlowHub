'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RookieSetupPage() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        profilePhoto: null,
        introduction: ''
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
            <div style={{ maxWidth: '650px', width: '100%' }}>
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)', animation: 'fadeIn 0.6s ease-out' }}>
                    <h1 style={{ fontSize: 'var(--font-size-4xl)', fontWeight: '400', marginBottom: 'var(--spacing-sm)' }}>
                        Complete Your Profile
                    </h1>
                    <p className="text-lg text-gray">Tell us about yourself and what you want to build</p>
                </div>

                <div className="card card-lg" style={{ animation: 'scaleIn 0.5s ease-out 0.2s backwards' }}>
                    <form onSubmit={handleSubmit}>
                        {/* Step 1: Profile Photo */}
                        <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--spacing-sm)' }}>
                                <span className="badge badge-success" style={{ marginRight: 'var(--spacing-sm)' }}>Step 1</span>
                                <h3 className="text-xl" style={{ marginBottom: 0 }}>Profile Photo</h3>
                            </div>
                            <p className="text-sm text-light mb-lg">Add a photo so teams can recognize you</p>

                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-lg)' }}>
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
                                    transition: 'all var(--transition-base)'
                                }}>
                                    {!photoPreview && '👤'}
                                </div>

                                <label className="btn btn-secondary" style={{ cursor: 'pointer' }}>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handlePhotoChange}
                                        style={{ display: 'none' }}
                                    />
                                    Choose Photo
                                </label>
                            </div>
                        </div>

                        <div className="divider"></div>

                        {/* Step 2: Introduction */}
                        <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--spacing-sm)' }}>
                                <span className="badge badge-success" style={{ marginRight: 'var(--spacing-sm)' }}>Step 2</span>
                                <h3 className="text-xl" style={{ marginBottom: 0 }}>What do you want to build?</h3>
                            </div>
                            <p className="text-sm text-light mb-lg">Share your vision and what you're passionate about</p>

                            <textarea
                                className="input textarea"
                                placeholder="I want to build..."
                                value={formData.introduction}
                                onChange={(e) => setFormData({ ...formData, introduction: e.target.value })}
                                required
                                style={{ minHeight: '150px' }}
                            />
                            <p className="text-sm text-light" style={{ marginTop: 'var(--spacing-sm)' }}>
                                {formData.introduction.length} characters
                            </p>
                        </div>

                        <button type="submit" className="btn btn-primary btn-lg w-full">
                            Continue to Dashboard
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
