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
import Container from "../components/container";
import {products} from "../components/productsData";
import { useEffect, useState } from "react";

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
    <div className="w-72 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#">
        <img className="rounded-t-lg" src={props.icon} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.desc}
        </p>
      </div>
    </div>
  );
};

const foo = async ()=>{
    let data = await fetch("https://api.jsonbin.io/v3/c/65934a571f5677401f16437a",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Master-Key" : "$2a$10$npR0lyoY7wpoPUQ8Qfy7tO.2UIiitvW4viQDiwFpl8pWgL.nXMuI6",
        "X-Access-Key" : "$2a$10$9eu3frwz3HE/5l6T9OUs.uCjAMccsdFEDOs0m0cpbP.7ResxbHKW2"
      }});
    data = await data.json();
   return data;
}
const ProductsList = () => {
  const [filterString, setFilterString] = useState("");
  const [product,setProduct]=useState([]);
  useEffect(async () => {
    const new_products = await foo()
    if(new_products) {
      setProduct(new_products)
    }
  },[])
  let a=[];
  products.forEach(ele=>{
   console.log(ele.category);
   if(!a.includes(ele.category)){
     a.push(ele.category);
   }
  })
var items=[];
if(a){
 for (let i = 0; i < a.length; i++) {             
   items.push(<option value={a[i]}>{a[i]}</option>);
}
  } 
  return (
    <Container className="flex flex-col">
      <Container className="flex flex-row gap-3">
        <select id="large" onChange={(el) => setFilterString(el.target.value)} className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Choose a category</option>
     {items}
        </select>
        <products/>
        {/* <input
          value={filterString}
          onChange={(el) => setFilterString(el.target.value)}
          type="text"
          id="large-input"
          placeholder="&#x1f50d; Search Products"
          className="block w-full p-4 text-gray-900 shadow-md border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        /> */}
      </Container>
      <Container className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      { 
        products
          .filter((ele) =>
            ele.category.includes(filterString)
          )
          .sort((a, b) => {
            // if (a.pos && b.pos) return b.pos < a.pos;
            // else if (a.pos) return false;
            // else if (b.pos) return false;
            return a.name.localeCompare(b.name);
          })
          .map((pr) => (
            <ProductCard
              name={pr.name}
              desc={pr.desc}
              icon="temp"
            />
          ))}
      </Container>
    </Container>
  );
};
