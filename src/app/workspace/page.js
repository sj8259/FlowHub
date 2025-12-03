'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'

export default function WorkspacePage() {
    const [newTask, setNewTask] = useState('')
    const [newMessage, setNewMessage] = useState('')

    const tasks = {
        todo: [
            { id: 1, title: 'Design database schema', assignee: 'Jordan' },
            { id: 2, title: 'Research ML models', assignee: 'Sarah' }
        ],
        inProgress: [
            { id: 3, title: 'Build React components', assignee: 'Alex' },
            { id: 4, title: 'Setup API endpoints', assignee: 'Jordan' }
        ],
        done: [
            { id: 5, title: 'Project kickoff meeting', assignee: 'All' },
            { id: 6, title: 'Setup repository', assignee: 'Alex' }
        ]
    }

    const messages = [
        { id: 1, author: 'Alex Chen', text: 'Hey team! I just pushed the initial React setup.', time: '10:30 AM', isMe: false },
        { id: 2, author: 'You', text: 'Great work! I\'ll review it this afternoon.', time: '10:45 AM', isMe: true },
        { id: 3, author: 'Jordan Lee', text: 'I\'m working on the backend architecture. Will share docs soon.', time: '11:20 AM', isMe: false },
        { id: 4, author: 'Sarah Martinez', text: 'Excited to see it all come together! 🚀', time: '11:25 AM', isMe: false }
    ]

    const teamMembers = [
        { name: 'Sarah Martinez', role: 'Rookie / Creator', avatar: 'SM', status: 'online' },
        { name: 'Alex Chen', role: 'Frontend Expert', avatar: 'AC', status: 'online' },
        { name: 'Jordan Lee', role: 'Backend Expert', avatar: 'JL', status: 'away' },
        { name: 'You', role: 'UI/UX Expert', avatar: 'ME', status: 'online' }
    ]

    return (
        <div style={{ display: 'flex' }}>
            <Navigation />

            <main style={{
                marginLeft: '260px',
                flex: 1,
                background: 'var(--gray-50)',
                height: '100vh',
                overflow: 'hidden'
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '350px 1fr 320px',
                    height: '100%'
                }}>
                    {/* Left Column - Task List */}
                    <div style={{
                        background: 'var(--white)',
                        borderRight: '1px solid var(--gray-200)',
                        padding: 'var(--spacing-lg)',
                        overflowY: 'auto'
                    }}>
                        <h2 className="text-xl mb-lg">Tasks</h2>

                        {/* Add Task Input */}
                        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                            <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Add a task..."
                                    value={newTask}
                                    onChange={(e) => setNewTask(e.target.value)}
                                    style={{ flex: 1, padding: '10px 12px' }}
                                />
                                <button className="btn btn-primary btn-sm">+</button>
                            </div>
                        </div>

                        {/* To Do */}
                        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                            <h3 className="text-sm font-medium text-light mb-md">TO DO ({tasks.todo.length})</h3>
                            {tasks.todo.map(task => (
                                <div key={task.id} style={{
                                    padding: 'var(--spacing-md)',
                                    background: 'var(--gray-50)',
                                    borderRadius: 'var(--radius-md)',
                                    marginBottom: 'var(--spacing-sm)',
                                    display: 'flex',
                                    gap: 'var(--spacing-sm)'
                                }}>
                                    <input type="checkbox" style={{ marginTop: '2px' }} />
                                    <div style={{ flex: 1 }}>
                                        <p className="text-sm" style={{ marginBottom: 'var(--spacing-xs)' }}>{task.title}</p>
                                        <p className="text-sm text-light" style={{ marginBottom: 0 }}>{task.assignee}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* In Progress */}
                        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                            <h3 className="text-sm font-medium text-light mb-md">IN PROGRESS ({tasks.inProgress.length})</h3>
                            {tasks.inProgress.map(task => (
                                <div key={task.id} style={{
                                    padding: 'var(--spacing-md)',
                                    background: 'rgba(66, 133, 244, 0.08)',
                                    borderRadius: 'var(--radius-md)',
                                    marginBottom: 'var(--spacing-sm)',
                                    display: 'flex',
                                    gap: 'var(--spacing-sm)',
                                    borderLeft: '3px solid var(--primary-blue)'
                                }}>
                                    <input type="checkbox" style={{ marginTop: '2px' }} />
                                    <div style={{ flex: 1 }}>
                                        <p className="text-sm" style={{ marginBottom: 'var(--spacing-xs)' }}>{task.title}</p>
                                        <p className="text-sm text-light" style={{ marginBottom: 0 }}>{task.assignee}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Done */}
                        <div>
                            <h3 className="text-sm font-medium text-light mb-md">DONE ({tasks.done.length})</h3>
                            {tasks.done.map(task => (
                                <div key={task.id} style={{
                                    padding: 'var(--spacing-md)',
                                    background: 'rgba(52, 168, 83, 0.08)',
                                    borderRadius: 'var(--radius-md)',
                                    marginBottom: 'var(--spacing-sm)',
                                    display: 'flex',
                                    gap: 'var(--spacing-sm)'
                                }}>
                                    <input type="checkbox" checked style={{ marginTop: '2px' }} />
                                    <div style={{ flex: 1 }}>
                                        <p className="text-sm text-gray" style={{ marginBottom: 'var(--spacing-xs)', textDecoration: 'line-through' }}>{task.title}</p>
                                        <p className="text-sm text-light" style={{ marginBottom: 0 }}>{task.assignee}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Center Column - Discussion */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        background: 'var(--white)',
                        height: '100%'
                    }}>
                        {/* Chat Header */}
                        <div style={{
                            padding: 'var(--spacing-lg)',
                            borderBottom: '1px solid var(--gray-200)'
                        }}>
                            <h2 className="text-xl" style={{ marginBottom: 0 }}>Team Discussion</h2>
                        </div>

                        {/* Messages */}
                        <div style={{
                            flex: 1,
                            padding: 'var(--spacing-lg)',
                            overflowY: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--spacing-md)'
                        }}>
                            {messages.map(message => (
                                <div key={message.id} style={{
                                    display: 'flex',
                                    justifyContent: message.isMe ? 'flex-end' : 'flex-start'
                                }}>
                                    <div style={{
                                        maxWidth: '70%',
                                        padding: 'var(--spacing-md)',
                                        background: message.isMe ? 'var(--primary-blue)' : 'var(--gray-100)',
                                        color: message.isMe ? 'white' : 'var(--gray-800)',
                                        borderRadius: 'var(--radius-lg)',
                                        borderBottomRightRadius: message.isMe ? '4px' : 'var(--radius-lg)',
                                        borderBottomLeftRadius: message.isMe ? 'var(--radius-lg)' : '4px'
                                    }}>
                                        {!message.isMe && (
                                            <p className="text-sm font-medium mb-xs" style={{ color: message.isMe ? 'rgba(255,255,255,0.9)' : 'var(--gray-800)' }}>
                                                {message.author}
                                            </p>
                                        )}
                                        <p className="text-sm" style={{ marginBottom: 'var(--spacing-xs)', color: message.isMe ? 'white' : 'var(--gray-800)' }}>
                                            {message.text}
                                        </p>
                                        <p className="text-sm" style={{ marginBottom: 0, fontSize: '11px', opacity: 0.7 }}>
                                            {message.time}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Message Input */}
                        <div style={{
                            padding: 'var(--spacing-lg)',
                            borderTop: '1px solid var(--gray-200)',
                            background: 'var(--white)'
                        }}>
                            <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Type a message..."
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    style={{ flex: 1 }}
                                />
                                <button className="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Project Info */}
                    <div style={{
                        background: 'var(--white)',
                        borderLeft: '1px solid var(--gray-200)',
                        padding: 'var(--spacing-lg)',
                        overflowY: 'auto'
                    }}>
                        {/* Project Info Card */}
                        <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
                            <h3 className="text-lg mb-md">Project Info</h3>
                            <div className="card card-sm" style={{ background: 'var(--gray-50)' }}>
                                <p className="text-sm text-light mb-xs">AI Recipe Generator</p>
                                <div className="badge badge-warning" style={{ marginTop: 'var(--spacing-sm)' }}>
                                    In Progress
                                </div>
                            </div>
                        </div>

                        {/* Team Members */}
                        <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
                            <h3 className="text-lg mb-md">Team ({teamMembers.length})</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                                {teamMembers.map((member, idx) => (
                                    <div key={idx} style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center' }}>
                                        <div style={{ position: 'relative' }}>
                                            <div className="avatar avatar-sm" style={{ background: `hsl(${idx * 90}, 65%, 60%)`, color: 'white' }}>
                                                {member.avatar}
                                            </div>
                                            <div style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                right: 0,
                                                width: '10px',
                                                height: '10px',
                                                borderRadius: '50%',
                                                background: member.status === 'online' ? 'var(--success)' : 'var(--gray-400)',
                                                border: '2px solid white'
                                            }}></div>
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <p className="text-sm font-medium" style={{ marginBottom: 0 }}>{member.name}</p>
                                            <p className="text-sm text-light" style={{ marginBottom: 0, fontSize: '11px' }}>{member.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Files/Links */}
                        <div>
                            <h3 className="text-lg mb-md">Files & Links</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                                <div style={{
                                    padding: 'var(--spacing-sm)',
                                    background: 'var(--gray-50)',
                                    borderRadius: 'var(--radius-md)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 'var(--spacing-sm)'
                                }}>
                                    <span style={{ fontSize: '20px' }}>📄</span>
                                    <span className="text-sm">project-plan.pdf</span>
                                </div>
                                <div style={{
                                    padding: 'var(--spacing-sm)',
                                    background: 'var(--gray-50)',
                                    borderRadius: 'var(--radius-md)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 'var(--spacing-sm)'
                                }}>
                                    <span style={{ fontSize: '20px' }}>🔗</span>
                                    <span className="text-sm">GitHub Repo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
