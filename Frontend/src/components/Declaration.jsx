const Declaration = () => {
  return (
    <section className="w-full bg-[#f8f9fb] pt-12 pb-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Decorative Divider */}
        <div className="flex items-center justify-center mb-6">
          <span className="w-10 h-0.5 bg-indigo-900"></span>
          <span className="mx-2 text-indigo-900 text-lg">◆</span>
          <span className="w-10 h-0.5 bg-indigo-900"></span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1f1f4d] tracking-wide">
          WHY CHOOSE
        </h2>

        <h2 className="mt-3 text-4xl md:text-5xl font-extrabold bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          PRAGATI COACHING CENTRE
        </h2>

        {/* Description */}
        <p className="mt-10 max-w-3xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed">
          We provide comprehensive coaching for NEET (Primary Focus), JEE, and
          Competitive Exams designed to help you achieve top ranks.
        </p>
      </div>
    </section>
  );
};

export default Declaration;
