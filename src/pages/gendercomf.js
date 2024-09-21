import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";

const gendercomf = () => {
  return (
    <div>
      <div className="">
        <div className="w-w-w m-auto mt-4 h-h-f flex flex-col justify-around ">
          <div className="flex move  w-4/6 justify-around">
            <p>
              <Link href='./confirmation2'>
                <IoMdArrowRoundBack />
              </Link>
            </p>
            <p className="font-semibold">Select your gender</p>
          </div>

          <div className="w-full justify-around border-2 border-black flex flex-col h-2/3 rounded-md items-center">
            <div className=" w-full flex justify-around">
              <label className="font-bold" for="">
                Female
              </label>
              <input className="" type="radio" />
            </div>

            <div className="w-full flex justify-around">
              <label className="font-bold" for="">
                Male
              </label>
              <input className="" type="radio" />
            </div>
          </div>
          <div className="flex  flex-col items-center ">
            <button className="bg-black text-white w-w-w rounded-md p-2 align-middle">
              <Link href="">Next</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default gendercomf;
