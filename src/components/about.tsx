import styles from 'styles/components/about.module.scss'

function calculateAge() {
    var ageDifMs = Date.now() - new Date('2001-05-06').getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export default function About() {
    return <section id='about' className={styles.about + ' full-width-bg'}>
        <div className='centered'>
            <div>
                <h2>Sobre</h2>
                <div></div>
            </div>
            <div>
                <div>
                    <p>
                        Graduando em <b>Ciência da Computação</b> pela <b>UFC</b>,
                        sou um desenvolvedor <b>Full Stack</b>.
                    </p>
                    <p>
                        Atualmente eu trabalho usando <b>Next.JS</b> para o desenvolvimento
                        de uma plataforma web, e usando <b>Flask</b> para a criação de uma API
                        Rest para consumir um modelo de IA.
                    </p>
                    <p>
                        Sempre fui apaixonado pela tecnologia, e minha curiosidade por programação
                        surgiu aos meus 14 anos. Minha felicidade foi enorme quando consegui entrar
                        no meu curso, e desde então evolui bastante.
                    </p>
                </div>
                <div>
                    <p>
                        Tenho <b>{calculateAge()}</b> anos, adoro animais (especialmente cachorros),
                        e meus passatempos preferidos é jogar com meus amigos e assistir séries/animes.
                    </p>
                    <p>
                        Estou sempre atento às novas tecnologias e buscando melhorar ainda mais.
                    </p>
                </div>
            </div>
        </div>
    </section>
}
