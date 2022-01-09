import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Heading, Text, Stack, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { FaTwitter } from "react-icons/fa";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>XP/RADIO</title>
        <meta name="description" content="XP/RADIO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Heading as="h1" size="2xl">
          📻 Welcome to <a href="https://xp-radio.vercel.app">XP/RADIO!</a>
        </Heading>
        <Text mt={8} mb={8} fontSize="xl">
          Begin your XP in the Metaverse
        </Text>

        <div className={styles.grid}>
          <Stack spacing={4} direction="column" align="center">
            <Button
              colorScheme="teal"
              size="lg"
              rightIcon={<Icon icon="el:mic" />}
              onClick={() =>
                router.push("https://www.clubhouse.com/club/xpradio")
              }
            >
              Clubhouse: Decentralized Flow Sessions
            </Button>
            <Button
              colorScheme="teal"
              size="lg"
              rightIcon={<Icon icon="mdi:ethereum" />}
              onClick={() => router.push("https://opensea.io/collection/xp")}
            >
              Ethereum: XP/TAPES
            </Button>
            <Button
              colorScheme="teal"
              size="lg"
              rightIcon={<Icon icon="emojione-monotone:letter-t" />}
              onClick={() =>
                router.push("   https://objkt.com/profile/chadxp/collections")
              }
            >
              Tezos: XP\TAPES
            </Button>

            <Button
              colorScheme="teal"
              size="lg"
              rightIcon={<FaTwitter />}
              onClick={() => router.push("https://twitter.com/CHAD_XP")}
            >
              Twitter: Follow CHAD/XP
            </Button>
            <Button
              colorScheme="teal"
              size="lg"
              rightIcon={<Icon icon="mdi:robot" />}
              onClick={() =>
                router.push(
                  "https://www.cryptovoxels.com/parcels/5150?utm_source=clubhouse"
                )
              }
            >
              Cryptovoxels: BITPIXI'S BAR 🧚‍♀️🍺
            </Button>
            <Button
              colorScheme="teal"
              size="lg"
              rightIcon={<Icon icon="mdi:twitch" />}
              onClick={() => router.push("https://www.twitch.tv/xpradio1")}
            >
              Twitch: Live sets
            </Button>
            <Button
              colorScheme="teal"
              size="lg"
              rightIcon={<Icon icon="mdi:music" />}
              onClick={() => router.push("https://audius.co/jor0")}
            >
              Audius: Music
            </Button>

            <Button
              colorScheme="teal"
              size="lg"
              rightIcon={<Icon icon="akar-icons:discord-fill" />}
              onClick={() => router.push("https://discord.com/invite/WukMwEZN")}
            >
              Discord: Chat with friends
            </Button>
            <Button
              colorScheme="teal"
              size="lg"
              rightIcon={<ArrowForwardIcon />}
              onClick={() => router.push("https://linktr.ee/chad.xp")}
              variant="outline"
            >
              Linktree: More links
            </Button>
          </Stack>
        </div>
      </main>
      <DarkModeSwitch />

      <footer className={styles.footer}>
        Built in ♥️ with Next.js and Chakra UI
      </footer>
    </div>
  );
};

export default Home;
