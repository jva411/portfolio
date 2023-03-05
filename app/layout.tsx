import 'styles/globals.scss'
import Header from 'components/header'

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
