import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Audio from "../../../components/Audio";

const section = () => {
  const router = useRouter();
  const { title, audios } = router.query;
  const [parsedAudios, setParsedAudios] = useState([]);
  useEffect(() => {
    if (audios && typeof audios === "string") {
      setParsedAudios(JSON.parse(audios));
    }
  }, [audios]);
  return (
    <div>
      <h1>{title}</h1>
      {parsedAudios.map(audio => (
        <Audio audio={audio} />
      ))}
    </div>
  );
};

export default section;
