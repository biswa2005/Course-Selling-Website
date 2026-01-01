import { ArrowRight } from "lucide-react";
import React from "react";
import Button from "../components/CourseButton";
import { useNavigate } from "react-router-dom";

const Mentors = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="min-h-screen w-full bg-white flex flex-col items-center justify-start pt-24 px-6">
        {/* Heading */}
        <h1 className="text-center font-extrabold md:text-7xl leading-tight animate-fadeUp">
          <span className="block text-black test-7xl">MEET OUR</span>
          <span className="block text-6xl bg-linear-to-r from-blue-600 via-violet-500 to-pink-500 bg-clip-text text-transparent">
            EXPERT MENTORS
          </span>
        </h1>

        {/* Subtext */}
        <div classname="flex justify-center">
          <p className="w-[35vw] text-center text-gray-600 text-lg font-semibold md:text-xl max-w-3xl mt-6 animate-fadeUp delay-200">
            IIT/Medical alumni and experienced faculty dedicated to helping you
            crack NEET, JEE Mains, and Competitive Exams.
          </p>
        </div>
        {/* Coming Soon */}
        <div className="mt-32 text-gray-600 text-lg md:text-xl animate-fadeUp delay-500">
          Mentor profiles coming soon.
        </div>
      </div>
      <section className="h-[60vh] mb-24 flex flex-col justify-center items-center text-center px-4 bg-indigo-950">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold bg-linear-to-t from-gray-400 to-white bg-clip-text text-transparent leading-tight">
          READY TO START <br />
          <span className="block bg-linear-to-t from-gray-400 to-white bg-clip-text text-transparent leading-tight">
            YOUR EXAM PREP?
          </span>
        </h1>

        {/* Subtitle */}
        <p className="my-6 text-gray-300 text-lg md:text-xl max-w-2xl">
          Get matched with the perfect mentor for your target exam and start
          your preparation journey today.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <Button
            onClick={() => navigate("/register")}
            className="px-8 py-4 font-black uppercase bg-white text-black cursor-pointer"
          >
            Register Now
            <ArrowRight className="ml-2" />
          </Button>

          <Button
            onClick={() => navigate("/contact")}
            className="px-8 py-4 font-black uppercase border-2 border-white text-white cursor-pointer"
          >
            Contact Us
          </Button>
        </div>
      </section>
    </>
  );
};

export default Mentors;
