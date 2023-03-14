import { BsGithub } from 'react-icons/bs'
import styles from 'styles/components/header.module.scss'

export default function Header() {
    return <header className={styles.header}>
        <div className='centered'>
            <a href='https://www.linkedin.com/in/joão-victor-a49192172/' target='_blank' title='Meu Linkedin'>
                <img src='logo.svg' alt='logo' />
            </a>

            <nav aria-label='principal'>
                <ul className={styles.anchors}>
                    <li><a href='#home'>Início</a></li>
                    <li><a href='#about'>Sobre</a></li>
                    <li><a href='#projects'>Projetos</a></li>
                    <li><a href="#skills">Habilidades</a></li>
                    <li><a href='#footer'>Contato</a></li>
                </ul>
            </nav>

            <a href='https://github.com/jva411/portfolio' target='_blank' title='Projeto'><BsGithub /></a>
        </div>
    </header>
}
