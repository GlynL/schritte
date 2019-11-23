import { NextPage } from "next";
import Head from "next/head";
import Nav from "../../../components/nav";
import Link from "next/link";
import data from "./data.json";

const arbeitsbuch = () => {
  return (
    <div>
      <Head>
        <title>A1.2 Arbeitsbuch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Link href="/A1_2/arbeitsbuch/B">
        <a>B</a>
      </Link>
      <div className="hero">
        <h1 className="title">A1.2 Arbeitsbuch</h1>
      </div>

      <div>
        {data.audioInfo.map(section => (
          <Link
            href={{
              pathname: `/A1_2/arbeitsbuch/${section.title}`,
              query: {
                title: section.title,
                audios: JSON.stringify(section.audios)
              }
            }}
          >
            <a>{section.title}</a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default arbeitsbuch;
