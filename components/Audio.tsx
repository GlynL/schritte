import React from "react";

type Props = {
  title: string;
  src: string;
};

const Audio = ({ audio }: { audio: Props }) => {
  const { title, src } = audio;
  return (
    <div>
      <div>{title}</div>
      <audio src={src} controls />
    </div>
  );
};

export default Audio;
