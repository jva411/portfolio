import Home from 'components/home'
import About from 'components/about'
import type { Metadata } from 'next'

export default function Homepage() {
    return <>
        <Home />
        <About />
    </>
}

export const metadata: Metadata = {
    title: 'jva | Full Stack developer'
}
