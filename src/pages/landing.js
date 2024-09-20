import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import Navs from "../../components/Navs";
import NavList from "../../components/NavList";
import Image from "next/image";
const landing = () => {
  return (
    <div className="bg-leanground h-screen p-2">
      <Navs />
      <div className="w-w-w m-auto">
        <div className="flex w-1/6  justify-around">
          <div>
            <Link href="">
              <IoMdArrowRoundBack className="text-sm" />
            </Link>
          </div>
          <div>
            <Link href="">
              <FaSearch className="text-sm" />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-w-w m-auto h-h-h  flex flex-col justify-end ">
        <input placeholder="search" className="rounded-xl w-full h-2/5 p-4" />
      </div>
      <NavList />
      <section className=" h-4/5  overflow-y-scroll">
        <main className="w-w-w h-f m-auto flex my-3 flex-col justify-between">
          <div className="bg-red-500 w-full h-5/6 bg-[url('/classpic1.svg')] bg-no-repeat bg-cover bg-center rounded "></div>
          <div className="">
            <h1>Fundamentals of chess </h1>
            <div className="flex justify-between text-xs">
              <p>Helen Thomas</p>
              <p>1hr 30mins</p>
            </div>
          </div>
        </main>
        <main className="w-w-w h-f m-auto flex my-3 flex-col justify-between">
          <div className="bg-red-500 w-full h-5/6 bg-[url('/classpic2.svg')] bg-no-repeat bg-cover bg-center rounded "></div>
          <div className="">
            <h1>Fundamentals of chess </h1>
            <div className="flex justify-between text-xs">
              <p>Helen Thomas</p>
              <p>1hr 30mins</p>
            </div>
          </div>
        </main>
        <main className="w-w-w h-f m-auto flex my-3 flex-col justify-between">
          <div className="bg-red-500 w-full h-5/6 bg-[url('/classpic1.svg')] bg-no-repeat bg-cover bg-center rounded "></div>
          <div className="">
            <h1>Fundamentals of chess </h1>
            <div className="flex justify-between text-xs">
              <p>Helen Thomas</p>
              <p>1hr 30mins</p>
            </div>
          </div>
        </main>
        <main className="w-w-w h-f m-auto flex my-3 flex-col justify-between">
          <div className="bg-red-500 w-full h-5/6 bg-[url('/classpic2.svg')] bg-no-repeat bg-cover bg-center rounded "></div>
          <div className="">
            <h1>Fundamentals of chess </h1>
            <div className="flex justify-between text-xs">
              <p>Helen Thomas</p>
              <p>1hr 30mins</p>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default landing;
