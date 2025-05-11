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
        <nav className="relative z-20 flex justify-between items-center py-3 px-8 md:px-16">
          <div className="flex items-center">
            {/* Logo with gold text styling */}
            <Image
              src="/OPULENCE.png"
              alt="Opulence AI"
              width={90}
              height={90}
              priority
            />
          </div>

          <div className="hidden md:flex space-x-8 items-center text-sm">
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
            <button className="bg-transparent border border-[#B38728] text-[#B38728] px-6 py-1.5 rounded-sm hover:bg-[#B38728]/10 transition duration-300 uppercase tracking-wider text-xs font-light">
              Join Waitlist
            </button>
          </div>

          {/* Mobile menu button with gold color */}
          <button className="md:hidden text-[#B38728] text-2xl">☰</button>
        </nav>
        <div className="pb-40"></div>
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
                        <div className="text-[#A9A9A9] text-lg font-light">
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
                        <div className="text-[#A9A9A9] text-lg font-light">
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
                        <div className="text-[#A9A9A9] text-lg font-light">
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
                        <div className="text-[#A9A9A9] text-lg font-light">
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
                        <div className="text-[#A9A9A9] text-lg font-light">
                          Eco-Conscious Luxury
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Tagline Below Feature Menu */}
              <div className="mt-12 pl-4">
                <h1 className="text-5xl md:text-5xl font-light leading-tight text-[#A9A9A9]">
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
            {/* Right Side - Dress in Display Box with Accessories */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="relative w-full h-[600px]">
                {/* Central Dress - Main Focus */}
                <Image
                  src="/newDess.png"
                  alt="Luxury Gold Dress in Display"
                  fill
                  style={{ objectFit: "contain", zIndex: 10 }}
                  priority
                />

                {/* Background glow effect */}
                <div className="absolute w-full h-full top-0 left-0 bg-gradient-radial from-[#D4AF37]/20 to-transparent opacity-50"></div>

                {/* Accessories positioned around the dress - all with consistent sizing */}

                {/* Top Center (Shoes on shoulders) */}
                <div className="absolute top-[-10%] left-[50%] w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 z-20 animate-float-slow">
                  <Image
                    src="/jewelry.png"
                    alt="Designer Shoes"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>

                {/* Left Top (Jewelry/Necklace) */}
                <div className="absolute top-[5%] left-[20%] w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 z-20 animate-pulse-gentle">
                  <Image
                    src="/shoes.png"
                    alt="Luxury Jewelry"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>

                {/* Right Top (Sunglasses) */}
                <div className="absolute top-[5%] right-[20%] w-20 h-20 transform translate-x-1/2 -translate-y-1/2 z-20 animate-vibrate">
                  <Image
                    src="/bag.png"
                    alt="Designer Sunglasses"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>

                {/* Left Middle (Perfume) */}
                <div className="absolute top-[30%] left-[15%] w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 z-20 animate-float">
                  <Image
                    src="/perfume.png"
                    alt="Luxury Perfume"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>

                {/* Right Middle (Watch) */}
                <div className="absolute top-[30%] right-[15%] w-20 h-20 transform translate-x-1/2 -translate-y-1/2 z-20 animate-swing">
                  <Image
                    src="/sunglasses.png"
                    alt="Luxury Watch"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>

                {/* Bottom Left (Lipstick) */}
                <div className="absolute bottom-[40%] left-[15%] w-15 h-15 transform -translate-x-1/2 translate-y-1/2 z-20 animate-pulse">
                  <Image
                    src="/lispstick.png"
                    alt="Luxury Lipstick"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>

                {/* Bottom Right (Bag) */}
                <div className="absolute bottom-[40%] right-[15%] w-30 h-30 transform translate-x-1/2 translate-y-1/2 z-20 animate-float-lr">
                  <Image
                    src="/watch.png"
                    alt="Designer Handbag"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="pt-48"></div>
      {/* Footer Section */}
      <footer className="bg-black border-t border-[#D4AF37]/20 py-16 px-8 md:px-16 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between pb-12 border-b border-[#D4AF37]/20">
            {/* Logo & Tagline */}
            <div className="mb-10 md:mb-0 md:w-1/3">
              <div className="mb-6">
                <Image
                  src="/OPULENCE.png"
                  alt="Opulence AI"
                  width={100}
                  height={100}
                  className="h-auto"
                />
              </div>
              <p className="text-[#A9A9A9] text-sm leading-relaxed mb-6 font-light max-w-xs">
                Redefining luxury shopping through artificial intelligence and
                personalized experiences.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-[#D4AF37] hover:text-white transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-[#D4AF37] hover:text-white transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-[#D4AF37] hover:text-white transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.19149 14.4122 4.53533 14.4362 3.89 14.31C4.16161 15.1625 4.69354 15.9084 5.4 16.4296C6.10646 16.9508 6.94937 17.2244 7.82 17.21C6.14897 18.6556 4.07376 19.4228 1.93 19.42C1.59 19.42 1.27 19.41 0.94 19.37C3.1 20.87 5.67 21.67 8.46 21.67C16 21.67 20.13 15.45 20.13 10.07C20.13 9.87 20.13 9.67 20.12 9.48C20.97 8.89 21.7 8.15 22.25 7.29L22.46 6Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-[#D4AF37] hover:text-white transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mb-10 md:mb-0">
              <h4 className="text-white text-lg font-light mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-[#A9A9A9] hover:text-[#D4AF37] transition-colors text-sm font-light"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#A9A9A9] hover:text-[#D4AF37] transition-colors text-sm font-light"
                  >
                    Our Vision
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#A9A9A9] hover:text-[#D4AF37] transition-colors text-sm font-light"
                  >
                    Membership
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#A9A9A9] hover:text-[#D4AF37] transition-colors text-sm font-light"
                  >
                    Partnerships
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#A9A9A9] hover:text-[#D4AF37] transition-colors text-sm font-light"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Features */}
            <div className="mb-10 md:mb-0">
              <h4 className="text-white text-lg font-light mb-6">Features</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-[#A9A9A9] hover:text-[#D4AF37] transition-colors text-sm font-light"
                  >
                    Mood-Based Shopping
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#A9A9A9] hover:text-[#D4AF37] transition-colors text-sm font-light"
                  >
                    Custom Gift Creator
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#A9A9A9] hover:text-[#D4AF37] transition-colors text-sm font-light"
                  >
                    Rare Item Finder
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#A9A9A9] hover:text-[#D4AF37] transition-colors text-sm font-light"
                  >
                    Social Media Stylist
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#A9A9A9] hover:text-[#D4AF37] transition-colors text-sm font-light"
                  >
                    Eco-Conscious Luxury
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <h4 className="text-white text-lg font-light mb-6">
                Stay in Touch
              </h4>
              <p className="text-[#A9A9A9] text-sm font-light mb-4">
                Subscribe to receive updates on our latest collections and
                exclusive offers.
              </p>
              <div className="flex mb-6">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-[#111111] border border-[#D4AF37]/20 text-white py-2 px-4 w-full focus:outline-none focus:border-[#D4AF37] text-sm font-light"
                />
                <button className="bg-[#D4AF37] text-black px-4 py-2 font-light text-sm">
                  Subscribe
                </button>
              </div>
              <p className="text-[#A9A9A9] text-sm font-light">
                <a
                  href="mailto:contact@opulence-ai.com"
                  className="text-[#D4AF37] hover:text-white transition-colors"
                >
                  contact@opulence-ai.com
                </a>
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#A9A9A9] text-xs font-light mb-4 md:mb-0">
              © 2025 OPULENCE AI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-[#A9A9A9] hover:text-[#D4AF37] text-xs font-light transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-[#A9A9A9] hover:text-[#D4AF37] text-xs font-light transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[#A9A9A9] hover:text-[#D4AF37] text-xs font-light transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
