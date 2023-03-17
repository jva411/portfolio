import { MdOutlineMail } from 'react-icons/md'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import styles from 'styles/components/footer.module.scss'


export default function Footer() {
    return <footer className={styles.footer}>
        <small>Copyright &copy; 2023 by João Victor</small>
        <nav aria-label='contact'>
            <ul>
                <li>
                    <a href='https://github.com/jva411' target='_blank' title='Meu GitHub'>
                        <BsGithub /> GitHub
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/joão-victor-a49192172/' target='_blank' title='Meu Linkedin'>
                        <BsLinkedin /> Linkedin
                    </a>
                </li>
                <li>
                    <a href='mailto:j.victoralves411@gmail.com' target='_blank' title='Enviar email'>
                        <MdOutlineMail /> Email
                    </a>
                </li>
            </ul>
        </nav>
    </footer>
}
