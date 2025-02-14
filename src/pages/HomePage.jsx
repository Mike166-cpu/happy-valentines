import React, { useState, useEffect } from "react";
import valentinesImage from "../assets/stars-remove-bg.png"; // Adjust the path as necessary
import "./HomePage.css"; // Import the CSS file for custom fonts and animations
import kisses from "../assets/kisses-removebg-preview.png"; // Adjust the path as necessary

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const difference = +new Date("2026-01-01") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null;
    }

    return (
      <div
        key={interval}
        className="flex flex-col items-center mx-2 bg-white/30 backdrop-blur-sm rounded-lg p-3 min-w-[80px] shadow-lg"
      >
        <span className="text-2xl font-bold text-white">
          {timeLeft[interval]}
        </span>
        <span className="text-sm text-white/80 capitalize">{interval}</span>
      </div>
    );
  });

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseButtonClick = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-screen bg-pink-300 flex items-center justify-center flex-col relative p-4">
      <img
        src={valentinesImage}
        alt="Valentine's Image"
        className="mb-4 absolute z-0 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
      />
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center fonti typing-animation z-10">
        Happy Valentines Day Mi Amor
      </h1>
      <button
        onClick={handleButtonClick}
        className="mt-10 bg-white rounded-4xl p-4 z-20 cursor-pointer relative"
      >
        Click to open the message
      </button>
      {isModalOpen && (
        <>
          <div className="overlay z-30"></div>
          <div className="modal z-40 p-6 sm:p-8 md:p-10 lg:p-12 relative">
            <button
              onClick={handleCloseButtonClick}
              className=" top-4 right-4 bg-red-400 text-xs p-2 rounded cursor-pointer"
            >
              Close
            </button>
            <div className="envelope">
              
              <div className="envelope-flap"></div>
              <div className="envelope-body delius-regular font-semibold flex flex-col">
                {/*add the kisses image as background inside the paragraph*/}
                <p className="text-justify text-border-white">
                  Hello my Love! happy valentines to my beautiful girl, i just
                  wanted you to know that i love you so much more than you
                  think, I am so thankful that you came into my life, thank you,
                  for always making me happy, Sorry, if sometimes i do
                  overthinking, i am sorry if sometimes i act immature, i am
                  sorry if sometimes i think negative. I'm always here to
                  support you in every chanllenges in your life and i will
                  promise that i will never broke your heart and your trust, i
                  am looking forward to for the day we are going to met maybe in
                  few years or less, I am so lucky to have you in my life, let's
                  cheries every moment that we have, I love you so much
                  Elizabeth, My Everything.
                </p>
                <p className="signature">-Mike</p>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="mt-10 text-center z-20">
        <h2 className="text-2xl font-bold mb-4 text-white drop-shadow-lg">
          Countdown to our Anniversary
        </h2>
        <div className="flex justify-center items-center">
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
