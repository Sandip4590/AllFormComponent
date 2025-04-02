
"use server"
import WeatherForm from "@/components/ui/weather/weatherForm";
import WeatherList from "@/components/ui/weather/weatherList";
import Image from "next/image";


const WeatherMain =  async({searchParams}) => {

  

  const city = (await searchParams).cityName;
  console.log(city)

  return (
    <div className=" bg-gradient-to-br from-[#112d4e] to-[#3f72af]  flex h-screen flex-col w-full items-center pt-10 gap-10 ">
      <h1 className=" text-5xl font-bold text-white uppercase">Weather App</h1>

      

    
       <WeatherForm />
       <WeatherList city={city}/>
        
      
    </div>
  );
};

export default WeatherMain;
