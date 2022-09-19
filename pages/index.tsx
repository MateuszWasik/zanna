import { NextPage } from 'next';
import Head from 'next/head';
import { ZanaMainDashboard } from '../components/ZanaMainDashboard/ZanaMainDashboard';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Keep it up | Zanna</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    </Head>
    <ZanaMainDashboard />
  </>
);

export default Home;
