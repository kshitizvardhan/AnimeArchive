"use client"; // -> because we can't use hooks on the server side, so here we will use this directive to indicate that this code should be executed on the client side.

import { fetchAnime } from "@/app/action";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AnimeCard, { AnimeProp } from "./AnimeCard";

// Concept -> Infinite Scrolling

// so we won't see new pages on the homepage but still we will be paginating as we get more data

// as we scroll down we load a new page.
// So Instead of clicking the next button, we are going to trigger the next page once we scroll down to the specific point of the screen
// in this case, it will be to the end of te screen.

// But question arises, how come we will know that how far the user has scrolled.
// For this we have a popular npm package which is a react implementation of the observer intersection api to let us know when an element enters or leaves the viewport.
// Provides a useInView hook to help us know when the element enters or leaves the view,
let page=2;

function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<AnimeProp[]>([]);

  useEffect(() => {
    if (inView) {
      fetchAnime(page).then((res) => {
        setData([...data, ...res]);
        // first spread the data before, and then spread the new data in the array.
        page++; // increment page to fetch the next page when the div comes inView.
      });
    }
  }, [inView, data]);

  return (
    <>
      {/* This is the subsequent page that will be rendered */}
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item: AnimeProp, index: number) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </section>

        {/* and then the loader again */}

      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          {" "}
          {/* by ref, now it will know, once we scroll to it. */}
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
