import type { NextPage } from "next";
import { Calendar } from "../components/countdown";
import DotMatrix from "../components/homePage";
import Officers from "../components/prizes";
import { Square } from "../components/rectangle";
import { Schedule } from "../components/schedulehacks";
import { Faq } from "../components/faq";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    document.body.classList.remove("hid");
  }, []);
  return (
    <div className="p-4 gap-4">
      <DotMatrix />

      <div className="py-2"></div>

      <div>
        <Square span="col-span-2" />
        <div className="py-2"></div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
        <Schedule />
        <Officers />
        <Calendar />
      </div>
      <div className="py-4">
        <Faq span="col-span-2" />
        <div className="py-2"></div>
      </div>
    </div>
  );
};

export default Home;
