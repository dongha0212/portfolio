import Head from 'next/head'
import Layout from '../components/layout';
import Hero from '../components/home/hero';

export default function Home() {
  return (
    <Layout>
        <Head>
            <title>Dongha&apos;s Portfolio</title>
            <meta name="description" content="portpolio" />
        </Head>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <Hero/>
            </div>
    </Layout>
  );
}
