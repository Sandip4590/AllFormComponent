import React from "react";
import { Input } from "../input";
import { Button } from "../button";
import Image from "next/image";

const WeatherForm = () => {
  return (
    <form action="" className="flex gap-4 items-center max-w-[550px] w-[100%] mt-5 ">
    <input type="text" name="cityName" id="" className="w-[calc(100%-100px)] h-[40px] px-[20px] bg-[rgba(219,226,239,0.5)]  focus:text-white  rounded-[10px] placeholder:text-white/70" placeholder="Enter Your City Name" required  />
  <button className="text-[0.85rem] uppercase rounded-full bg-[rgba(219,226,239,0.5)] cursor-pointer p-3 " type="submit">
  <Image
         src="/search.png"
         alt="Next.js logo"
         width={15}
         height={10}
         loading="lazy"
         className=" object-cover"
       />
  </button>
    </form>
  );
};

export default WeatherForm;
