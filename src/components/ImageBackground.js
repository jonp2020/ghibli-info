import React from "react";

const ImageBackground = () => {
  const getRandomNumForImg = () => {
    return Math.floor(Math.random() * 7) + 1;
  };

  return (
    <div
      alt="tot"
      className={`random-main-image-${getRandomNumForImg()}`}
    ></div>
  );
};

export default ImageBackground;
