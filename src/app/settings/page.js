'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navigation from '@/components/Navigation'

export default function SettingsPage() {
    const router = useRouter()
    const [settings, setSettings] = useState({
        emailNotifications: true,
        projectUpdates: true,
        messages: true,
        weeklyDigest: false,
        profileVisibility: 'public'
    })

    const handleLogout = () => {
        router.push('/login')
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
                <div className="container" style={{ maxWidth: '900px' }}>
                    <h1 className="text-4xl mb-2xl">Settings</h1>

                    {/* Account Section */}
                    <div className="card" style={{ marginBottom: 'var(--spacing-lg)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
                            <span style={{ fontSize: '24px' }}>👤</span>
                            <h2 className="text-2xl" style={{ marginBottom: 0 }}>Account</h2>
                        </div>
                        <div className="divider"></div>
                        <div style={{ display: 'grid', gap: 'var(--spacing-md)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <h3 className="text-base font-medium mb-xs">Email</h3>
                                    <p className="text-sm text-light" style={{ marginBottom: 0 }}>user@example.com</p>
                                </div>
                                <button className="btn btn-secondary btn-sm">Change</button>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <h3 className="text-base font-medium mb-xs">Password</h3>
                                    <p className="text-sm text-light" style={{ marginBottom: 0 }}>••••••••</p>
                                </div>
                                <button className="btn btn-secondary btn-sm">Change</button>
                            </div>
                        </div>
                    </div>

                    {/* Profile Section */}
                    <div className="card" style={{ marginBottom: 'var(--spacing-lg)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
                            <span style={{ fontSize: '24px' }}>✏️</span>
                            <h2 className="text-2xl" style={{ marginBottom: 0 }}>Profile</h2>
                        </div>
                        <div className="divider"></div>
                        <div style={{ display: 'grid', gap: 'var(--spacing-md)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <h3 className="text-base font-medium mb-xs">Edit Profile</h3>
                                    <p className="text-sm text-light" style={{ marginBottom: 0 }}>Update your name, bio, and expertise</p>
                                </div>
                                <button className="btn btn-secondary btn-sm">Edit</button>
                            </div>
                        </div>
                    </div>

                    {/* Notifications Section */}
                    <div className="card" style={{ marginBottom: 'var(--spacing-lg)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
                            <span style={{ fontSize: '24px' }}>🔔</span>
                            <h2 className="text-2xl" style={{ marginBottom: 0 }}>Notifications</h2>
                        </div>
                        <div className="divider"></div>
                        <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
                            {[
                                { key: 'emailNotifications', label: 'Email Notifications', desc: 'Receive email updates about your projects' },
                                { key: 'projectUpdates', label: 'Project Updates', desc: 'Get notified when someone joins or updates your project' },
                                { key: 'messages', label: 'Messages', desc: 'Receive notifications for new messages' },
                                { key: 'weeklyDigest', label: 'Weekly Digest', desc: 'Get a weekly summary of your activity' }
                            ].map(item => (
                                <div key={item.key} style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <div>
                                        <h3 className="text-base font-medium mb-xs">{item.label}</h3>
                                        <p className="text-sm text-light" style={{ marginBottom: 0 }}>{item.desc}</p>
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
                                            checked={settings[item.key]}
                                            onChange={(e) => setSettings({ ...settings, [item.key]: e.target.checked })}
                                            style={{ opacity: 0, width: 0, height: 0 }}
                                        />
                                        <span style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            background: settings[item.key] ? 'var(--primary-blue)' : 'var(--gray-300)',
                                            borderRadius: 'var(--radius-full)',
                                            transition: 'all var(--transition-base)',
                                        }}>
                                            <span style={{
                                                position: 'absolute',
                                                content: '',
                                                height: '20px',
                                                width: '20px',
                                                left: settings[item.key] ? '28px' : '4px',
                                                bottom: '4px',
                                                background: 'white',
                                                borderRadius: '50%',
                                                transition: 'all var(--transition-base)',
                                            }}></span>
                                        </span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Privacy Section */}
                    <div className="card" style={{ marginBottom: 'var(--spacing-lg)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
                            <span style={{ fontSize: '24px' }}>🔒</span>
                            <h2 className="text-2xl" style={{ marginBottom: 0 }}>Privacy</h2>
                        </div>
                        <div className="divider"></div>
                        <div className="input-group" style={{ marginBottom: 0 }}>
                            <label className="input-label">Profile Visibility</label>
                            <select
                                className="input select"
                                value={settings.profileVisibility}
                                onChange={(e) => setSettings({ ...settings, profileVisibility: e.target.value })}
                            >
                                <option value="public">Public - Anyone can see your profile</option>
                                <option value="members">Members Only - Only FlowHub members can see</option>
                                <option value="private">Private - Only visible to your teams</option>
                            </select>
                        </div>
                    </div>

                    {/* Logout Section */}
                    <div className="card" style={{ border: '1px solid var(--gray-200)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h3 className="text-base font-medium mb-xs">Logout</h3>
                                <p className="text-sm text-light" style={{ marginBottom: 0 }}>Sign out of your account</p>
                            </div>
                            <button className="btn btn-secondary" onClick={handleLogout}>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
