/** @format */
import Desplegable from "./desplegable";
import iconLupa from "@/img/iconLupa.svg";
import Image from "next/image";
export default function Buscar() {
  return (
    <>
      <section className="mt-6">
        <div className=" max-w-7xl w-[90%] mx-auto md:flex justify-between">
          <div className="flex bg-white py-3 rounded-lg md:w-2/4 md:p-0">
            <Image
              src={iconLupa}
              alt="Icon Lupa"
              width={16}
              height={16}
              className="mx-6 cursor-pointer"
            />
            <input
              type="text"
              placeholder="Search for a country..."
              className="w-full focus-visible:outline-none"
            />
          </div>
          <Desplegable />
        </div>
      </section>
    </>
  );
}
