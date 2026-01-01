import React from "react";
import Button from "../components/CourseButton";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SuccessStories = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen w-full bg-white flex flex-col items-center justify-start pt-24 px-6">
        {/* Heading */}
        <h1 className="text-center font-extrabold md:text-7xl leading-tight animate-fadeUp">
          <span className="block text-black test-7xl">SUCCESS</span>
          <span className="block text-6xl bg-linear-to-r from-blue-600 via-violet-500 to-pink-500 bg-clip-text text-transparent">
            STORIES
          </span>
        </h1>

        {/* Subtext */}
        <div classname="flex justify-center">
          <p className="w-[35vw] text-center text-gray-600 text-lg font-semibold md:text-xl max-w-3xl mt-6 animate-fadeUp delay-200">
            Real results from real students. See how our coaching programs have
            transformed learning journeys and achieved academic goals.
          </p>
        </div>
        {/* Coming Soon */}
        <div className="mt-32 text-gray-600 text-lg md:text-xl animate-fadeUp delay-500">
          Success stories coming soon.
        </div>
      </div>
      <section className="h-[60vh] mb-24 bg-indigo-950 flex flex-col justify-center items-center text-center px-4">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold bg-linear-to-t from-gray-400 to-white bg-clip-text text-transparent leading-tight">
          READY TO WRITE <br />
          <span className="block bg-linear-to-t from-gray-400 to-white bg-clip-text text-transparent leading-tight">
            YOUR SUCCESS STORY?
          </span>
        </h1>

        {/* Subtitle */}
        <p className="my-6 text-gray-300 text-lg md:text-xl max-w-2xl">
          Join our community of successful students and start your
          transformation today.
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

export default SuccessStories;
