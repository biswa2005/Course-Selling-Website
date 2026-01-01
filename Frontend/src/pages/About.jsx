import React from "react";
import {
  Users,
  Award,
  TrendingUp,
  Star,
  Map,
  Target,
  Lightbulb,
  GraduationCap,
  UserCheck,
  Zap,
  BarChart3,
  ClipboardCheck,
  MessageSquare,
  Building2,
  ArrowRight,
} from "lucide-react";
import Button from "../components/CourseButton";

const About = () => {
  const whyChooseData = [
    {
      title: "Boutique, Rank-Focused Preparation",
      description:
        "We don't teach in bulk — we engineer ranks through a focused, outcome-driven teaching model.",
      icon: Award,
    },
    {
      title: "Limited Seats. Unlimited Attention.",
      description:
        "Small batches ensure personal attention, stronger interaction, and faster academic growth.",
      icon: Users,
    },
    {
      title: "Direct Access to Senior Faculty",
      description:
        "Students learn directly from experienced subject experts, not rotating assistants.",
      icon: GraduationCap,
    },
    {
      title: "1-to-1 Academic Mentorship",
      description:
        "Every student receives individual performance mentoring and continuous guidance.",
      icon: UserCheck,
    },
    {
      title: "Personalized Study Roadmaps",
      description:
        "Data-driven, custom study plans built around each student's strengths and gaps.",
      icon: Map,
    },
    {
      title: "Fast & In-Depth Doubt Resolution",
      description:
        "Instant help and scheduled deep-dive sessions — no waiting, no rushed answers.",
      icon: Zap,
    },
    {
      title: "Smart Testing with Analytics",
      description:
        "Adaptive test series with detailed performance insights, not generic evaluations.",
      icon: BarChart3,
    },
    {
      title: "Continuous Accountability System",
      description:
        "Individual tracking, regular reviews, and corrective actions to stay on track.",
      icon: ClipboardCheck,
    },
    {
      title: "Transparent Parent Communication",
      description:
        "Frequent progress reports and strategy updates keep parents involved and informed.",
      icon: MessageSquare,
    },
    {
      title: "Premium Learning Environment",
      description:
        "Disciplined, distraction-free classrooms designed for focus, consistency, and results.",
      icon: Building2,
    },
  ];
  return (
    <>
      {/* Heading */}
      <section className="w-full bg-[#ece9ff] py-24">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-[#1e1b4b]">About </span>
            <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              PRAGATI COACHING
            </span>
            <br />
            <span className="bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              CENTRE
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Leading coaching institute for NEET, JEE, and competitive exam
            preparation. Empowering students with knowledge, skills, and
            confidence to excel.
          </p>
        </div>
      </section>
      {/* Our Story & Stats */}
      <section className="w-full bg-[#efeefe] py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <span className="inline-block px-5 py-2 rounded-full bg-[#dfe1ff] text-blue-600 font-semibold text-sm">
              Our Story
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-[#15124b] leading-tight">
              Best Coaching Centre for
              <br />
              Competitive Exam
              <br />
              Success
            </h2>

            <div className="space-y-5 text-gray-600 text-lg leading-relaxed max-w-xl">
              <p>
                Pragati Coaching Centre was founded with a clear mission — to
                transform ambition into achievement. We are a student-focused
                coaching institute dedicated to NEET, JEE, and other competitive
                exams, built on the belief that the right guidance can unlock
                any student&apos;s potential.
              </p>

              <p>
                Our approach combines conceptual clarity, disciplined practice,
                personalized mentorship, and strategic exam planning. With small
                batch sizes, individual performance tracking, and customized
                academic counselling, we ensure every student receives focused
                attention and support.
              </p>
              <p>
                Pragati takes special pride in empowering students from
                semi-urban and rural backgrounds, ensuring that lack of exposure
                or resources never becomes a limitation. Guided by experienced
                faculty and mentors, we support students from strong foundations
                to exam readiness.
              </p>
              <p>
                Pragati means progress — in knowledge, confidence, and results.
                We don't just prepare students for exams; we prepare them for
                success in life.
              </p>
            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="pt-75 grid sm:grid-cols-2 gap-8">
            <div className="bg-[#e2e4ff] rounded-2xl p-8 text-center space-y-4 hover:shadow-lg transition-shadow duration-300">
              <Users className="mx-auto text-blue-500" />
              <div className="text-4xl font-extrabold text-[#15124b]">
                5000+
              </div>
              <div className="text-gray-600 font-medium">Students Trained</div>
            </div>

            <div className="bg-[#e2e4ff] rounded-2xl p-8 text-center space-y-4 hover:shadow-lg transition-shadow duration-300">
              <Award className="mx-auto text-blue-500" />
              <div className="text-4xl font-extrabold text-[#15124b]">450+</div>
              <div className="text-gray-600 font-medium">NEET Selections</div>
            </div>

            <div className="bg-[#e2e4ff] rounded-2xl p-8 text-center space-y-4 hover:shadow-lg transition-shadow duration-300">
              <TrendingUp className="mx-auto text-blue-500" />
              <div className="text-4xl font-extrabold text-[#15124b]">92%</div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </div>

            <div className="bg-[#e2e4ff] rounded-2xl p-8 text-center space-y-4 hover:shadow-lg transition-shadow duration-300">
              <Star className="mx-auto text-blue-500" />
              <div className="text-4xl font-extrabold text-[#15124b]">15+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            {/* OUR MISSION */}
            <div className="bg-white rounded-2xl p-10 shadow-lg space-y-6">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100">
                <Target className="text-blue-600" />
              </div>

              <h3 className="text-3xl font-extrabold text-[#15124b]">
                Our Mission
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                To provide high-quality, affordable and result-oriented
                education for NEET, JEE and Competitive exam aspirants, focusing
                on strong fundamentals, disciplined preparation and personal
                mentorship, so that student-regardless of background gets an
                equal opportunity to succeed.
              </p>
            </div>

            {/* OUR VISION */}
            <div className="bg-white rounded-2xl p-10 shadow-lg space-y-6">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-100">
                <Map className="text-purple-600" />
              </div>

              <h3 className="text-3xl font-extrabold text-[#15124b]">
                Our Vision
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                To become a trusted leading coaching institute in India, known
                for academic excellence, ethical teaching practices, and student
                success, while empowering students from districts and small
                towns to compete confidently at the national level.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#f2efff]">
        <div className="max-w-7xl mx-auto px-6">
          {/* SECTION HEADER */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-[#15124b]">
              Our Core Values
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              The principles that guide everything we do at{" "}
              <span className="font-medium text-gray-700">
                PRAGATI COACHING CENTRE
              </span>
            </p>
          </div>

          {/* VALUES GRID */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Excellence */}
            <div className="bg-white rounded-2xl p-8 shadow-md text-center space-y-5">
              <div className="mx-auto w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                <Target className="text-blue-600 w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#15124b]">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Committed to delivering the highest quality education and
                achieving outstanding results in competitive exams.
              </p>
            </div>

            {/* Student-Centric */}
            <div className="bg-white rounded-2xl p-8 shadow-md text-center space-y-5">
              <div className="mx-auto w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center">
                <Users className="text-indigo-600 w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#15124b]">
                Student-Centric
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every student is unique. We provide personalized attention and
                customized learning paths for success.
              </p>
            </div>

            {/* Integrity */}
            <div className="bg-white rounded-2xl p-8 shadow-md text-center space-y-5">
              <div className="mx-auto w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                <Award className="text-purple-600 w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#15124b]">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                Building trust through transparent processes, honest guidance,
                and ethical coaching practices.
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-white rounded-2xl p-8 shadow-md text-center space-y-5">
              <div className="mx-auto w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center">
                <Lightbulb className="text-pink-600 w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#15124b]">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Embracing modern teaching methods and technology to create
                engaging, effective learning experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-24 bg-[#f1efff]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black uppercase text-indigo-950 leading-12">
              Why Choose PRAGATI COACHING CENTRE?
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Discover what makes us the best choice for your exam preparation
              journey
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseData.map((item, index) => (
              <div
                key={index}
                className="bg-white pb-24 rounded-2xl px-8 pt-6 shadow-sm hover:shadow-lg transition"
              >
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-full bg-indigo-100 text-indigo-600">
                    <item.icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="font-bold text-2xl pt-2 text-indigo-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-600 text-xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action */}
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
            className="px-8 py-4 font-black uppercase bg-white text-black cursor-pointer rounded-lg"
          >
            Register Now
            <ArrowRight className="ml-2" />
          </Button>

          <Button
            onClick={() => navigate("/contact")}
            className="px-8 py-4 font-black uppercase border-2 cursor-pointer bg-linear-to-r from-violet-600 to-orange-500 text-white rounded-lg"
          >
            Contact Us
          </Button>
        </div>
      </section>
    </>
  );
};

export default About;
