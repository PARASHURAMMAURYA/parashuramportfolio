
import moon from "../assets/moon_PNG12.png";
import laptop from "../assets/lacalle.46e4f32c9b4d72a6fb3a.png";
import { useTheme } from "../ThemeContext";
import sun2 from "../assets/sun3.png";

function Home() {
  const { isDarkMode } = useTheme();

  return (
    <div className="relative max-w-[1320px] mx-auto min-w-[320px]">
      <div className="ml-4">
        <h1 className="absolute lg:left-1/4 lg:text-6xl top-20 md:text-4xl md:left-20 sm:text-md min[320px]:text-md animate-slide-right bg-gradient-to-r dark:bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
          Hi , This is Parshuram
        </h1>
        <h1 className="absolute text-2xl lg:left-1/4 lg:text-4xl top-40 md:text-2xl md:left-20 sm:text-2xl min[320px]:text-2xl animate-slide-right bg-gradient-to-r dark:bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
          React Developer
        </h1>
      </div>
      <div className="animate-fade-in">
        <img
          alt="moon"
          src={isDarkMode ? moon : sun2}
          className="sm:w-36 md:w-44 lg:w-64 min-[320px]:w-36 absolute sm:top-12 right-7 animate-spin-slow sm:right-18"
        />
      </div>
      <img
        alt="laptop"
        src={laptop}
        className="animate-slide-left top-60 sm:top-60 sm:w-48 md:w-56 lg:w-96 min-[320px]:w-36 absolute left-11"
      />
      
 
    </div>
  );
}

export default Home;
