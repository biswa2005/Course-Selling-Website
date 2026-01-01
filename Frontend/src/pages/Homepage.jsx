import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import useAuthStore from "../store/authStore";
import { authAPI } from "../services/api";
import Card from "../components/Card";
import { Clock, Users, Trophy, Target, ArrowRight, Play } from "lucide-react";
import AboutSection from "../components/AboutSection";
import StatsSection from "../components/StatsSection";
import CTASection from "../components/CTASection";
import { HeroSlider } from "../components/HeroSlider";
import Declaration from "../components/Declaration";
import ChairmanMessage from "../components/ChairmanMessage";

const Homepage = () => {
  const features = [
    {
      id: "personalized-study",
      icon: Target,
      title: "Personalized Study Plans",
      description:
        "Custom study strategies tailored to your exam goals and learning style",
      bgColor: "bg-[#f6f3ff]",
      iconColor: "text-blue-500",
    },
    {
      id: "expert-mentors",
      icon: Users,
      title: "Expert Mentors",
      description:
        "IIT/Medical alumni and experienced faculty with proven track records",
      bgColor: "bg-[#fff1f6]",
      iconColor: "text-pink-500",
    },
    {
      id: "flexible-learning",
      icon: Clock,
      title: "Flexible Learning",
      description:
        "Study at your pace with online and offline coaching options",
      bgColor: "bg-[#f1f8ff]",
      iconColor: "text-purple-500",
    },
    {
      id: "proven-success",
      icon: Trophy,
      title: "Proven Success",
      description:
        "Track your progress and ace NEET, JEE Mains, and Competitive Exams with our expert guidance",
      bgColor: "bg-[#fffbe6]",
      iconColor: "text-orange-500",
    },
  ];

  return (
    <div>
      <HeroSlider />
      <AboutSection />
      <Declaration />
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
      <StatsSection />
      <div className="mt-12"></div>
      <ChairmanMessage />
      <CTASection />
      <div className="mb-12"></div>
    </div>
  );
};

export default Homepage;
