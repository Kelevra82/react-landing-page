import React from "react";

export function Video() {
  return (
    <>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/q2sBHfUmHBY?si=iK3B1zB8zQV3V3E1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </>
  );
}
