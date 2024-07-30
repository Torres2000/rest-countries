/** @format */

import { DataProvider } from "@/context";
import Principal from "@/components/home";
export default function Home() {
  return (
    <>
      <DataProvider>
        <Principal />
      </DataProvider>
    </>
  );
}
