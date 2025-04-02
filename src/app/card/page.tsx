import ImageCard from "@/components/card/imageCard";
import LeftComponent from "@/components/card/leftComponent";
import RightComponent from "@/components/card/rightComponent";

import React from "react";

type Props = {};

const Card = (props: Props) => {
  return (
    <div className=" flex w-full h-screen overflow-hidden  ">
       <img src="/bgCard1.png" alt="" className=" absolute top-[50%] left-[15%] "  /> 
      <ImageCard />
      <LeftComponent />
      <RightComponent />
    </div>
  );
};

export default Card;
