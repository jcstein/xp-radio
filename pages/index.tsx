import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import { DarkModeSwitch } from '../components/DarkModeSwitch'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>XP/RADIO</title>
        <meta name="description" content="XP/RADIO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>

        <h1 className={styles.title}>
        📻 Welcome to <a href="https://xp-radio.vercel.app">XP/RADIO!</a>
        </h1>

        <p className={styles.description}>
          Get started by listening on Clubhouse
        </p>

        <div className={styles.grid}>
          <a href="https://twitter.com/CHAD_XP" className={styles.card}>
            <h2>Twitter &rarr;</h2>
            <p>Follow CHAD_XP on Twitter</p>
          </a>

          <a
            href="https://www.clubhouse.com/club/xpradio"
            className={styles.card}
          >
            <h2>Clubouse &rarr;</h2>
            <p>Listen on to XP/RADIO on Clubhouse.</p>
          </a>

          <a href="https://www.twitch.tv/xpradio1" className={styles.card}>
            <h2>Twitch &rarr;</h2>
            <p>Stream Live on Twitch!</p>
          </a>

          <a
            href="https://discord.com/invite/WukMwEZN"
            className={styles.card}
          >
            <h2>Discord &rarr;</h2>
            <p>
              Join our community.
            </p>
          </a>
          <a href="https://linktr.ee/chad.xp"
          className={styles.card}
          >
            <h2>LinkTree &rarr;</h2>
            <p>More links</p>
          </a>
        </div>
      </main>
      <DarkModeSwitch />

      <footer className={styles.footer}>
        Built in ♥️ with Next.js and Chakra UI
      </footer>
    </div>
  )
}

export default Home
