import React, { useEffect, useState } from "react";

interface InfoSectionProps {
  title: string;
  animation: string;
  icon: React.ReactNode; // Icon component or image
}

const InfoSection: React.FC<InfoSectionProps> = ({
  title,
  animation,
  icon,
}) => {
  const [slideX, setSlideX] = useState(0);

  // Animation: Slides left every 5 seconds, looping infinitely
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideX((prev) => (prev - 50 < -200 ? 0 : prev - 50)); // Reset position when sliding out of view
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  return (
    <div
      className="w-[20.75rem] p-4 rounded-lg flex items-center backdrop-blur-md bg-white/30 transition-transform duration-500"
      style={{ transform: `translateX(${slideX}px)` }} // Apply sliding animation
    >
      {/* Icon Section */}
      <div
        className="flex justify-center items-center backdrop-blur-md bg-white/5 w-[3.5rem] h-[3.5rem] rounded-lg mr-4"
        style={{
          animation:
            animation === "fade-in-left"
              ? "fadeIn 0.1s ease-in-out"
              : undefined,
        }}
      > 
        {icon}
      </div>

      {/* Text Section */}
      <div>
        <h3 className="text-white text-lg">{title}</h3>
      </div>
    </div>
  );
};

export default InfoSection;
