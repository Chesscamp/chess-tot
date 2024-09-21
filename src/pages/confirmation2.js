import { Input } from "postcss";
import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";

const Confirmation2 = () => {
  return (
    <div className="">
      <div className="w-w-w m-auto mt-4 h-h-m flex flex-col">
        <div className="flex move  w-4/6 justify-around">
          <p>
            <IoMdArrowRoundBack />
          </p>
          <p className="font-semibold">What's your name?</p>
        </div>

        <div className="w-full justify-around flex h-1/3 items-center">
          <input
            placeholder="firstname "
            className="border-black border-2 w-2/5 h-2/6"
          />
          <input
            placeholder="Surname  "
            className="border-black border-2 w-2/5 h-2/6"
          />
        </div>
        <div className="flex  flex-col items-center ">
          <button className="bg-black text-white w-w-w rounded-md p-2 align-middle">
            <Link href="./gendercomf">Next</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation2;
