import BlogPage from "@/components/Blog";
import HeroSection from "@/components/HeroSection";
import React from "react";

const Home = () => {
  return (
    <>
      <main className=" flex flex-col w-full">
        <HeroSection />

        <section>
          <BlogPage />
        </section>
      </main>
    </>
  );
};

export default Home;
