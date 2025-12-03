<div align="center">
  <img src="./public/logo-icon-only.svg" alt="FlowHub Logo" width="120" height="120">
  <h1>FlowHub - Where Ideas Flow and Teams Connect</h1>
</div>

## 📖 About FlowHub

**FlowHub** is a collaborative platform designed to bridge the gap between ambitious project creators (Rookies) and skilled professionals (Experts). Whether you're a budding entrepreneur with a groundbreaking idea or an experienced developer looking to contribute to exciting projects, FlowHub provides the perfect ecosystem for collaboration and innovation.

### The Problem We Solve

Many talented individuals have innovative project ideas but lack the technical expertise or team to bring them to life. Conversely, skilled professionals often struggle to find meaningful projects that align with their interests and expertise. FlowHub solves this by creating a seamless connection between these two groups.

### How It Works

- **For Rookies**: Share your project ideas, outline your vision, and build a team of experts who are passionate about your concept. Get mentorship, technical support, and collaborative partners to turn your ideas into reality.

- **For Experts**: Discover exciting projects that match your skills and interests. Join teams, contribute your expertise, mentor others, and be part of innovative ventures from the ground up.

### Key Features

- 🎯 **Role-Based Experience**: Tailored interfaces for Rookies and Experts
- 🔐 **Secure Authentication**: Google OAuth and email/password authentication
- 👥 **Team Collaboration**: Built-in workspace with task management and messaging
- 🚀 **Project Discovery**: Explore and filter projects by skills, timeline, and interests
- 💬 **Real-time Communication**: Direct messaging and team chat functionality
- 📊 **Project Management**: Track progress, manage tasks, and collaborate effectively

A beautiful, minimalist platform built with **Next.js** and **Google Material You Design System** where rookies share project ideas and experts join their teams.

## ✨ Features

