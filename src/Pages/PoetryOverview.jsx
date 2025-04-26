import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import { ImPushpin } from "react-icons/im";

import Header from "../components/header";
import { Link } from "react-router-dom";
import feelings1 from "../assets/feelings1.jpg";
import feelings2 from "../assets/feelings2.webp";
import feelings3 from "../assets/feelings3.jpg";
import feelings4 from "../assets/feelings4.jpg";
import feelings5 from "../assets/feelings5.jpg";
import feelings6 from "../assets/feelings6.jpg";
import feelings7 from "../assets/feelings7.jpg";
import feelings8 from "../assets/feelings8.jpg";
import feelings9 from "../assets/feelings9.jpg";
import feelings10 from "../assets/feelings10.webp";
import feelings11 from "../assets/feelings11.jpg";
import spr from "../assets/spr.jpg";
import romance1 from "../assets/romance1.jpg";
import romance2 from "../assets/romance2.jpg";
import romance3 from "../assets/romance3.jpg";
import romance4 from "../assets/romance4.jpg";
import romance5 from "../assets/romance5.jpg";
import romance6 from "../assets/romance6.jpg";
import romance7 from "../assets/romance7.jpg";
import romance8 from "../assets/romance8.jpg";
import spritual2 from "../assets/spritual2.jpg";
import spritual3 from "../assets/spritual3.jpg";
import spritual4 from "../assets/spritual4.jpg";
import spritual5 from "../assets/spritual5.jpg";
import spritual6 from "../assets/spritual6.jpg";
import spritual7 from "../assets/spritual7.jpg";
import spritual8 from "../assets/spritual8.jpg";
import spritual9 from "../assets/spritual9.jpg";

