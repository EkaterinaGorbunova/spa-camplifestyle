import React from "react";
import { TraitsAndSpecies } from "../components/TraitsAndSpecies";
import { About } from "../components/About";
import { Community } from "../components/Community";
import { Roadmap } from "../components/Roadmap";
import { Team } from "../components/Team";
import Image from "next/image";
import banner from "../public/banner-anura.png";

// const banner = '/banner-anura.png';

export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <header>
          <div className="relative w-full h-full">
            <Image
              className="relative object-cover object-top bg-black"
              src={banner}
              width={1920}
              height={690}
              alt="game banner"
            />
          </div>
        </header>
        <main>
          <About />
          <TraitsAndSpecies />
          <Community />
          <Roadmap />
          <Team />
        </main>
      </div>
    </>
  );
}
