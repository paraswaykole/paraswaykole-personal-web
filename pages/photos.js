import Head from "next/head";
import Gallery from "react-photo-gallery";
import Header from "../components/header";
import { useState, useEffect } from "react";

export default function Home() {
  const size = useWindowSize();

  const photos = [
    {
      src: "/photos/modified/dawki-meghalaya-boats.jpg",
      width: 6000,
      height: 4000,
    },
    {
      src: "/photos/modified/dawki-meghalaya-boats-and-sun.jpg",
      width: 6000,
      height: 4000,
    },
    {
      src: "/photos/modified/dzukou-valley.jpg",
      width: 6000,
      height: 4000,
    },
    {
      src: "/photos/modified/meghalaya-nongriat.jpg",
      width: 6000,
      height: 4000,
    },
    {
      src: "/photos/modified/hampi-temple.jpg",
      width: 4096,
      height: 3072,
    },
    {
      src: "/photos/modified/hampi-temple-and-boulders.jpg",
      width: 4096,
      height: 3072,
    },
    {
      src: "/photos/modified/hampi-river-side.jpg",
      width: 4096,
      height: 3072,
    },
    {
      src: "/photos/modified/hampi-vithalla-temple.jpg",
      width: 3072,
      height: 3052,
    },
    {
      src: "/photos/modified/hampi-hills.jpg",
      width: 4096,
      height: 3072,
    },
  ];

  const onImageClick = (e, photos) => {
    window.open(photos.photo.src.replace("/modified/", "/"));
  };

  return (
    <>
      <Head>
        <title>Paras Waykole - Photos</title>
      </Head>

      <Header />
      <article>
        <h1 className="title">Travel &amp; Photography</h1>
        <div className="content">
          {size.width < 512 ? (
            <Gallery
              photos={photos}
              direction="column"
              columns={2}
              onClick={onImageClick}
            />
          ) : (
            <Gallery
              photos={photos}
              direction="column"
              columns={3}
              onClick={onImageClick}
            />
          )}
        </div>
      </article>
    </>
  );
}

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
