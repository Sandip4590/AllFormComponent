import Image from 'next/image'
import React from 'react'


const GetLocationPage = () => {
  return (
    <div><div className=" flex flex-col items-center gap-4">
    <Image
      src="/location.png"
      alt="Next.js logo"
      width={80}
      height={80}
      loading="lazy"
    />
    <p className="text-2xl text-white font-semibold">
      Grant location Access
    </p>
    <p className="text-[0.85rem] text-white font-medium  mb-4 tracking-[0.75px]">
      Allow Access to get weather Information
    </p>
    <button className="text-[0.85rem] uppercase rounded-[5px] bg-[#3f72af] cursor-pointer px-[30px] py-[10px] mb-[10px] text-white font-semibold">
      Grant Access
    </button>
  </div></div>
  )
}

export default GetLocationPage