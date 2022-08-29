import type { NextPage } from "next";
import { Calendar } from "../components/Calendar";
import DotMatrix from "../components/dotMatrix";
import { Events } from "../components/events";
import Officers from "../components/Officers";
import { Square } from "../components/square";

const Home: NextPage = () => {
  return (
    <div className="grid grid-cols-1 p-4 gap-4 sm:grid-cols-4">
      <DotMatrix />
      <Square span="col-span-2" />
      <Calendar />
      <Officers />
      <Events />
    </div>
  );
};

export default Home;
