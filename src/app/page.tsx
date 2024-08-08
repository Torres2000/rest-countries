/** @format */

import { DataProvider } from "@/app/context";
import Principal from "@/app/components/home";
export default function Home() {
  return (
    <>
      <DataProvider>
        <Principal />
      </DataProvider>
    </>
  );
}
