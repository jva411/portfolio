import Home from 'components/home'
import type { Metadata } from 'next'

export default function Homepage() {
    return <>
        <Home />
    </>
}

export const metadata: Metadata = {
    title: 'jva | Full Stack developer'
}
