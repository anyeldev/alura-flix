export const convertLinkToEmbed = (url) => {
  if (url.includes('youtube.com/embed/')) {
    return url;
  }

  // get id video for convert to embed
  let videoId = url.split('v=')[1];
  const ampersandPosition = videoId.indexOf('&');

  if (ampersandPosition !== -1) {
    videoId = videoId.substring(0, ampersandPosition);
  } else {
    return url;
  }

  return `https://www.youtube.com/embed/${videoId}`;
};
