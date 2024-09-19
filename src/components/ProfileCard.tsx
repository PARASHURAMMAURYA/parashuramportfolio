 import './profile.css'
import munna from '../assets/FB_IMG_1726115600076.jpg'
const ProfileCard = () => {
  return (
    <div className="relative w-80 h-96 perspective text-white animate-slide-up">
      <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d hover:rotate-y-180">
        {/* Front Side */}
        <div className="absolute top-56 w-full h-full border  blur-0.2 shadow-lg rounded-lg backface-hidden">
          <div className="p-2 text-center">
            <img
              className="w-28 h-24 rounded-tl-sm rounded-full rounded-full rounded-full  "
              src={munna}
              alt="Profile"
            />
            <h2 className="mt-4 text-xl font-semibold"></h2>
            <p className="text-white mt-2">
              A passionate developer with a love for creating dynamic and responsive web applications.
            </p>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-gray-800 text-white border border-gray-600 shadow-lg rounded-lg rotate-y-180 backface-hidden">
          <div className="p-6 text-center">
            <h2 className="text-xl font-semibold">About Me</h2>
            <p className="mt-4">
              I enjoy exploring new technologies and working on innovative projects. When I'm not coding, you can find me hiking or playing the guitar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
