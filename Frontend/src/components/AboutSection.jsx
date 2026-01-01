const AboutSection = () => {
  return (
    <section className="w-full min-h-screen bg-linear-to-b from-[#eef0ff] to-[#f6f7ff] px-6 py-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#1f1f4d] leading-tight">
          Best Coaching Centre for
        </h1>
        <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-extrabold bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          NEET, JEE & Competitive Exams
        </h1>
        {/* Subheading */}
        <p className="mt-10 max-w-2xl mx-auto px-4 text-2xl md:text-2xl lg:text-3xl text-center font-semibold text-gray-500 leading-10">
          PRAGATI COACHING CENTRE – Expert Exam Preparation with Proven Results
        </p>
        {/* Description */}
        <p className="mt-8 max-w-4xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
          Transform your dreams into reality with India's leading coaching
          institute. Specialized coaching for{" "}
          <span className="text-blue-600 font-semibold">
            NEET Medical Entrance
          </span>
          ,{" "}
          <span className="text-purple-600 font-semibold">JEE Engineering</span>{" "}
          and{" "}
          <span className="text-pink-500 font-semibold">
            Competitive Government Exams
          </span>{" "}
          <br />
          (WBP SI, Constable, Bank Clerk). Join 5,000+ successful students with
          our personalized learning approach and experienced faculty.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
          <button
            onClick={() => (window.location.href = "/register")}
            className="px-8 py-4 text-lg font-semibold text-white rounded-xl bg-blue-500 hover:bg-blue-600 transition shadow-lg cursor-pointer"
          >
            Start Your Success Journey →
          </button>

          <button
            onClick={() => (window.location.href = "/contact")}
            className="px-8 py-4 text-lg font-semibold text-white rounded-xl bg-linear-to-r from-purple-500 to-orange-500 hover:opacity-90 transition shadow-lg cursor-pointer"
          >
            Book Free Consultation →
          </button>
        </div>
        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-10 text-center uppercase">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-500">
              5000+
            </h2>
            <p className="mt-2 text-gray-600 font-medium">Students Trained</p>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-purple-500">
              92%
            </h2>
            <p className="mt-2 text-gray-600 font-medium">Success Rate</p>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-pink-500">
              450+
            </h2>
            <p className="mt-2 text-gray-600 font-medium">NEET Selections</p>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-orange-500">
              15+
            </h2>
            <p className="mt-2 text-gray-600 font-medium">Years Experience</p>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-green-500">
              4.9/5
            </h2>
            <p className="mt-2 text-gray-600 font-medium">Student Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
