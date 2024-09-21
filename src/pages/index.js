import Image from "next/image";
import { FaUserGroup } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa";
import Link from "next/link";
import Navs from "../../components/Navs";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col h-11/12  w-11/12 justify-around m-auto  border h-screen ">
        <div className="w-5/6 m-auto h-h flex">
          <div className="w-1/2 h-full bg-black rounded-3xl flex justify-around items-center ">
            <Link href='./login'>
              <CgProfile className="text-white" />
            </Link>
            <p className="text-xs text-white">Name here</p>
            <FaAngleDown className="text-white" />
          </div>
        </div>

        <div className="bg-cust-brown h-2/4 w-5/6 m-auto rounded-2xl flex flex-col justify-end items-center pb-3">
          <div className="bg-[url('/tt.svg')] bg-no-repeat bg-cover bg-center h-full w-full rounded-2xl flex flex-col justify-end items-center pb-3">
            <div className=" w-4/5">
              <h1 className="w-full flex  text-2xl text-white">
                Play Tournament
              </h1>
              <p className="text-xs my-2 text-white">
                Lorem ipsum dolor sit amjjet consectetur adipisicing elit. Rem
                sit ut libero, tenetur voluptatum kndsb,amb mjnkl
              </p>
              <button className="w-full p-1 bg-cust-purple rounded-lg text-sm text-white">
                <Link href="/landing">Play now</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="border border-black text-black h-2/6  w-5/6 m-auto rounded-2xl flex flex-col justify-end items-center pb-3">
          <div className=" w-4/5">
            <h1 className="font-bold text-lg">Learn to play </h1>
            <p className="text-xs text-black ">
              Lorem ipsum dolor sit amet consectetur . w-w- Rem sit libero,
              tenetur voluptatum iusto
            </p>
            <button className="w-full p-1 border border-black rounded-lg text-sm my-1">
              <Link href="./landing">Play now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
