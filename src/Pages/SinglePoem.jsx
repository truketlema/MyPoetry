import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function SinglePoem() {
  const { id } = useParams();
  const [poem, setPoem] = useState(null);

  useEffect(() => {
    const fetchPoem = async () => {
      try {
        const docRef = doc(db, "Writings", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPoem(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching poem:", error);
      }
    };
    fetchPoem();
  }, [id]);

  if (!poem) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-[#f2f2f2] p-10 font-playfair">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4">{poem.title || "Untitled"}</h1>
        <p className="text-lg text-gray-700 whitespace-pre-line">
          {poem.content || "No content found"}
        </p>
      </div>
    </div>
  );
}
