/** @format */

import Link from "next/link";
import ImgGif from "@/app/img/globe-spin-bg.gif";
import Image from "next/image";
export default function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center justify-center bg-Dark-Gray">
      <div className="">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-[100px] font-bold">404</h1>
          <h2 className=" text-2xl">Not Found</h2>
          <p className="text-center">
            Could not find requested resource
          </p>
          <Link
            href="/"
            className="my-8 text-white border border-none rounded-full px-4 py-2 bg-Dark-Blue hover:bg-Dark-Gray hover:border-solid ">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
