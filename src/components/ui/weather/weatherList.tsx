import NotFound from "./notFound";
import WeatherData from "./weatherData";

const WeatherList = async ({ city }) => {
  if (!city?.trim()) {
    return <NotFound />;
  }

  const res = await fetch(`http://localhost:3000/wearther?city=${city}`);
  const json = await res.json();
  if (!json || json.length === 0) {
    return <NotFound />;
  }
  
  return (
    <div className="      text-white w-full max-w-[550px] min-h-[420px] ">
      {json.map((city) => {
        return <WeatherData key={city.id} city={city} />;
      })}
    </div>
  );
};

export default WeatherList;
