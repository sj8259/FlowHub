'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
    const pathname = usePathname()

    const navItems = [
        { name: 'Home', icon: '🏠', href: '/dashboard' },
        { name: 'My Projects', icon: '📁', href: '/dashboard' },
        { name: 'Explore', icon: '🔍', href: '/explore' },
        { name: 'Messages', icon: '💬', href: '/messages' },
        { name: 'Teams', icon: '👥', href: '/workspace' },
        { name: 'Settings', icon: '⚙️', href: '/settings' },
    ]

    return (
        <nav style={{
            width: '260px',
            height: '100vh',
            background: 'var(--white)',
            borderRight: '1px solid var(--gray-200)',
            padding: 'var(--spacing-lg)',
            position: 'fixed',
            left: 0,
            top: 0,
            overflowY: 'auto'
        }}>
            <Link href="/dashboard" style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-sm)',
                marginBottom: 'var(--spacing-2xl)',
                textDecoration: 'none'
            }}>
                <div style={{ width: '32px', height: '32px' }}>
                    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                        <circle cx="200" cy="150" r="35" fill="#3B82F6" />
                        <circle cx="200" cy="150" r="25" fill="#60A5FA" />
                        <circle cx="200" cy="150" r="12" fill="white" />
                        <circle cx="120" cy="130" r="12" fill="#3B82F6" />
                        <circle cx="120" cy="130" r="6" fill="white" />
                        <circle cx="280" cy="130" r="12" fill="#3B82F6" />
                        <circle cx="280" cy="130" r="6" fill="white" />
                        <path d="M 120 130 Q 160 110 200 130" stroke="#3B82F6" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.6" />
                        <path d="M 200 130 Q 240 150 280 130" stroke="#3B82F6" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.6" />
                    </svg>
                </div>
                <h2 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--primary-blue)', marginBottom: 0 }}>
                    FlowHub
                </h2>
            </Link>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
                {navItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'var(--spacing-md)',
                                padding: '12px 16px',
                                borderRadius: 'var(--radius-lg)',
                                background: isActive ? 'var(--gray-100)' : 'transparent',
                                color: isActive ? 'var(--primary-blue)' : 'var(--gray-700)',
                                fontWeight: isActive ? '500' : '400',
                                transition: 'all var(--transition-fast)',
                                textDecoration: 'none'
                            }}
                        >
                            <span style={{ fontSize: '20px' }}>{item.icon}</span>
                            <span>{item.name}</span>
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}
