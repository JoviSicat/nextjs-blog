import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jovi Sicat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img
          src="/jovpic.jpg"
          alt="Jovi Sicat"
          className={styles.profile}
        />

        <h1 className={styles.name}>
          Jovi Sicat
        </h1>

        <p className={styles.intro}>
          Hello I'm Jovi, an upcoming Data Analyst.
        </p>

        <p className={styles.description}>
          (This is a sample website - you'll be building a site like this on our{' '}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js tutorial
          </a>
          .)
        </p>
      </main>
    </div>
  );
}