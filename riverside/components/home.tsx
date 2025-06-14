"use client";
import { useState } from "react";
import { Navbar } from "./navbar";
import { CheckBox } from "./CheckBox";
const category = [
  "Podcasts",
  "Video interviews",
  "Social media clips",
  "Transcriptions",
  "Webinars",
  "Video marketing",
  "AI show notes",
  "Captions",
];
export const HeroSection = () => {
  const [isActiveIndex, setIsActiveIndex] = useState<number | null>(null)
  const handleToggle = (index : number) => {
    setIsActiveIndex(index === isActiveIndex ?null : index);
  }
  return (
    <div className="relative w-full h-[75vh]">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          src="https://cdn.prod.website-files.com/5f996b22b00afe35a55e6f79%2F67ebd8ec1c22c00e03e69765__Hero-Desktop%20%281%29-transcode.mp4"
          className="w-full h-full object-cover object-[center_10%]"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-10 relative text-white">
        <div className="max-w-xl md:max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
            Create your best content yet.
          </h1>
          <p className="mt-4 font-medium text-base md:text-lg lg:text-xl">
            Your online studio to record in high quality, edit in a flash, and
            go live with a bang. Not necessarily in that order. What would you
            like to start creating?
          </p>
          <div className="mt-5">
            <p className="text-sm">What would you like to start creating?</p>
            <ul className="grid grid-cols-4 gap-2 mt-3 text-xs text-center">
              {category.map((cat, index) => (
              <li key={index} className="w-full">
                <CheckBox
                onToggle={() => handleToggle(index)}
                isActive={isActiveIndex === index}
                title={cat}
              />
              </li>
              ))}
            </ul>
          </div>
        </div>
        <button className="mt-8 bg-purple-400 px-8 py-3 rounded font-bold cursor-pointer hover:bg-purple-300">Start For Free</button>
        <p className="text-gray-400 text-xs mt-1">*No credit card needed. Free plan available.</p>
      </div>
    </div>
  );
};
