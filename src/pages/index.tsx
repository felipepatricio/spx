import Card from "components/Card";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home({data}: any) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {data && <Card data={data} />}
      </main>
    </div>
  );
}

export const getStaticProps = async () => { 
   const response = await fetch(`${process.env.NEXT_API_BASE_URL}/launches/past`)
   const data = await response.json()
  return {
    props: {
      data: data.reverse()
    },
  };
};
