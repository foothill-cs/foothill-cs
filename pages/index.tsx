import type { NextPage } from "next";
import DotMatrix from "../components/dotMatrix";

const Home: NextPage = () => {
  return (
    <div className="w-screen flex justify-center items-center">
      <DotMatrix />
    </div>
  );
};

export default Home;
