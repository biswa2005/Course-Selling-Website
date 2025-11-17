import { useNavigate } from "react-router-dom";
import logo from "../assets/pragati-foundation-logo.png";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleStartNow = () => {
    navigate("/register");
  };

  const handleMeetCoaches = () => {
    navigate("/mentors"); 
  };

  return (
    <section className="w-full bg-linear-to-r from-black via-gray-800 to-gray-700 text-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE TEXT */}
        <div>
          <h1 className="text-xl md:text-7xl font-extrabold leading-tighter">
            CRACK YOUR <br />
            DREAM. <br />
            EXAM <br />
            EXCELLENCE. <br />
            WHATEVER IT <br />
            TAKES.
          </h1>

          <p className="mt-8 text-xl text-gray-300 leading-relaxed max-w-md">
            Master NEET, JEE, and Other Competitive Exams with expert
            coaching. From fundamentals to advanced problem-solving, we'll help
            you achieve your academic dreams.
          </p>
        </div>

        {/* RIGHT SIDE IMAGE CARD */}
        <div className="flex justify-center">
          <img
            src={logo}
            alt="Pragati Foundation Logo"
            className="w-full object-cover transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* BUTTONS */}
      <div className="mt-8 flex items-center gap-4 ">
        <button
          onClick={handleStartNow}
          className="flex items-center gap-2 bg-white text-black font-bold px-6 py-3 rounded-md text-lg shadow 
              cursor-pointer hover:bg-gray-200 transition-all duration-300 
               transform hover:-translate-y-1 hover:shadow-lg"
        >
          START NOW <span className="text-xl">→</span>
        </button>

        <button
          onClick={handleMeetCoaches}
          className="flex items-center gap-3 border border-white text-white font-bold px-6 py-3 rounded-md text-lg cursor-pointer hover:bg-white hover:text-black transition-all duration-300 
               transform hover:-translate-y-1 hover:shadow-lg"
        >
          <span className="text-xl bg-transparent">▶</span>
          MEET COACHES
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
