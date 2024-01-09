'use client'
import Head from "next/head";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import PopupWidget from "../../components/popupWidget";
import Container from "../../components/container";
import Image from "next/image";
import gst from "../../public/img/GST.jpg";
import jaywin from "../../public/img/jaywinimpexp.jpg";
import fssai from "../../public/img/FSSAI.jpg";
import spices from "../../public/img/spices.jpg";
import udyam from "../../public/img/udyam.jpg";
import apeda from "../../public/img/apeda.jpg";

export default function Home() {
    return (
      <>
        <Head>
          <title>Benefits</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        
        <Container className="w-100 mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
          <Benefit title="Management & Quality" icon={jaywin}>
          </Benefit>
          <Benefit title="GST" icon={gst}>
          </Benefit>
          <Benefit title="FSSAI" icon={fssai}>
          </Benefit>
          <Benefit title="APEDA" icon={apeda}>
          </Benefit>
          <Benefit title="UDYAM" icon={udyam}>
          </Benefit>
          <Benefit title="Spices" icon={spices}>
          </Benefit>
        </Container>
  
        <Footer />
        <PopupWidget />
      </>
    );
  }
  
  const Benefit = (props) => {
    return (
      <div className="w-72 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <Image
          src={props.icon} className="hover:scale-125 transition duration-500 cursor-pointer"
          alt="Benefits"
          placeholder="blur"
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
        {/* <div className="p-5 items-stretch">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold italic tracking-tight text-gray-900 dark:text-white">
              {props.title}
            </h5>
          </a>
          <p className="mb-3 font-normal italic text-gray-700 dark:text-gray-400">
            {props.children}
          </p>
        </div> */}
      </div>
    );
  };