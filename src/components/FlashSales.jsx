import React, { useEffect, useMemo, useState } from "react";
import leftArrow from "../assets/svg/icons_arrow-left.svg";
import rightArrow from "../assets/svg/icons arrow-right.svg";

const MILLISECONDS_IN = {
  second: 1000,
  minute: 60 * 1000,
  hour: 60 * 60 * 1000,
  day: 24 * 60 * 60 * 1000,
};

const STORAGE_KEY = "flash_sales_deadline";

const ArrowButton = ({ direction = "left", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-[#E9E9E9] transition"
      aria-label={direction === "left" ? "Previous" : "Next"}
    >
      <img
        src={direction === "left" ? leftArrow : rightArrow}
        alt={direction}
        className="w-5 h-5"
      />
    </button>
  );
};

const TimeBox = ({ label, value }) => {
  return (
    <div className="flex flex-col items-start">
      <span className="text-[12px] text-[#909090] leading-[18px] mb-1">
        {label}
      </span>
      <span className="text-[32px] md:text-[40px] font-semibold leading-[40px] md:leading-[48px]">
        {value}
      </span>
    </div>
  );
};

const getTimeLeft = (target) => {
  const now = Date.now();
  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / MILLISECONDS_IN.day);
  const hours = Math.floor((diff % MILLISECONDS_IN.day) / MILLISECONDS_IN.hour);
  const minutes = Math.floor(
    (diff % MILLISECONDS_IN.hour) / MILLISECONDS_IN.minute
  );
  const seconds = Math.floor(
    (diff % MILLISECONDS_IN.minute) / MILLISECONDS_IN.second
  );
  return { days, hours, minutes, seconds };
};

const FlashSales = ({ onPrev = () => {}, onNext = () => {} }) => {
  const targetTime = useMemo(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const now = Date.now();
      if (stored) {
        const parsed = parseInt(stored, 10);
        if (Number.isFinite(parsed) && parsed > now) {
          return parsed;
        }
      }
      const newTarget = now + 4 * MILLISECONDS_IN.hour;
      localStorage.setItem(STORAGE_KEY, String(newTarget));
      return newTarget;
    } catch {
      return Date.now() + 4 * MILLISECONDS_IN.hour;
    }
  }, []);
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetTime));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const updated = getTimeLeft(targetTime);
      setTimeLeft(updated);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [targetTime]);

  const format = (n) => String(n).padStart(2, "0");

  return (
    <section className="w-full mt-20">
      <div className="container py-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-5 h-10 bg-[#DB4444] rounded-sm" />
          <span className="text-[#DB4444] font-semibold">Today's</span>
        </div>

        <div className="flex items-center justify-between gap-6">
          <div className="min-w-[220px]">
            <h2 className="text-[28px] md:text-[36px] font-semibold leading-[32px] md:leading-[48px]">
              Flash Sales
            </h2>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <TimeBox label="Days" value={format(timeLeft.days)} />
            <span className="text-[#DB4444] text-[28px] md:text-[32px] font-semibold mt-6">
              :
            </span>
            <TimeBox label="Hours" value={format(timeLeft.hours)} />
            <span className="text-[#DB4444] text-[28px] md:text-[32px] font-semibold mt-6">
              :
            </span>
            <TimeBox label="Minutes" value={format(timeLeft.minutes)} />
            <span className="text-[#DB4444] text-[28px] md:text-[32px] font-semibold mt-6">
              :
            </span>
            <TimeBox label="Seconds" value={format(timeLeft.seconds)} />
          </div>

          <div className="flex items-center gap-3">
            <ArrowButton direction="left" onClick={onPrev} />
            <ArrowButton direction="right" onClick={onNext} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlashSales;
