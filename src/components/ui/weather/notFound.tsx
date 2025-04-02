import React from "react";
import MyImage from "./not.png";
import Image from "next/image";



const NotFound = () => {
  return (
    <div className="  max-w-[450px] w-full">
     <Image src={MyImage} alt="Example" width={100} height={100}  className=" w-full object-cover " />
    </div>
  );
};

export default NotFound;
