const AboutSection = () => {
  return (
    <section className="w-full h-[80vh] bg-[#f9f9f9] py-20 px-6">
      <div className="max-w-6xl mx-auto my-24 text-center leading-wider">
        {/* Heading */}
        <h2
          className="text-8xl md:text-5xl font-extrabold mt-2
    bg-linear-to-r from-slate-900 via-slate-700 to-slate-500 
    bg-clip-text text-transparent"
        >
          WHY CHOOSE
        </h2>

        <h2
          className="text-8xl md:text-5xl font-extrabold mt-2
    bg-linear-to-r from-slate-900 via-slate-700 to-slate-500 
    bg-clip-text text-transparent"
        >
          PRAGATI COACHING CENTRE
        </h2>

        {/* Description */}
        <div className="flex justify-center">
          {" "}
          <div className="w-[40vw] text-center mt-10 text-2xl font-semibold md:text-xl text-gray-600 leading-relaxed">
            We provide comprehensive coaching for NEET (Primary Focus), JEE
            Mains, and Competitive Exams designed to help you achieve top ranks.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
