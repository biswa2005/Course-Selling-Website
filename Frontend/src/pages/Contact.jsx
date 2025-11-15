const Contact = () => {
  return (
    <>
      {/* TOP HERO SECTION */}
      <section className="w-full min-h-[60vh] bg-black flex flex-col justify-center px-6 md:px-20 py-16">
        <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-6">
          GET IN TOUCH
        </h1>

        <p className="text-gray-300 text-xl md:text-2xl max-w-3xl leading-relaxed">
          Have questions about our academic coaching programs?
          <br />
          We're here to help you excel in your educational journey.
        </p>
      </section>

      {/* CONTACT DETAILS SECTION */}
      <section className="w-full flex flex-col md:flex-row px-6 md:px-20 py-16 gap-10">
        {/* LEFT SECTION */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-10">
            CONTACT INFORMATION
          </h2>

          {/* Email */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-1">Email</h3>
            <p className="text-gray-700 text-lg">
              soumadeepmajumder806@gmail.com
            </p>
          </div>

          {/* Phone */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-1">Phone</h3>
            <p className="text-gray-700 text-lg">+91 79084 59903</p>
            <p className="text-gray-700 text-lg">+91 70036 76226</p>
          </div>

          {/* Coaching Areas */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">Coaching Areas</h3>

            <ul className="text-gray-700 text-lg space-y-2 list-disc ml-4">
              <li>
                <span className="font-semibold">
                  NEET Preparation (Primary Focus)
                </span>
              </li>
              <li>JEE Mains Coaching</li>
              <li>Competitive Exams (WBP SI, Constable, Bank Clerk)</li>
              <li>Physics, Chemistry, Mathematics & Biology</li>
            </ul>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full md:w-1/2 bg-gray-100 p-10 md:p-12 rounded-md shadow-sm">
          <h2 className="text-4xl font-extrabold mb-6">READY TO START?</h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Take the first step towards academic excellence. Our experienced
            mentors are ready to guide you through your competitive exam
            preparation journey.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Contact us at the Email or Phone number given, to learn more about
            our programs and how we can help you achieve your academic goals.
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
