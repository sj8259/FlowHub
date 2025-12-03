'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'

export default function MessagesPage() {
    const [selectedChat, setSelectedChat] = useState(1)
    const [newMessage, setNewMessage] = useState('')

    const contacts = [
        { id: 1, name: 'Alex Chen', avatar: 'AC', lastMessage: 'Sounds good! See you then.', time: '10 min ago', unread: 0, online: true },
        { id: 2, name: 'Sarah Martinez', avatar: 'SM', lastMessage: 'Can we discuss the API design?', time: '1h ago', unread: 2, online: true },
        { id: 3, name: 'Jordan Lee', avatar: 'JL', lastMessage: 'Thanks for the feedback!', time: '2h ago', unread: 0, online: false },
        { id: 4, name: 'Emily Chen', avatar: 'EC', lastMessage: 'I\'ll send over the mockups', time: '1d ago', unread: 0, online: true },
        { id: 5, name: 'Mike Johnson', avatar: 'MJ', lastMessage: 'Looking forward to it!', time: '2d ago', unread: 0, online: false },
    ]

    const chatMessages = {
        1: [
            { id: 1, author: 'Alex Chen', text: 'Hey! I finished the frontend components.', time: '2:30 PM', isMe: false },
            { id: 2, author: 'You', text: 'Awesome work! Did you test them on mobile?', time: '2:35 PM', isMe: true },
            { id: 3, author: 'Alex Chen', text: 'Yes, they\'re fully responsive. Want to review?', time: '2:40 PM', isMe: false },
            { id: 4, author: 'You', text: 'Sure, let\'s meet tomorrow at 10 AM?', time: '2:45 PM', isMe: true },
            { id: 5, author: 'Alex Chen', text: 'Sounds good! See you then.', time: '2:50 PM', isMe: false },
        ],
        2: [
            { id: 1, author: 'Sarah Martinez', text: 'Hi! Quick question about the project timeline.', time: '1:00 PM', isMe: false },
            { id: 2, author: 'You', text: 'Sure, what\'s up?', time: '1:05 PM', isMe: true },
            { id: 3, author: 'Sarah Martinez', text: 'Can we discuss the API design?', time: '1:10 PM', isMe: false },
        ]
    }

    const currentContact = contacts.find(c => c.id === selectedChat)
    const currentMessages = chatMessages[selectedChat] || []

    return (
        <div style={{ display: 'flex' }}>
            <Navigation />

            <main style={{
                marginLeft: '260px',
                flex: 1,
                background: 'var(--white)',
                height: '100vh',
                overflow: 'hidden'
            }}>
                <div style={{ display: 'grid', gridTemplateColumns: '350px 1fr', height: '100%' }}>
                    {/* Left - Contact List */}
                    <div style={{
                        borderRight: '1px solid var(--gray-200)',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%'
                    }}>
                        {/* Header */}
                        <div style={{
                            padding: 'var(--spacing-lg)',
                            borderBottom: '1px solid var(--gray-200)'
                        }}>
                            <h2 className="text-2xl" style={{ marginBottom: 'var(--spacing-md)' }}>Messages</h2>
                            <input
                                type="search"
                                className="input"
                                placeholder="Search conversations..."
                                style={{ width: '100%' }}
                            />
                        </div>

                        {/* Contacts */}
                        <div style={{ flex: 1, overflowY: 'auto' }}>
                            {contacts.map(contact => (
                                <div
                                    key={contact.id}
                                    onClick={() => setSelectedChat(contact.id)}
                                    style={{
                                        padding: 'var(--spacing-lg)',
                                        borderBottom: '1px solid var(--gray-100)',
                                        cursor: 'pointer',
                                        background: selectedChat === contact.id ? 'var(--gray-50)' : 'transparent',
                                        transition: 'all var(--transition-fast)',
                                        display: 'flex',
                                        gap: 'var(--spacing-md)',
                                        alignItems: 'flex-start'
                                    }}
                                >
                                    <div style={{ position: 'relative', flex: '0 0 auto' }}>
                                        <div className="avatar" style={{ background: `hsl(${contact.id * 70}, 65%, 60%)`, color: 'white' }}>
                                            {contact.avatar}
                                        </div>
                                        {contact.online && (
                                            <div style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                right: 0,
                                                width: '12px',
                                                height: '12px',
                                                borderRadius: '50%',
                                                background: 'var(--success)',
                                                border: '2px solid white'
                                            }}></div>
                                        )}
                                    </div>
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-xs)' }}>
                                            <h3 className="text-base font-medium" style={{ marginBottom: 0 }}>{contact.name}</h3>
                                            <span className="text-sm text-light">{contact.time}</span>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <p className="text-sm text-gray" style={{
                                                marginBottom: 0,
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap'
                                            }}>
                                                {contact.lastMessage}
                                            </p>
                                            {contact.unread > 0 && (
                                                <span style={{
                                                    minWidth: '20px',
                                                    height: '20px',
                                                    padding: '0 6px',
                                                    borderRadius: '10px',
                                                    background: 'var(--primary-blue)',
                                                    color: 'white',
                                                    fontSize: '11px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: '600',
                                                    marginLeft: 'var(--spacing-sm)'
                                                }}>
                                                    {contact.unread}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Chat Window */}
                    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        {/* Chat Header */}
                        <div style={{
                            padding: 'var(--spacing-lg)',
                            borderBottom: '1px solid var(--gray-200)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--spacing-md)'
                        }}>
                            {currentContact && (
                                <>
                                    <div style={{ position: 'relative' }}>
                                        <div className="avatar" style={{ background: `hsl(${currentContact.id * 70}, 65%, 60%)`, color: 'white' }}>
                                            {currentContact.avatar}
                                        </div>
                                        {currentContact.online && (
                                            <div style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                right: 0,
                                                width: '12px',
                                                height: '12px',
                                                borderRadius: '50%',
                                                background: 'var(--success)',
                                                border: '2px solid white'
                                            }}></div>
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="text-lg" style={{ marginBottom: 0 }}>{currentContact.name}</h3>
                                        <p className="text-sm text-light" style={{ marginBottom: 0 }}>
                                            {currentContact.online ? 'Online' : 'Offline'}
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Messages */}
                        <div style={{
                            flex: 1,
                            padding: 'var(--spacing-2xl)',
                            overflowY: 'auto',
                            background: 'var(--gray-50)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--spacing-md)'
                        }}>
                            {currentMessages.map(message => (
                                <div key={message.id} style={{
                                    display: 'flex',
                                    justifyContent: message.isMe ? 'flex-end' : 'flex-start'
                                }}>
                                    <div style={{
                                        maxWidth: '60%',
                                        padding: 'var(--spacing-md)',
                                        background: message.isMe ? 'var(--primary-blue)' : 'var(--white)',
                                        color: message.isMe ? 'white' : 'var(--gray-800)',
                                        borderRadius: 'var(--radius-lg)',
                                        borderBottomRightRadius: message.isMe ? '4px' : 'var(--radius-lg)',
                                        borderBottomLeftRadius: message.isMe ? 'var(--radius-lg)' : '4px',
                                        boxShadow: message.isMe ? 'none' : 'var(--shadow-sm)'
                                    }}>
                                        <p className="text-base" style={{ marginBottom: 'var(--spacing-xs)' }}>
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
                            <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
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
                </div>
            </main>
        </div>
    )
}
