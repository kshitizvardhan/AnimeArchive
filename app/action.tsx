"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

// Server action -> Use this directive at the top of the file to indicate that this code should be executed on the server side
// Here having one function whose work is to fetch data from api 
// Server-side execution ensures that sensitive information are not exposed to the client


export const fetchAnime = async (page: number) => {
    const response = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`);

    const data = await response.json();

    // console.log(data);

    return data.map((item: AnimeProp, index: number) => (
        <AnimeCard key={item.id} anime={item} index={index} />
      ));
}



// In contrast, client-side code would use the "use client" directive
// "use client"; // Client action -> Use this directive at the top of the file to indicate that this code should be executed on the client side.
// Client-side code is used for tasks like rendering the UI, handling user interactions, and manipulating the DOM.
// Example of a client-side function 

/*
export const displayAnime = (animeData) => {
    // Code to render anime data on the UI
};


Directives like "use server" and "use client" help in maintaining a clear separation of responsibilities between the server and the client, improving code organization and maintainability.

*/