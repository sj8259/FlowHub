import '@/styles/globals.css'
import { Providers } from '@/components/Providers'

export const metadata = {
    title: 'FlowHub - Where ideas flow and teams connect',
    description: 'A platform where rookies share project ideas and experts join their team',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/logo-icon-only.svg" type="image/svg+xml" />
            </head>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
