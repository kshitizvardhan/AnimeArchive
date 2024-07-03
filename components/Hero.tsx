import Image from "next/image";
import { TextGenerateEffect } from "./ui/TextGenerating";

function Hero() {
  const words = `Discover the Enchanting Worlds of Anime.`
  return (
    <header className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <div className="flex-1 flex flex-col">
        <Image
          src="./animeTransparent.svg"
          alt="logo"
          width={201}
          height={196}
          className="object-contain"
        />
        <TextGenerateEffect words={words} />
      </div>
      <div className="lg:flex-1 relative w-full h-[70vh] justify-center">
        <Image src="/levy.svg" alt="anime" fill className="object-contain" />
      </div>
    </header>
  );
}

export default Hero;
