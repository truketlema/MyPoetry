import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect } from "react";
import { ImPushpin } from "react-icons/im";
import Header from "../components/header";
import { Link } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

import fallbackImage from "../assets/feelings1.jpg"; // fallback image

export default function Feelings() {
  const [showAllFeelings, setShowAllFeelings] = useState(false);
  const [feelingsPoems, setFeelingsPoems] = useState([]);

  const pushPinColors = [
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-yellow-500",
    "text-purple-500",
    "text-orange-500",
  ];

  useEffect(() => {
    const fetchFeelings = async () => {
      try {
        const q = query(
          collection(db, "Writings"),
          where("category", "==", "Feelings")
        );
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => {
          const d = doc.data();
          return {
            id: doc.id,
            title: d.title || "Untitled",
            content: d.content || "No content found.",
            image: d.image && d.image !== "" ? d.image : fallbackImage,
          };
        });
        setFeelingsPoems(data);
      } catch (error) {
        console.error("Error fetching Feelings poems:", error);
      }
    };

    fetchFeelings();
  }, []);

  const VisibleFeelingsCards = showAllFeelings
    ? feelingsPoems
    : feelingsPoems.slice(0, 12);

  return (
    <div className="bg-[#c7c7c7] font-playfair">
      <Header />
      <div className="min-h-screen overflow-hidden shadow-2xl bg-[#c7c7c7]">
        <div className="flex flex-col items-center justify-center pt-10">
          <h1 className="text-3xl font-bold">Ink-Stained Emotions</h1>

          {/* Typewriter effect */}
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

          <div className="poetry-categories text-lg gap-10 pt-10 font-bold text-black px-5">
            <div className="Feelings mt-10">
              <h1 className="text-2xl pb-5 font-dancingScript">Feelings</h1>

              <div className="columns-2 md:columns-3 lg:columns-4 items-center justify-center">
                {VisibleFeelingsCards.length === 0 ? (
                  <p className="text-center text-gray-700">
                    No poems found in the Feelings category.
                  </p>
                ) : (
                  VisibleFeelingsCards.map((poem, index) => (
                    <div
                      key={poem.id}
                      className="relative hover:scale-95 transition duration-300 transform break-inside-avoid mb-10"
                    >
                      <img
                        src={poem.image}
                        alt={poem.title}
                        className="object-contain rounded max-w-full"
                      />
                      <p className="absolute inset-0 flex items-center justify-center text-white text-sm bg-black bg-opacity-40 p-4 rounded text-center">
                        {poem.title}
                        <br />
                        <br />
                        {poem.content.slice(0, 100)}...
                      </p>
                      <ImPushpin
                        className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rotate-[-15deg] shadow-lg text-[#517494] ${
                          pushPinColors[index % pushPinColors.length]
                        }`}
                      />

                      <Link to={`/poem/${poem.id}`}>
                        <button className="px-4 py-2 font-dancingScript hover:scale-105 transition duration-300 rounded transform mt-2">
                          Read more
                        </button>
                      </Link>
                    </div>
                  ))
                )}
              </div>

              {VisibleFeelingsCards.length > 0 && (
                <div className="pt-5">
                  <button
                    className="bg-[#517494] text-white px-8 py-2 rounded hover:bg-[#415b71] transition duration-300"
                    onClick={() => setShowAllFeelings(!showAllFeelings)}
                  >
                    {showAllFeelings ? "View Less" : "Show All"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
