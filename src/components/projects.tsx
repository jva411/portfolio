import styles from 'styles/components/projects.module.scss'


interface IProductProps {
    href: string
    title: string
    name: string
}


function Project({ href, title, name }: IProductProps) {
    return <li className={styles[name]}>
        <a href={href} title={title} target='_blank'>
            <h3>{name}</h3>
        </a>
    </li>
}


export default function Projects() {
    return <section id='projects' className={styles.projects}>
        <div className='centered'>
            <nav aria-label='projects'>
                <h2>Projetos</h2>
                <ul>
                    <Project name='CG' title='Computação Gráfica' href='https://github.com/jva411/ComputerGraphics' />
                    <Project name='Damas' title='Jogo de Damas' href='https://github.com/jva411/faculdade/tree/master/FUP/Trabalho%20Final' />
                    <Project name='CCBR' title='CCBR' href='https://github.com/jva411/ccbr' />
                    <Project name='SpotPer' title='SpotPer' href='https://github.com/GabrielPassos25/SpotPer-FBD' />
                </ul>
            </nav>
        </div>
    </section>
}
