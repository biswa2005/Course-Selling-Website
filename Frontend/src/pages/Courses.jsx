import {
  GraduationCap,
  BookOpen,
  Target,
  Award,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Button from "../components/CourseButton";
import { useNavigate } from "react-router-dom";

export default function Courses({ onNavigate }) {
  const navigate = useNavigate();
  const courses = [
    {
      title: "NEET Preparation",
      subtitle: "PRIMARY FOCUS",
      description:
        "Comprehensive coaching for medical entrance examination with proven track record",
      duration: "1-2 Years",
      subjects: ["Physics", "Chemistry", "Biology"],
      highlights: [
        "Expert faculty with medical background",
        "Daily practice sessions & mock tests",
        "NCERT-based structured curriculum",
        "Personalized doubt clearing sessions",
        "Previous year question analysis",
        "Regular performance tracking",
      ],
      bgColor: "bg-black",
      textColor: "text-white",
      borderColor: "border-black",
      backgroundImage:
        "https://images.unsplash.com/photo-1614308457932-e16d85c5d053",
    },
    {
      title: "JEE",
      subtitle: "ENGINEERING ENTRANCE",
      description:
        "Strategic preparation for one of India's toughest engineering entrance exams",
      duration: "1-2 Years",
      subjects: ["Physics", "Chemistry", "Mathematics"],
      highlights: [
        "IIT alumni mentorship available",
        "Concept-based learning approach",
        "Weekly assessment tests",
        "Problem-solving workshops",
        "Time management strategies",
        "Online & offline study material",
      ],
      bgColor: "bg-gray-100",
      textColor: "text-black",
      borderColor: "border-black",
      backgroundImage:
        "https://images.unsplash.com/photo-1581089786257-d34fe7d9bff6",
    },
    {
      title: "Competitive Exams",
      subtitle: "GOVERNMENT JOB PREPARATION",
      description:
        "Specialized coaching for WBP SI, Constable, Bank Clerk and other competitive examinations",
      duration: "6-12 Months",
      subjects: ["General Knowledge", "Reasoning", "Mathematics", "English"],
      highlights: [
        "Current affairs & GK updates",
        "Quantitative aptitude training",
        "Logical reasoning practice",
        "English language skills",
        "Interview preparation",
        "Exam pattern analysis",
      ],
      bgColor: "bg-black",
      textColor: "text-white",
      borderColor: "border-black",
      backgroundImage:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2V8ZW58MXx8fHwxNzYzMzUzNzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Foundation Programs",
      subtitle: "CLASS 8-10",
      description:
        "Strong fundamentals in Science & Mathematics, Olympiad readiness, logical reasoning and study discipline",
      duration: "1 Year",
      subjects: ["Science", "Mathematics", "Reasoning"],
      highlights: [
        "Strong fundamentals in Science & Mathematics",
        "Olympiad preparation & competitive exams",
        "Logical reasoning & analytical skills",
        "Building study discipline early",
        "Interactive learning sessions",
        "Regular assessment & feedback",
      ],
      bgColor: "bg-grey-100",
      textColor: "text-black",
      borderColor: "border-black",
      backgroundImage:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nfGVufDF8fHx8MTc2MzMzOTM0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HERO / OUR COURSES */}
      <section className="py-32 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h1 className="text-5xl md:text-6xl font-black uppercase">
            Our Courses
          </h1>

          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Choose from our expertly designed programs tailored for{" "}
            <span className="font-semibold">NEET, JEE,</span> and{" "}
            <span className="font-semibold">Competitive Exams</span>. Every
            course is built for success.
          </p>
        </div>
      </section>

      {/* COURSES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`relative overflow-hidden border-4 ${course.borderColor}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${course.backgroundImage})` }}
              />
              <div
                className={`absolute inset-0 ${
                  course.bgColor === "bg-black" ? "bg-black/70" : "bg-white/80"
                }`}
              />

              <div className="relative z-10 p-10 grid lg:grid-cols-3 gap-12">
                {/* LEFT */}
                <div className="space-y-6">
                  <span
                    className={`inline-block px-4 py-2 font-black ${
                      course.bgColor === "bg-black"
                        ? "bg-white text-black"
                        : "bg-black text-white"
                    }`}
                  >
                    {course.subtitle}
                  </span>

                  <h2
                    className={`text-4xl font-black uppercase ${course.textColor}`}
                  >
                    {course.title}
                  </h2>

                  <p
                    className={
                      course.bgColor === "bg-black"
                        ? "text-gray-300"
                        : "text-gray-600"
                    }
                  >
                    {course.description}
                  </p>

                  <div className="pt-6 border-t border-gray-300 space-y-4">
                    <div className="flex items-center gap-3">
                      <GraduationCap className={course.textColor} />
                      <span className={course.textColor}>
                        Duration: {course.duration}
                      </span>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <BookOpen className={course.textColor} />
                        <span className={course.textColor}>Subjects:</span>
                      </div>

                      <div className="flex gap-2 flex-wrap">
                        {course.subjects.map((s, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 ${
                              course.bgColor === "bg-black"
                                ? "bg-gray-800 text-white"
                                : "bg-gray-200 text-black"
                            }`}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="lg:col-span-2 space-y-6">
                  <h3
                    className={`text-2xl font-black uppercase ${course.textColor}`}
                  >
                    Course Highlights
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    {course.highlights.map((h, i) => (
                      <div key={i} className="flex gap-3">
                        <CheckCircle className={course.textColor} />
                        <span
                          className={
                            course.bgColor === "bg-black"
                              ? "text-gray-300"
                              : "text-gray-700"
                          }
                        >
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={() => navigate("/register")}
                    className={`mt-6 px-8 py-4 font-black uppercase cursor-pointer ${
                      course.bgColor === "bg-black"
                        ? "bg-white text-black"
                        : "bg-black text-white"
                    }`}
                  >
                    Enroll Now
                    <ArrowRight className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LEARNING EXPERIENCE */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl font-black uppercase mb-16">
            Learning{" "}
            <span className="pl-2 bg-linear-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Result-Oriented",
                text: "Focused teaching methodology designed to maximize your exam performance",
                icon: Target,
              },
              {
                title: "Study Materials",
                text: "Comprehensive notes, practice papers, and digital resources included",
                icon: BookOpen,
              },
              {
                title: "Small Batches",
                text: "Limited students per batch ensuring personalized attention",
                icon: GraduationCap,
              },
              {
                title: "Proven Methods",
                text: "Time-tested strategies used by thousands of successful students",
                icon: Award,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border-4 border-indigo-950 p-8 text-center space-y-4 bg-white transition-all duration-300 hover:-translate-y-2 rounded-md"
              >
                <div className="inline-flex p-4 bg-indigo-950 text-white">
                  <item.icon />
                </div>
                <h3 className="font-black uppercase text-lg text-indigo-900">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1f1f4a] text-white text-center my-12">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-linear-to-t from-gray-400 to-white bg-clip-text text-transparent leading-tight">
            READY TO WRITE <br />
            <span className="block bg-linear-to-t from-gray-400 to-white bg-clip-text text-transparent leading-tight">
              YOUR SUCCESS STORY?
            </span>
          </h1>

          <p className="text-gray-200 text-lg">
            Join Pragati Coaching Centre today and transform your academic
            dreams into reality.
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
        </div>
      </section>
    </div>
  );
}
