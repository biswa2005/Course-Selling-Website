import React from "react";
import logo from "../assets/logo.jpg";

const ChairmanMessage = () => {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Logo Placeholder */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 border-4 border-slate-800 flex items-center justify-center">
            <img src={logo} alt="Pragati Coaching Centre" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-slate-900">
          CHAIRMAN&apos;S{" "}
          <span className="block bg-linear-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
            MESSAGE
          </span>
        </h2>

        {/* Message Box */}
        <div className="mt-12 border-4 border-slate-900 px-8 md:px-12 py-10 text-left text-xl">
          <p className="text-lg text-slate-800 mb-6">
            <span className="font-semibold">Dear Students,</span>
          </p>

          <p className="text-slate-700 leading-relaxed mb-5 text-xl">
            At <span className="font-semibold">PRAGATI COACHING CENTRE</span>,
            we believe greatness is within you. Success in competitive exams is
            not just about hard work—it's about smart strategy, unwavering
            motivation, and the right guidance. Our mission is to nurture your
            dreams through expert teaching, result-oriented preparation, and
            continuous support.
          </p>

          <p className="text-slate-700 leading-relaxed mb-6 text-xl">
            With our experienced faculty, structured resources, and personalized
            mentorship, we ensure you are equipped to face every
            challenge—transforming aspirations into achievements. Let&apos;s
            embark on this journey together and make your success story a
            reality.
          </p>

          <p className="text-slate-700 mb-6 text-xl">Warm regards,</p>

          <hr className="border-slate-300 mb-6" />

          {/* Signature */}
          <h3 className="text-3xl font-extrabold text-slate-900 text-center">
            GOLAM NABI SARKAR
          </h3>
          <p className="text-sm tracking-wide text-slate-500 uppercase mt-1 text-center">
            Chairman, Pragati Coaching Centre
          </p>

          <p className="mt-4 italic font-semibold text-slate-800 text-center">
            Empowering Dreams. Inspiring Success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChairmanMessage;
