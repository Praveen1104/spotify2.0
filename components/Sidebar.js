
/*import {
  HomeIcon,
  ChartBarIcon,
  ClockIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/24/outline";*/
import Image from "next/image";
import image1 from "../public/pictures/image0.png"
import { AiFillHome } from "react-icons/ai";
import { HiChartBar } from "react-icons/hi";
import { FaClock } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaMicrophoneAlt } from "react-icons/fa";
import { RiCompassFill } from "react-icons/ri";

function Sidebar() {
  return (
    <section className="fixed top-0 z-40 flex flex-col p-4 items-center bg-black w-[90px] h-screen space-y-8">
      <Image
        src={image1}
        alt=""
        width={56}
        height={56}
        objectFit="contain"
        className=""
      />
      <div className="flex flex-col space-y-8 text-white ">
        <AiFillHome className="sidebarIcon text-white opacity-[0.85] text-2xl" />
        <RiCompassFill className="sidebarIcon text-2xl" />
        <FaMicrophoneAlt className="sidebarIcon ml-1 " />
        <HiChartBar className="sidebarIcon text-2xl"/>
        <FaClock className="sidebarIcon text-2xl" />
        <HiDotsHorizontal className="sidebarIcon text-2xl" />
      </div>
    </section>
  );
}

export default Sidebar;
