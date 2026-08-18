import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jovi Sicat - Data Analyst</title>
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
          Data Analyst | Tech Enthusiast | Problem Solver
        </p>

        <p className={styles.description}>
          Hi! I'm Jovi, driven by a passion for uncovering insights through data. Outside of analytical work, I enjoy playing video games, watching movies, listening to music, and reading novels. My current favorite track is <em>Sky Walker</em> by Miguel ft. Travis Scott, and I'll never pass up a plate of Chicken Curry. Over the next 5 years, I aim to advance into a lead Data Analyst role driving impactful, data-driven decisions.
        </p>
      </main>
    </div>
  );
}
