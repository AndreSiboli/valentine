import { useState } from 'react';
import styles from '@/styles/Home.module.scss';

import { Caveat } from 'next/font/google';

import Head from 'next/head';

import { FaHeart } from 'react-icons/fa6';

const dance = Caveat({ subsets: ['latin'] });

export default function Home() {
    const [open, setOpen] = useState(false);
    const [read, setRead] = useState(false);

    function openEnv() {
        setOpen(true);
    }

    function closeEnv() {
        setOpen(false);
    }

    function readLetter() {
        setRead(true);
    }

    return (
        <>
            <Head>
                <title>Valentine</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main}`}>
                <div className={`${styles.envelope} ${open ? styles.opened : styles.close} `}>
                    <div className={styles.envelope_top}></div>
                    <div className={styles.envelope_bottom}></div>
                    <div className={styles.envelope_right}></div>
                    <div className={styles.envelope_left}></div>
                    <div className={`${styles.envelope_letter} ${read && styles.read}`}>
                        <div className={`${styles.letter} ${dance.className}`}>
                            <p>
                                A melhor parte do meu dia é o seu sorriso.
                                <br />
                                <br />
                                Estar com você foi a decisão mais fácil que tomei na vida e me sinto
                                a pessoa mais sortuda do mundo todos os dias.
                                <br />
                                <br />
                                Eu amo sua honestidade, sua paixão, sua resiliência, sua coragem,
                                sua parceria. Você é a minha alma gêmea, meu melhor amigo e meu
                                confidente.
                                <br />
                                <br />
                                Eu gostaria que todos os dias você se enxergasse com os meus olhos,
                                porque eu te vejo como uma pessoa perfeita.
                                <br />
                                <br />
                                Minha vida estava em preto e branco. Você chegou e a coloriu com seu
                                sorriso e a sua luz.
                            </p>
                            <p>Ass: Anônimo</p>
                        </div>
                    </div>

                    <div className={styles.envelope_hearts}>
                        <FaHeart />
                        <FaHeart />
                        <FaHeart />
                    </div>
                </div>
                {!read && (
                    <div className={styles.main_buttons}>
                        <button onClick={!open ? openEnv : readLetter}>
                            {!open ? 'Abrir' : 'Ler'}
                        </button>
                        <button onClick={closeEnv} disabled={read ? true : false}>
                            Fechar
                        </button>
                    </div>
                )}
            </main>
        </>
    );
}
