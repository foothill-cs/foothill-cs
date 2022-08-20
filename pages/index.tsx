import type { NextPage } from "next";
import { Calender } from "../components/calender";
import DotMatrix from "../components/dotMatrix";
import { Square } from "../components/square";

const Home: NextPage = () => {
  return (
    <div className="w-screen grid grid-cols-4 p-4 gap-4 grid-rows-3">
      <DotMatrix />
      <Square span="col-span-2" />
      <Calender />
    </div>
  );
};

export default Home;
