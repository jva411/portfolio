import { FaUserCircle } from 'react-icons/fa'
import styles from 'styles/components/home.module.scss'


export default function Home() {
    return <section id='home' className={styles.home}>
        <main>
            <span>Olá, eu me chamo</span>
            <h1>João Victor</h1>
            <FaUserCircle />
        </main>
        <article>
            <p>pensar em um texto</p>
        </article>
    </section>
}