### 🎨 Design Philosophy
- **Google Material You aesthetics** - Clean white backgrounds, soft shadows, rounded cards
- **Pastel accent colors** - Soft blues (#4285F4), purples (#A66EFF), and aqua (#00B8D4)
- **Minimalist approach** - Lots of whitespace, simple structured layouts
- **Smooth animations** - Subtle transitions and micro-interactions
- **Fully responsive** - Works beautifully on all devices

### 📄 Complete Feature Set (13 Pages)

#### 1. **Login Page** (`/login`)
- Ultra-simple centered layout
- Google-style rounded input fields
- Email/Password authentication
- **Google OAuth integration** - "Continue with Google" button
- Clean FlowHub logo and tagline
- Automatic redirect to dashboard after authentication

#### 2. **Signup Page** (`/signup`)
- Two-path signup flow:
  - "I am a Rookie" - For project creators
  - "I am an Expert" - For team members
- **Google OAuth signup** - Sign up directly with Google account
- Clean form with validation
- Animated card selection
- Role selection after Google authentication

#### 3. **Expertise Selection** (`/expertise`)
- Beautiful grid of expertise cards
- 12+ areas including Frontend, Backend, ML, UI/UX, DevOps, etc.
- Multi-select with visual feedback
- Checkmark indicators on selection

#### 4. **Rookie Profile Setup** (`/rookie-setup`)
- 2-step onboarding process
- Profile photo upload with preview
- "What do you want to build?" text area
- Progress badges

#### 5. **Expert Profile Page** (`/expert-profile`)
- Avatar and basic info editing
- Expertise badges display
- Experience level dropdown
- Bio text area
- Availability toggle switch

#### 6. **Main Dashboard** (`/dashboard`)
- Google Workspace-style layout
- Left sidebar navigation
- Your Projects cards with team avatars
- Recommended Projects grid
- Recent Activity feed with status indicators
- Create Project quick action

#### 7. **Create Project Page** (`/create-project`)
- 3-step wizard with progress indicator
  - **Step 1**: Project Overview (title, description, goal)
  - **Step 2**: Skills Needed (selectable chips)
  - **Step 3**: Deadline & Publish (date picker, summary)
- Clean navigation between steps

#### 8. **Explore Projects** (`/explore`)
- Filterable project grid
- Search by keywords, skills, timeline
- Beautiful project cards showing:
  - Title, description, status
  - Rookie creator info
  - Required skills
  - Timeline and interest count

#### 9. **Project Details** (`/project/[id]`)
- Two-column layout
- **Left**: Project info, skills, creator profile, timeline
- **Right**: Join button, team members, discussion
- Clean comment system

#### 10. **Team Workspace** (`/workspace`)
- Three-column productivity interface
- **Left**: Task management (To Do / In Progress / Done)
- **Center**: Team chat with message bubbles
- **Right**: Project info, team members with status, files

#### 11. **Messaging Page** (`/messages`)
- Google-style DM interface
- Contact list with online status indicators
- Real-time chat window
- Unread message badges
- Message timestamps

#### 12. **Settings Page** (`/settings`)
- Organized card sections:
  - Account (email, password)
  - Profile editing
  - Notification preferences with toggles
  - Privacy settings
  - Logout

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Google Cloud Console account (for OAuth)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sj8259/FlowHub.git
   cd FlowHub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   DATABASE_URL="file:./dev.db"

   # NextAuth
   NEXTAUTH_SECRET="your-secret-key-here"
   NEXTAUTH_URL="http://localhost:3000"

   # Google OAuth (Get from Google Cloud Console)
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   ```
   
   **Generate NEXTAUTH_SECRET:**
   ```bash
   openssl rand -base64 32
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   ```
   http://localhost:3000
   ```

### Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Google+ API**
4. Navigate to **Credentials** → **Create Credentials** → **OAuth client ID**
5. Choose **Web application**
6. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
7. Copy the **Client ID** and **Client Secret** to your `.env.local` file

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
FlowHub/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   └── [...nextauth]/
│   │   │   │       └── route.js      # NextAuth API route handler
│   │   │   ├── register/
│   │   │   │   └── route.js          # User registration API
│   │   │   └── update-role/
│   │   │       └── route.js          # Update user role API
│   │   ├── login/
│   │   │   └── page.js               # Login page with Google OAuth
│   │   ├── signup/
│   │   │   └── page.js               # Signup with role selection & Google OAuth
│   │   ├── expertise/
│   │   │   └── page.js               # Expertise selection for experts
│   │   ├── rookie-setup/
│   │   │   └── page.js               # Rookie profile setup
│   │   ├── expert-profile/
│   │   │   └── page.js               # Expert profile management
│   │   ├── dashboard/
│   │   │   └── page.js               # Main dashboard
│   │   ├── create-project/
│   │   │   └── page.js               # 3-step project creation
│   │   ├── explore/
│   │   │   └── page.js               # Browse projects
│   │   ├── project/
│   │   │   └── [id]/
│   │   │       └── page.js           # Project details
│   │   ├── workspace/
│   │   │   └── page.js               # Team collaboration space
│   │   ├── messages/
│   │   │   └── page.js               # Direct messaging
│   │   ├── settings/
│   │   │   └── page.js               # User settings
│   │   ├── layout.js                 # Root layout
│   │   └── page.js                   # Home (redirects to login)
│   ├── components/
│   │   ├── Navigation.js             # Sidebar navigation
│   │   └── Providers.js               # NextAuth SessionProvider
│   ├── lib/
│   │   ├── auth.js                   # NextAuth configuration
│   │   └── prisma.js                  # Prisma client singleton
│   └── styles/
│       └── globals.css                # Material You design system
├── prisma/
│   └── schema.prisma                 # Database schema
├── public/
│   ├── logo.svg                      # FlowHub full logo with text
│   └── logo-icon-only.svg            # FlowHub icon (no text)
├── package.json
├── next.config.js
└── README.md
```

## 🎨 Design System

### Color Palette
```css
--primary-blue: #4285F4    /* Soft blue */
--primary-purple: #A66EFF  /* Soft purple */
--primary-aqua: #00B8D4    /* Aqua accent */
--gray-50 to --gray-900    /* Neutral grays */
```

### Logo Design
The FlowHub logo represents **collaboration and connection**:
- **Central Hub**: Blue concentric circles representing the core platform
- **Flow Lines**: Curved paths showing ideas flowing between members
- **Connection Nodes**: Circles at endpoints representing team members
- **Color Scheme**: Blue (#3B82F6) and light blue (#60A5FA) for trust and innovation
- **Two Versions**: 
  - `logo.svg` - Full logo with text and tagline
  - `logo-icon-only.svg` - Icon-only for navigation and favicons


### Typography
- **Font**: Google Sans, Inter
- **Sizes**: 12px to 48px (xs to 5xl)
- **Weights**: 300 to 700

### Components
- **Cards**: Soft shadows, 16px border radius
- **Buttons**: Rounded full, multiple variants
- **Inputs**: Google-style with focus states
- **Chips**: Selectable and display variants
- **Avatars**: Multiple sizes with status indicators

### Animations
- Fade in, slide in, scale in
- Smooth transitions (150ms - 350ms)
- Material-style cubic bezier easing

## 🛠️ Tech Stack

- **Framework**: Next.js 15.1.0 (App Router)
- **Language**: JavaScript (ES6+)
- **Authentication**: NextAuth.js v4 with Google OAuth
- **Database**: Prisma ORM with SQLite
- **Styling**: Custom CSS (Material You Design)
- **Fonts**: Google Sans, Inter
- **Icons**: Emoji-based (ultra minimal)
- **Password Hashing**: bcryptjs

## 🌐 Routes

| Route | Description |
|-------|-------------|
| `/` | Home (redirects to `/login`) |
| `/login` | User authentication |
| `/signup` | New user registration |
| `/expertise` | Expert skill selection |
| `/rookie-setup` | Rookie onboarding |
| `/expert-profile` | Expert profile editing |
| `/dashboard` | Main user dashboard |
| `/create-project` | Create new project |
| `/explore` | Browse all projects |
| `/project/[id]` | Project details |
| `/workspace` | Team collaboration |
| `/messages` | Direct messaging |
| `/settings` | User preferences |

## 🎯 Key Design Principles

1. **Simplicity First** - No clutter, no noise
2. **Whitespace** - Generous spacing for breathing room
3. **Soft Colors** - Pastel accents, never harsh
4. **Rounded Corners** - Material You style (8px-16px)
5. **Subtle Shadows** - Light elevation effects
6. **Clean Typography** - Google Sans for modern feel
7. **Smooth Interactions** - Gentle animations and transitions

## 📱 Responsive Design

All pages are fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

Grid layouts adapt seamlessly across devices.

## 🔒 Authentication Flow

### Email/Password Authentication
1. **Login** → Dashboard
2. **Signup** → Choose Role (Rookie/Expert) → Fill Form → Login → Dashboard

### Google OAuth Authentication
1. **Login with Google** → Dashboard (if role exists) or Role Selection
2. **Signup with Google**:
   - Option 1: Select role first → Google OAuth → Role assigned → Dashboard
   - Option 2: Google OAuth → Role Selection → Role assigned → Dashboard

### Role Management
- Users can sign up as either **Rookie** (project creators) or **Expert** (team members)
- Role is stored in the database and included in the session
- Google OAuth users can select their role during or after signup

## ✅ Recent Updates

### Authentication System (Latest)
- ✅ **Google OAuth Integration** - Sign in/sign up with Google
- ✅ **NextAuth.js Setup** - Complete authentication system
- ✅ **Prisma Database** - User, Account, and Session models
- ✅ **Role-based Authentication** - Rookie/Expert role management
- ✅ **API Routes**:
  - `/api/auth/[...nextauth]` - NextAuth handler
  - `/api/register` - User registration
  - `/api/update-role` - Role assignment for OAuth users
- ✅ **Session Management** - JWT-based sessions with role information

## 🚧 Future Enhancements

- Real-time messaging with WebSockets
- File upload functionality
- Notification system
- Email verification
- Search and filtering
- User profiles
- Project analytics
- Password reset functionality

## 🔐 Security Notes

- Passwords are hashed using bcryptjs (10 rounds)
- JWT tokens are used for session management
- OAuth tokens are securely stored in the database
- All API routes are protected with authentication checks
- Environment variables should never be committed to version control

## 📄 License

MIT License - Feel free to use this design system!

## 👏 Credits

**Design Inspiration**: Google Material You  
**Platform Concept**: Connecting rookies with experts  
**Authentication**: NextAuth.js  
**Built with**: Next.js, React, Prisma, and lots of ☕

---

**FlowHub** - Where ideas flow and teams connect 🌊
