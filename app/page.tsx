import Home from 'components/home'
import About from 'components/about'
import type { Metadata } from 'next'
import Projects from 'components/projects'

export default function Homepage() {
    return <>
        <Home />
        <About />
        <Projects />
    </>
}

export const metadata: Metadata = {
    title: 'jva | Full Stack developer'
}
