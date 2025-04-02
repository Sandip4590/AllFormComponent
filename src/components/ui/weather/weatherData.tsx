


const WeatherData = ({city}) => {
  return (
    <div key={city.id} className="  flex flex-col  items-center text-white w-full max-w-[550px] min-h-[420px] gap-3" >
  
    <div className="pt-4">
      <p className=" text-5xl capitalize font-semibold
      " >  {city.city}</p>
     
    </div>

 

    <p className=" text-2xl capitalize" > {city.desc}</p>
  
  
    <p className=" text-3xl font-semibold ">  {city.tempature}°c </p>

  

    <div className="w-full flex gap-y-[10px] gap-x-[20px] justify-center items-center mt-8">
      <div className="w-[30%] max-w-[300px] bg-[rgba(219,226,239,0.5)] rounded-md p-4 flex flex-col  items-center">
        <img src="/wind.png" className="w-[50px] " />
        <p>windspeed</p>
        <p>  {city.windspeed}m/s </p>
      </div>
      <div className="w-[30%] max-w-[200px] bg-[rgba(219,226,239,0.5)] rounded-md p-4 flex flex-col  items-center">
        <img src="/humidity.png" className="w-[50px] " />
        <p>humidity</p>
        <p >  {city.humidity}</p>
      </div>

      <div className="w-[30%] max-w-[200px] bg-[rgba(219,226,239,0.5)] rounded-md p-4 flex flex-col  items-center">
        <img src="/cloud.png " className="w-[50px]" />
        <p>clouds</p>
        <p> {city.clouds} </p>
      </div>
    </div>
  </div>
  )
}

export default WeatherData