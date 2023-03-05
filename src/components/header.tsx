import Link from 'next/link'
import Image from 'next/image'
import styles from 'styles/components/header.module.scss'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { MdOutlineMail } from 'react-icons/md'

export default function Header() {
    return <header className={styles.header}>
        <span>J</span>
        <nav aria-label='principal'>
            <ul className={styles.anchors}>
                <Link href='#home'>Início</Link>
                <Link href='#about'>Sobre</Link>
                <Link href='#projects'>Projetos</Link>
                <Link href='#footer'>Contato</Link>
            </ul>
        </nav>
        <nav aria-label='contact'>
            <ul>
                <Link href='https://github.com/jva411' title='Meu GitHub'><BsGithub /></Link>
                <Link href='https://www.linkedin.com/in/joão-victor-a49192172/' target='_blank' title='Meu Linkedin'><BsLinkedin /></Link>
                <Link href='mailto:j.victoralves411@gmail.com' target='_blank' title='Enviar email'><MdOutlineMail /></Link>
            </ul>
        </nav>
    </header>
}
