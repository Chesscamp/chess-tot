import React from "react";
import Link from "next/link";
import { FaRegChessRook } from "react-icons/fa6";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { RiGraduationCapLine } from "react-icons/ri";
import { TbCoin } from "react-icons/tb";

const Navs = () => {
  return (
    <div className="w-full  absolute flex justify-center">
      <div className="flex w-11/12  m-auto my-3 bg-black rounded-3xl p-2 fixed bottom-0 justify-around ">
        <div>
          <Link href="" className="flex flex-col justify-center  items-center">
            <FaRegChessRook className="text-white" />

            <p className="text-xs text-white">play</p>
          </Link>
        </div>
        <div>
          <Link href="" className="flex flex-col justify-center i items-center">
            <IoExtensionPuzzleOutline className="text-white" />
            <p className="text-xs text-white">Puzzle</p>
          </Link>
        </div>
        <div>
          <Link href="" className="flex flex-col justify-center  items-center">
            <RiGraduationCapLine  className="text-white"/>
            <p className="text-xs text-white">Learn</p>
          </Link>
        </div>
        <div>
          <Link href="" className="flex flex-col justify-center  items-center">
            <TbCoin  className="text-white"/>
            <p className="text-xs text-white">Token</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navs;
