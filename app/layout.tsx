import 'styles/globals.scss'
import Header from 'components/header'
import type { Metadata } from 'next'

interface IRootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: IRootLayoutProps) {
    return <html lang='pt'>
        <body>
            <Header />
            <main>
                {children}
            </main>
        </body>
    </html>
}

export const metadata: Metadata = {
    title: 'jva | Full Stack developer'
}
