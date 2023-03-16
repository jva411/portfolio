import 'styles/globals.scss'
import Header from 'components/header'
import Footer from 'components/footer'
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
            <Footer />
        </body>
    </html>
}

export const metadata: Metadata = {
    icons: ['favicon.svg']
}
