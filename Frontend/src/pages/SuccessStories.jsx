import React from "react";

const SuccessStories = () => {
  return (
    <>
      <div className="min-h-screen w-full bg-white flex flex-col items-center justify-start pt-24 px-6">
        {/* Heading */}
        <h1 className="text-center font-extrabold md:text-7xl leading-tight animate-fadeUp">
          <span className="block text-black test-7xl">SUCCESS</span>
          <span className="block text-6xl bg-linear-to-r from-black to-gray-500 text-transparent bg-clip-text">
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
      <section className="h-[60vh] mb-24 bg-black flex flex-col justify-center items-center text-center px-4">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold bg-linear-to-t from-gray-400 to-white bg-clip-text text-transparent leading-tight">
          READY TO WRITE <br />
          <span className="block bg-linear-to-t from-gray-400 to-white bg-clip-text text-transparent leading-tight">
            YOUR SUCCESS STORY?
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl">
          Join our community of successful students and start your
          transformation today.
        </p>
      </section>
    </>
  );
};

export default SuccessStories;
