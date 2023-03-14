import Home from 'components/home'
import About from 'components/about'
import Skills from 'components/skills'
import Projects from 'components/projects'
import type { Metadata } from 'next'

export default function Homepage() {
    return <>
        <Home />
        <About />
        <Projects />
        <Skills />
    </>
}

export const metadata: Metadata = {
    title: 'jva | Full Stack developer'
}
