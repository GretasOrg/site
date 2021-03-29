import React from 'react';

export default function Video({ videoSrcURL, videoTitle, ...props }) {
  return (
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      {...props}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  );
}
