import { NextPage } from "next";
import Head from "next/head";
import Nav from "../../../components/nav";
import Link from "next/link";

const audios = [
  {
    title: "01",
    src:
      "https://res.cloudinary.com/daqgcqpx2/video/upload/v1574492768/schritte/A1.2/kurs/8/601082_KB_L08_01.mp3"
  },
  {
    title: "02",
    src:
      "https://res.cloudinary.com/daqgcqpx2/video/upload/v1574492778/schritte/A1.2/kurs/8/601082_KB_L08_02.mp3"
  },
  {
    title: "03",
    src:
      "https://res.cloudinary.com/daqgcqpx2/video/upload/v1574492750/schritte/A1.2/kurs/8/601082_KB_L08_03.mp3"
  },
  {
    title: "04",
    src:
      "https://res.cloudinary.com/daqgcqpx2/video/upload/v1574492738/schritte/A1.2/kurs/8/601082_KB_L08_04.mp3"
  },
  {
    title: "05",
    src:
      "https://res.cloudinary.com/daqgcqpx2/video/upload/v1574492716/schritte/A1.2/kurs/8/601082_KB_L08_05.mp3"
  },
  {
    title: "06",
    src:
      "https://res.cloudinary.com/daqgcqpx2/video/upload/v1574492735/schritte/A1.2/kurs/8/601082_KB_L08_06.mp3"
  },
  {
    title: "07",
    src:
      "https://res.cloudinary.com/daqgcqpx2/video/upload/v1574492748/schritte/A1.2/kurs/8/601082_KB_L08_07.mp3"
  },
  {
    title: "08",
    src:
      "https://res.cloudinary.com/daqgcqpx2/video/upload/v1574492755/schritte/A1.2/kurs/8/601082_KB_L08_08.mp3"
  }
];

const kursbuch: NextPage<{ userAgent: string }> = ({ userAgent }) => {
  return (
    <div>
      <Head>
        <title>A1.2 Kursbuch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <div className="hero">
        <h1 className="title">A1.2 Kursbuch</h1>
      </div>

      <div>
        {audios.map(audio => (
          <div>
            <div>{audio.title}</div>
            <audio src={audio.src} controls />
          </div>
        ))}
      </div>
    </div>
  );
};

kursbuch.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
  return { userAgent };
};

export default kursbuch;
