import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/7309681.jpg";
import userTwoImg from "../public/img/39552.jpg";
import userThreeImg from "../public/img/39552.jpg";

export default function Testimonials() {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              I found Jaywin a <Mark>reliable and trustworthy</Mark>
              company they were absolutely amazing. They helped me find the
              right products with the best prices, and ship my products safely
              and efficiently.
            </p>

            <Avatar
              image={userOneImg}
              name="Happy Customer"
              title="Buyer of Basmati Rice"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              I was <Mark>very impressed </Mark> with the level of service I
              received from Jaywin. I would definitely use them again in the
              future.
            </p>

            <Avatar
              image={userTwoImg}
              name="Happy Customer"
              title="Buyer of Cashew"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Jaywin has a <Mark>wide network of contacts</Mark> and they are
              experts in the export process. I am very happy with the results of
              our partnership.
            </p>

            <Avatar
              image={userThreeImg}
              name="Happy Customer"
              title="Buyer of Mango"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          layout="responsive"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-green-800 bg-green-100 rounded-md ring-green-100 ring-4 dark:ring-green-900 dark:bg-green-900 dark:text-green-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
