import { NextPage } from "next";
import Head from "next/head";
import Nav from "../../components/nav";
import Link from "next/link";

const A1_2: NextPage<{ userAgent: string }> = ({ userAgent }) => {
  return (
    <div>
      <Head>
        <title>A1.2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <div className="hero">
        <h1 className="title">A1.2</h1>
      </div>

      <div>
        <Link href="/A1_2/kursbuch">
          <a>Kursbuch</a>
        </Link>
        <Link href="/A1_2/arbeitsbuch">
          <a>Arbeitsbuch</a>
        </Link>
      </div>
    </div>
  );
};

A1_2.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
  return { userAgent };
};

export default A1_2;
