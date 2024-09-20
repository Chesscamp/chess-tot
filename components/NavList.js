import React from "react";
import Link from "next/link";

const NavList = () => {
  return (
    <div className="flex w-full justify-around mt-3">
      <Link href=''>
        <div className="text-xs font-semibold">
            Category
        </div>
      </Link>
      <Link className="" href=''>
        <div className="text-xs font-semibold">
            Playlist
        </div>
      </Link>
      <Link href=''>
        <div className="text-xs font-semibold">
            Tutor
        </div>
      </Link>
      <Link href=''>
        <div className="text-xs font-semibold">
            Bundles
        </div>
      </Link>
    </div>
  );
};

export default NavList;
