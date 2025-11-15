import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import useAuthStore from "../store/authStore";
import { authAPI } from "../services/api";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { Clock, Users, Trophy, Target, ArrowRight, Play } from "lucide-react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import StatsSection from "../components/StatsSection";
import CTASection from "../components/CTASection";

const Homepage = () => {
  const features = [
    {
      icon: Target,
      title: "Personalized Study Plans",
      description:
        "Custom study strategies tailored to your exam goals and learning style",
      bgColor: "bg-black",
      iconColor: "text-white",
    },
    {
      icon: Users,
      title: "Expert Mentors",
      description:
        "IIT/Medical alumni and experienced faculty with proven track records",
      bgColor: "bg-grey-100",
      iconColor: "text-black",
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description:
        "Study at your pace with online and offline coaching options",
      bgColor: "bg-black",
      iconColor: "text-white",
    },
    {
      icon: Trophy,
      title: "Proven Success",
      description:
        "Track your progress and ace NEET, JEE Mains, and Competitive Exams with our expert guidance",
      bgColor: "bg-grey-100",
      iconColor: "text-black",
    },
  ];
  const navigate = useNavigate();
  const { user, isAuthenticated, logout, checkAuth } = useAuthStore();

  useEffect(() => {
    // Check authentication on mount
    const isAuth = checkAuth();
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <div className="ml-16  grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
        {features.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
      <StatsSection />
      <CTASection />
    </div>
  );
};

export default Homepage;
