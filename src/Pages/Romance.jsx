import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect } from "react";
import { ImPushpin } from "react-icons/im";
import Header from "../components/header";
import { Link, useNavigate } from "react-router-dom";
import spr from "../assets/spr.jpg"; // fallback image
import { collection, query, where, getDocs } from "firebase/firestore";
import { db, auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function Spiritual() {
  const [showAll, setShowAll] = useState(false);
  const [poems, setPoems] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const pushPinColors = [
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-yellow-500",
    "text-purple-500",
    "text-orange-500",
  ];

  useEffect(() => {
    const fetchPoems = async () => {
      const q = query(
        collection(db, "Writings"),
        where("category", "==", "Spritual")
      );
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title || "Untitled",
        content: doc.data().content || "No content found",
        image: doc.data().image || spr,
      }));
      setPoems(data);
    };
    fetchPoems();

    // Watch for auth state changes
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/"); // redirect to home after logout
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const visiblePoems = showAll ? poems : poems.slice(0, 12);

  return (
    <div className="bg-[#c7c7c7] font-playfair">
      <Header />
      <div className="min-h-screen overflow-hidden shadow-2xl bg-[#c7c7c7]">
        <div className="flex flex-col items-center justify-center pt-10">
          <h1 className="text-3xl font-bold">Ink-Stained Emotions</h1>
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
            <h1 className="text-2xl pb-5 font-dancingScript">Spiritual</h1>
            <div className="columns-2 md:columns-3 lg:columns-4">
              {visiblePoems.map((poem, index) => (
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
                    {poem.title || "Untitled"} <br />
                    <br />
                    {poem.content?.slice(0, 100) || "No preview available"}
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
              ))}
            </div>
            <div className="pt-5 flex justify-center gap-4">
              <button
                className="bg-[#517494] text-white px-8 py-2 rounded hover:bg-[#415b71] transition duration-300"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "View Less" : "Show All"}
              </button>
              {user && (
                <button
                  onClick={handleLogout}
                  className="text-white bg-red-600 hover:bg-red-700 px-6 py-2 rounded transition duration-300 font-dancingScript"
                >
                  Log out
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
