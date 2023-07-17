import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

import { products } from "../components/productsData";
import Container from "../components/container";
import { useState } from "react";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Jaywin - Imports & Exports</title>
        <meta
          name="description"
          content="Jaywin is a import and export business based out of india, delivering excellence worldwide"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <ProductsList />

      {/* <Cta /> */}
      <Footer />
      <PopupWidget />
    </>
  );
}

const ProductCard = (props) => {
  return (
    <div class="w-72 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#">
        <img class="rounded-t-lg" src={props.icon} alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.name}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.desc}
        </p>
      </div>
    </div>
  );
};
const ProductsList = () => {
  const [filterString, setFilterString] = useState("");

  return (
    <Container className="flex flex-col">
      <Container className="flex flex-row gap-3">
        <input
          value={filterString}
          onChange={(el) => setFilterString(el.target.value)}
          type="text"
          id="large-input"
          placeholder="&#x1f50d; Search Products"
          class="block w-full p-4 text-gray-900 shadow-md border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </Container>
      <Container className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {products
          .filter((ele) =>
            ele.name.toLowerCase().includes(filterString.toLowerCase())
          )
          .sort((a, b) => {
            // if (a.pos && b.pos) return b.pos < a.pos;
            // else if (a.pos) return false;
            // else if (b.pos) return false;
            return a.name.localeCompare(b.name);
          })
          .map((product) => (
            <ProductCard
              name={product.name}
              desc={product.desc}
              icon={product.icon}
            />
          ))}
      </Container>
    </Container>
  );
};
