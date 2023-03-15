import styles from 'styles/components/skills.module.scss'


export default function Skills() {
    return <section id='skills' className={styles.skills + ' full-width-bg'}>
        <div className='centered'>
            <h2>Habilidades</h2>

            <ul title='Front End'>
                <li>React</li>
                <li>NextJS</li>
                <li>SASS</li>
                <li>TailwindCSS</li>
            </ul>

            <ul title='Back End'>
                <li>Flask</li>
                <li>Express</li>
                <li>REST</li>
                <li>MongoDB</li>
                <li>MySQL</li>
            </ul>

            <ul title='Linguagens'>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>Python</li>
                <li>C/C++</li>
                <li>Java</li>
                <li>Kotlin</li>
            </ul>

            <ul title='Cloud'>
                <li>AWS</li>
                <li>Docker</li>
                <li>GitLab CI/CD</li>
                <li>Nginx</li>
            </ul>
        </div>
    </section>
}