export default function PoetryOverview() {
  const [showAllSpiritual, setShowAllSpiritual] = useState(false);
  const [showAllRomance, setShowAllRomance] = useState(false);
  const [showAllFeelings, setShowAllFeelings] = useState(false);

  const SpritualCards = [
    {
      image: spr,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: spritual2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: spritual8,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: spritual4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: spritual5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: spritual6,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: spritual7,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: spritual9,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  const RomanceCards = [
    {
      image: romance1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: romance2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: romance3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: romance4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: romance5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: romance6,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: romance7,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: romance8,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  const FeelingsCards = [
    {
      image: feelings1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: feelings7,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: feelings8,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: feelings5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: feelings11,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: feelings6,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: feelings2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: feelings3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: feelings9,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: feelings10,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: feelings4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  const pushPinColors = [
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-yellow-500",
    "text-purple-500",
    "text-orange-500",
  ];

  const VisibleCards = showAllSpiritual
    ? SpritualCards
    : SpritualCards.slice(0, 4);
  const VisibleRomanceCards = showAllRomance
    ? RomanceCards
    : RomanceCards.slice(0, 4);
  const VisibleFeelingsCards = showAllFeelings
    ? FeelingsCards
    : FeelingsCards.slice(0, 4);

  return (
    <div className="bg-[#c7c7c7] font-playfair ">
      <Header />
      <div className="min-h-screen   overflow-hidden shadow-2xl bg-[#c7c7c7]">
        <div className="flex flex-col items-center justify-center font-playfair pt-10">
          <h1 className="text-3xl font-bold">Ink-Stained Emotions</h1>
          {/* 🆕 Typewriter Quotes */}
          <div className="text-center mt-4 text-xl">
            <Typewriter
              words={[
                "Each verse is a reflection of a feeling I dared to name.",
              ]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={0}
              delaySpeed={200}
            />
          </div>
        </div>

        <div className="poetry-categories text-lg gap-10 pt-10 font-bold text-black  sm:px-5 ">
          <div className="Spritual h-full ">
            <h1 className="text-2xl pb-5 font-dancingScript ">Spiritual</h1>
            <div className="   columns-2 md:columns-3 lg:columns-4   items-center justify-center ">
              {VisibleCards.map((SpritualCard, index) => (
                <div
                  key={index}
                  className="relative hover:scale-95 transition duration-300 transform break-inside-avoid"
                  style={{ marginBottom: "10px" }}
                >
                  <img
                    src={SpritualCard.image}
                    alt=""
                    className="object-contain rounded  max-w-full "
                  />
                  <p className="absolute inset-0 flex items-center justify-center text-white text-sm bg-black bg-opacity-40 p-4 rounded">
                    {SpritualCard.text}
                  </p>
                  <ImPushpin
                    className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rotate-[-15deg] shadow-lg text-[#517494] ${pushPinColors[index]}`}
                  />

                  <Link to="/poetry">
                    <button className="px-4  py-2 font-dancingScript hover:scale-105 transition duration-300 rounded transform mb-2">
                      Read more
                    </button>
                  </Link>
                </div>
              ))}
            </div>
            <div className="pt-5">
              <button
                className="bg-[#517494] text-white px-8 py-2 rounded hover:bg-[#415b71] transition duration-300"
                onClick={() => setShowAllSpiritual(!showAllSpiritual)}
              >
                {showAllSpiritual ? "View Less" : "Show All"}
              </button>
            </div>
          </div>

          <div className="Romance mt-10">
            <h1 className="text-2xl pb-5 font-dancingScript">Romance</h1>
            <div className="columns-2 md:columns-3 lg:columns-4 items-center justify-center">
              {VisibleRomanceCards.map((RomanceCard, index) => (
                <div
                  key={index}
                  className="relative hover:scale-95 transition duration-300 transform- break-inside-avoid"
                  style={{ marginBottom: "10px" }}
                >
                  <img
                    src={RomanceCard.image}
                    alt=""
                    className=" object-contain rounded max-w-full "
                  />
                  <p className="absolute inset-0 flex items-center justify-center text-white text-sm bg-black bg-opacity-40 p-4 rounded">
                    {RomanceCard.text}
                  </p>
                  <ImPushpin
                    className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rotate-[-15deg] shadow-lg text-[#517494] ${pushPinColors[index]}`}
                  />
                  <Link to="/poetry">
                    <button className="px-4 py-2 font-dancingScript hover:scale-105 transition duration-300 rounded transform ">
                      Read more
                    </button>
                  </Link>
                </div>
              ))}
            </div>
            <div className="pt-5">
              <button
                className="bg-[#517494] text-white px-8 py-2 rounded hover:bg-[#415b71] transition duration-300"
                onClick={() => setShowAllRomance(!showAllRomance)}
              >
                {showAllRomance ? "View Less" : "Show All"}
              </button>
            </div>
          </div>

          <div className="Feelings mt-10">
            <h1 className="text-2xl pb-5 font-dancingScript">Feelings</h1>
            <div className="columns-2 md:columns-3 lg:columns-4  items-center justify-center">
              {VisibleFeelingsCards.map((FeelingCard, index) => (
                <div
                  key={index}
                  className="relative hover:scale-95 transition duration-300 transform break-inside-avoid"
                  style={{ marginBottom: "10px" }}
                >
                  <img
                    src={FeelingCard.image}
                    alt=""
                    className=" object-contain rounded max-w-full "
                  />
                  <p className="absolute inset-0 flex items-center justify-center  text-white text-sm bg-black bg-opacity-40 p-4 rounded">
                    {FeelingCard.text}
                  </p>
                  <ImPushpin
                    className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rotate-[-15deg] shadow-lg text-[#517494] ${pushPinColors[index]}`}
                  />
                  <Link to="/poetry">
                    <button className="px-4 py-2 font-dancingScript hover:scale-105 transition duration-300 rounded transform ">
                      Read more
                    </button>
                  </Link>
                </div>
              ))}
            </div>
            <div className="pt-5">
              <button
                className="bg-[#517494] text-white px-8 py-2 rounded hover:bg-[#415b71] transition duration-300"
                onClick={() => setShowAllFeelings(!showAllFeelings)}
              >
                {showAllFeelings ? "View Less" : "Show All"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
