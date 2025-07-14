import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function SinglePoem() {
  const { id } = useParams();
  const [poem, setPoem] = useState(null);

  const auth = getAuth();
  const [user, setUser] = useState(null);

  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    const fetchPoem = async () => {
      try {
        const docRef = doc(db, "Writings", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setPoem(data);

          const poemLikes = data.likes || [];
          setLikes(poemLikes);
          setHasLiked(user ? poemLikes.includes(user.uid) : false);

          const fetchedComments = data.comments || [];
          setComments(fetchedComments);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching poem:", error);
      }
    };

    if (id) {
      fetchPoem();
    }
  }, [id, user]);

  const handleLike = async () => {
    if (!user) {
      navigate("/login", { state: { from: location.pathname } });
      return;
    }

    const poemRef = doc(db, "Writings", id);

    try {
      if (hasLiked) {
        await updateDoc(poemRef, {
          likes: arrayRemove(user.uid),
        });
        setLikes((prev) => prev.filter((uid) => uid !== user.uid));
        setHasLiked(false);
      } else {
        await updateDoc(poemRef, {
          likes: arrayUnion(user.uid),
        });
        setLikes((prev) => [...prev, user.uid]);
        setHasLiked(true);
      }
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };

  const handleAddComment = async () => {
    if (!user) {
      navigate("/login", { state: { from: location.pathname } });
      return;
    }

    if (!commentText.trim()) {
      alert("Comment cannot be empty.");
      return;
    }

    const newComment = {
      author: user.email || "Anonymous",
      text: commentText.trim(),
      createdAt: new Date().toISOString(),
    };

    const poemRef = doc(db, "Writings", id);

    try {
      await updateDoc(poemRef, {
        comments: arrayUnion(newComment),
      });
      setComments((prev) => [...prev, newComment]);
      setCommentText("");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  if (!poem) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div
      className="h-screen bg-gradient-to-t from-white to-[#517494] px-10 font-playfair text-center"
      style={{
        backgroundImage: `
          url('https://www.transparenttextures.com/patterns/binding-dark.png'),
          linear-gradient(to top, white, #517494)
        `,
        backgroundBlendMode: "overlay",
        backgroundSize: "auto, cover",
      }}
    >
      <div
        className="h-screen max-w-3xl p-8 mx-auto"
        style={{
          backgroundImage: `
          url('https://www.transparenttextures.com/patterns/binding-dark.png'),
          linear-gradient(to top, white, #517494)
        `,
          backgroundBlendMode: "overlay",
          backgroundSize: "auto, cover",
        }}
      >
        <h1 className="text-3xl font-bold mb-4">{poem.title || "Untitled"}</h1>
        <p className="text-lg whitespace-pre-line text-left">
          {poem.content || "No content found"}
        </p>

        {/* Buttons container with padding-bottom for spacing */}
        <div className="mt-8 flex justify-start space-x-4 mb-4 pb-12">
          <button
            onClick={handleLike}
            className={`px-4 py-2 rounded ${
              hasLiked ? "bg-red-500 text-white" : "bg-gray-300 text-black"
            }`}
          >
            💙 {likes.length}
          </button>
          <button
            onClick={() => setShowComments((prev) => !prev)}
            className="px-4 py-2 rounded bg-gray-300 text-black flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline-block mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8-1.412 0-2.739-.293-3.906-.823L3 21l1.793-3.707A8.959 8.959 0 0 1 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Comment
          </button>

          {user && (
            <button
              onClick={async () => {
                await auth.signOut();
                navigate("/");
              }}
              className="px-4 py-2 rounded bg-gray-300 text-black"
            >
              Logout
            </button>
          )}
        </div>

        {showComments && (
          <div className="mt-10 text-left ">
            <h2 className="text-2xl font-semibold mb-4">Comments</h2>

            {comments.filter((c) => c && c.text && c.author && c.createdAt)
              .length === 0 && (
              <p className="text-gray-600">No comments yet. Be the first!</p>
            )}

            <ul className="space-y-4 mb-6">
              {comments
                .filter((c) => c && c.text && c.author && c.createdAt)
                .map((comment, index) => (
                  <li key={index} className="p-4 bg-gray-100 rounded shadow-sm">
                    <p className="text-gray-800 font-semibold">
                      {comment.author?.split("@")[0]}
                    </p>
                    <p className="text-gray-700 mt-1 whitespace-pre-line">
                      {comment.text}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      {comment.createdAt
                        ? new Date(comment.createdAt).toLocaleString()
                        : ""}
                    </p>
                  </li>
                ))}
            </ul>

            {user && (
              <div className="space-y-4">
                <textarea
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Write a comment..."
                  rows={3}
                  className="w-full border p-2 rounded"
                />
                <button
                  onClick={handleAddComment}
                  className="bg-[#517494] text-white px-6 py-2 rounded hover:bg-white hover:text-[#517494] transition-colors"
                >
                  Post Comment
                </button>
              </div>
            )}

            {!user && (
              <p className="text-gray-600 mt-4">
                Please log in to post a comment.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
