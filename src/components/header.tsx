import { MdOutlineMail } from 'react-icons/md'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import styles from 'styles/components/header.module.scss'

export default function Header() {
    return <header className={styles.header}>
        <a href='https://www.linkedin.com/in/joão-victor-a49192172/' target='_blank' title='Meu Linkedin'>
            <img src='logo.svg' />
        </a>

        <nav aria-label='principal'>
            <ul className={styles.anchors}>
                <li><a href='#home'>Início</a></li>
                <li><a href='#about'>Sobre</a></li>
                <li><a href='#projects'>Projetos</a></li>
                <li><a href='#footer'>Contato</a></li>
            </ul>
        </nav>

        <nav aria-label='contact'>
            <ul>
                <li><a href='https://github.com/jva411' title='Meu GitHub'><BsGithub /></a></li>
                <li><a href='https://www.linkedin.com/in/joão-victor-a49192172/' target='_blank' title='Meu Linkedin'><BsLinkedin /></a></li>
                <li><a href='mailto:j.victoralves411@gmail.com' target='_blank' title='Enviar email'><MdOutlineMail /></a></li>
            </ul>
        </nav>
    </header>
}
