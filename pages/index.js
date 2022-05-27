import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nexsiz List | Home </title>
        <meta name="keywords" content="nexsiz" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          odio consectetur vero veritatis voluptas, eum corporis dolore
          voluptatibus, cupiditate recusandae tenetur delectus optio nihil
          incidunt. Cumque vel quae non harum quisquam perspiciatis. Animi
          deserunt libero ipsam, harum fugiat numquam esse voluptatem quisquam
          labore saepe. Officia architecto temporibus minima perferendis
          deserunt.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          odio consectetur vero veritatis voluptas, eum corporis dolore
          voluptatibus, cupiditate recusandae tenetur delectus optio nihil
          incidunt. Cumque vel quae non harum quisquam perspiciatis. Animi
          deserunt libero ipsam, harum fugiat numquam esse voluptatem quisquam
          labore saepe. Officia architecto temporibus minima perferendis
          deserunt.
        </p>
        <Link href="/nexsiz">
          <a className={styles.btn}>See Nexsiz Listing</a>
        </Link>
      </div>
    </>
  );
}
