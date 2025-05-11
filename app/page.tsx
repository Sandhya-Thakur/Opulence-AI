"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  const features = [
    {
      title: "Mood-Based Shopping",
      description:
        "Our AI reads your mood and recommends luxury items that perfectly complement how you feel. From vibrant accessories for joyful days to sophisticated pieces for more contemplative moments.",
      icon: "🌟",
    },
    {
      title: "Custom Gift Creator",
      description:
        "Simply describe your recipient and their tastes. Our AI curates the perfect luxury gift combinations, complete with a personalized digital card. Gift-giving, elevated.",
      icon: "🎁",
    },
    {
      title: "Rare Item Finder",
      description:
        "Our AI hunts tirelessly across global auctions, boutiques, and private sales to locate those elusive luxury pieces you've been dreaming of. Instant alerts when we find your treasure.",
      icon: "🔍",
    },
    {
      title: "Social Media Stylist",
      description:
        "Connect your Instagram or TikTok and watch as our AI analyzes your aesthetic to create complete, stunning outfits for any occasion that perfectly match your unique style.",
      icon: "👗",
    },
    {
      title: "Eco-Conscious Luxury",
      description:
        "Every item receives our proprietary Green Score, evaluating sustainability across 50+ metrics. Indulge in luxury that aligns with your values without compromising on quality.",
      icon: "🌿",
    },
  ];

  const membershipTiers = [
    {
      name: "Luxe",
      price: "$99",
      period: "per month",
      features: [
        "Mood-based shopping recommendations",
        "Sustainability metrics and filtering",
        "Basic concierge support",
        "Access to exclusive collections",
      ],
    },
    {
      name: "Prestige",
      price: "$299",
      period: "per month",
      features: [
        "All Luxe benefits",
        "Custom gift creator",
        "Social media style analysis",
        "Virtual styling consultations",
        "Priority concierge access",
      ],
    },
    {
      name: "Opulent",
      price: "$999",
      period: "per month",
      features: [
        "All Prestige benefits",
        "Rare item finder with alerts",
        "Dedicated personal shopper",
        "Private shopping events",
        "White glove global delivery",
        "Unlimited style consultations",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Navigation - Updated with gold accents */}
        <nav className="relative z-20 flex justify-between items-center py-6 px-8 md:px-16 border-b border-[#B38728]/20">
          <div className="flex items-center">
            {/* Logo with gold text styling */}
            <Image
              src="/OPULENCE.png"
              alt="Opulence AI"
              width={100}
              height={100}
              priority
            />
          </div>

          <div className="hidden md:flex space-x-10 items-center text-sm">
            <a
              href="#features"
              className="text-[#B38728] hover:text-[#DCBB65] transition duration-300 uppercase tracking-wider text-xs font-light"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-[#B38728] hover:text-[#DCBB65] transition duration-300 uppercase tracking-wider text-xs font-light"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-[#B38728] hover:text-[#DCBB65] transition duration-300 uppercase tracking-wider text-xs font-light"
            >
              Membership
            </a>
            <button className="bg-transparent border border-[#B38728] text-[#B38728] px-8 py-2 rounded-sm hover:bg-[#B38728]/10 transition duration-300 uppercase tracking-wider text-xs font-light">
              Join Waitlist
            </button>
          </div>

          {/* Mobile menu button with gold color */}
          <button className="md:hidden text-[#B38728] text-2xl">☰</button>
        </nav>
        <div className="pb-12"></div>
        <div className="flex items-center justify-between h-[calc(100vh-80px)] px-8 md:px-16">
          <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto">
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8">
              <div className="flex">
                {/* Mannequin Silhouette */}

                <div className="w-1/3 flex justify-end items-center">
                  <div className="relative w-full h-[500px] pr-8">
                    <Image
                      src="/shadow.png"
                      alt="AI Assistant"
                      fill
                      style={{
                        objectFit: "contain",
                        objectPosition: "right center",
                      }}
                      className="opacity-70 scale-150"
                    />
                  </div>
                </div>
                <div className="w-40"></div>
                {/* Feature Menu */}
                <div className="w-2/3 flex items-center">
                  <div className="bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-md overflow-hidden w-full">
                    <div className="px-6">
                      <div
                        className="py-6 border-b border-[#D4AF37]/20 flex items-center space-x-5 cursor-pointer hover:bg-[#111111]"
                        onClick={() => setActiveFeature(0)}
                      >
                        <span className="text-[#D4AF37]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
                              stroke="#D4AF37"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M9 12C9 10.3431 10.3431 9 12 9"
                              stroke="#D4AF37"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>
                        <div className="text-white text-lg font-light">
                          Mood-Based Recommendations
                        </div>
                      </div>
                      {/* Custom Gift */}
                      <div
                        className="py-6 border-b border-[#D4AF37]/20 flex items-center space-x-5 cursor-pointer hover:bg-[#111111]"
                        onClick={() => setActiveFeature(1)}
                      >
                        <span className="text-[#D4AF37]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="4"
                              y="8"
                              width="16"
                              height="4"
                              stroke="#D4AF37"
                              strokeWidth="1.5"
                            />
                            <rect
                              x="6"
                              y="12"
                              width="12"
                              height="8"
                              stroke="#D4AF37"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M12 8V20"
                              stroke="#D4AF37"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M12 8C12 6.89543 11.1046 6 10 6C8.89543 6 8 6.89543 8 8"
                              stroke="#D4AF37"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M12 8C12 6.89543 12.8954 6 14 6C15.1046 6 16 6.89543 16 8"
                              stroke="#D4AF37"
                              strokeWidth="1.5"
                            />
                          </svg>
                        </span>
                        <div className="text-white text-lg font-light">
                          Custom Gift
                        </div>
                      </div>
                      {/* Rare Item */}
                      <div
                        className="py-6 border-b border-[#D4AF37]/20 flex items-center space-x-5 cursor-pointer hover:bg-[#111111]"
                        onClick={() => setActiveFeature(2)}
                      >
                        <span className="text-[#D4AF37]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.5 9.5L14.5 14.5M9.5 14.5L14.5 9.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                              stroke="#D4AF37"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>
                        <div className="text-white text-lg font-light">
                          Rare Item
                        </div>
                      </div>
                      {/* Social Media Stylist */}
                      <div
                        className="py-6 border-b border-[#D4AF37]/20 flex items-center space-x-5 cursor-pointer hover:bg-[#111111]"
                        onClick={() => setActiveFeature(3)}
                      >
                        <span className="text-[#D4AF37]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 5C7.58172 5 4 8.58172 4 13C4 17.4183 7.58172 21 12 21C16.4183 21 20 17.4183 20 13C20 8.58172 16.4183 5 12 5Z"
                              stroke="#D4AF37"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10C15 11.6569 13.6569 13 12 13Z"
                              stroke="#D4AF37"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M12 13V17"
                              stroke="#D4AF37"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M9 16H15"
                              stroke="#D4AF37"
                              strokeWidth="1.5"
                            />
                          </svg>
                        </span>
                        <div className="text-white text-lg font-light">
                          Social Media Stylist
                        </div>
                      </div>
                      {/* Eco-Conscious Luxury */}
                      <div
                        className="py-6 flex items-center space-x-5 cursor-pointer hover:bg-[#111111]"
                        onClick={() => setActiveFeature(4)}
                      >
                        <span className="text-[#D4AF37]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
                              stroke="#D4AF37"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M12 7V15"
                              stroke="#D4AF37"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M9 13L12 16L15 13"
                              stroke="#D4AF37"
                              strokeWidth="1.5"
                            />
                          </svg>
                        </span>
                        <div className="text-white text-lg font-light">
                          Eco-Conscious Luxury
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Tagline Below Feature Menu */}
              <div className="mt-12 pl-4">
                <h1 className="text-5xl md:text-5xl font-light leading-tight text-white">
                  Personalized luxury
                  <br />
                  shopping, powered by AI
                </h1>
                <div className="mt-8">
                  <button className="border border-[#D4AF37] text-[#D4AF37] px-8 py-3 font-light tracking-wide hover:bg-[#D4AF37]/10 transition-colors">
                    GET STARTED
                  </button>
                </div>
              </div>
            </div>
            <div className="pl-20"></div>
            {/* Right Side - Dress in Display Box */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="relative w-full h-[600px]">
                <Image
                  src="/newDess.png"
                  alt="Luxury Gold Dress in Display"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
