import { Typewriter } from "react-simple-typewriter";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

import myblueworld from "../assets/myblueworld.png";
import Header from "../components/header";
import leaves from "../assets/leaves.svg";
import butterfly from "../assets/butterfly.svg";
import { Link } from "react-router-dom";
import loveis from "../assets/loveis.png";
import writer from "../assets/writer.svg";
import Footer from "../components/Footer";
import dosto1 from "../assets/dosto1.png";
import rib from "../assets/rib.png";
import write from "../assets/write.png";
import virginiawolf from "../assets/virginialwolf.png";
import dosto from "../assets/dosto.png";
import blind from "../assets/blind.png";
import read from "../assets/read.png";
import lili2 from "../assets/lili2.png";

export default function Home() {
  const navigate = useNavigate();

  // ✅ simplified - removed redirect to signup
  const handleProtectedRoute = (path) => {
    navigate(path);
  };

  return (
    <div className="home text-white font-bold overflow-hidden font-cormorant">
      <div className="absolute ">
        <Header className="" />
      </div>

      <div
        className=" container1 h-screen flex items-center justify-center text-4xl bg-gradient-to-r from-black to-[#517494] overflow-hidden shadow-2xl"
        style={{
          backgroundImage: `
          url('https://www.transparenttextures.com/patterns/binding-dark.png'),
          linear-gradient(to right, black, #517494)
        `,
          backgroundBlendMode: "overlay",
          backgroundSize: "auto, cover",
        }}
      >
        <img
          src={myblueworld}
          alt="My Blue World"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none z-0 top-24 "
        />
        <h1 className="absolute z-10 top-80 md:pt-5 pt-10 font-dancingScript">
          <Typewriter
            words={["Here my world starts."]}
            loop={1}
            typeSpeed={80}
            deleteSpeed={0}
            delaySpeed={200}
          />
        </h1>
        <div
          className="
    container2 
    max-md:absolute max-md:top-24 max-md:left-8 max-md:pl-6
    pl-48
    items-end
  "
        >
          <img
            src={butterfly}
            className="w-[600px] max-md:w-[280px]"
            alt="butterfly"
          />
        </div>
      </div>

      <div className="container2 items-center justify-center px-20  pt-28  flex flex-row  bg-[#c7c7c7] font-playfair">
        <img src={leaves} className=" w-24 md:w-40 pl-4" alt="" />
        <div className="flex flex-col gap-10 px-5">
          <div className="flex flex-col gap-2  text-black ">
            <h1 className="text-xl md:text-3xl font-bold">
              Wander Through My Words
            </h1>
            <p className="text-sm md:text-lg  lg:text-xl">
              Here lies a collection of verses, pieces of my heart etched into
              rhythm and rhyme. Each path below leads you to a world of emotions
              I've wrapped in poetry. Dive in.
            </p>
          </div>

          <div className="flex flex-row gap-5 md:gap-10 text-lg md:text-2xl font-bold text-black font-dancingScript">
            <div>
              <button onClick={() => handleProtectedRoute("/spritual")}>
                Spritual
              </button>
            </div>
            <div>
              <button onClick={() => handleProtectedRoute("/romance")}>
                Romance
              </button>
            </div>
            <div>
              <button onClick={() => handleProtectedRoute("/feelings")}>
                Feelings
              </button>
            </div>
            <div className="hidden md:block">
              <button onClick={() => handleProtectedRoute("/overview")}>
                All in one
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container2 items-center justify-center flex flex-col gap-10   bg-[#c7c7c7]">
        <img src={writer} className=" " alt="" />
      </div>

      <div className="min-h-screen container3 overflow-hidden flex flex-col gap-10">
        <div className=" text-black flex flex-col md:flex-row">
          <div className="md:w-1/2 items-center flex flex-col gap-5 font-playfair">
            <div>
              <h1 className="text-3xl font-bold text-center pt-10 font-playfair">
                The Fractured Beauty of Writing
              </h1>
            </div>
            <div className="items-center justify-center flex flex-col gap-5 font-playfair">
              <h1 className="items-center justify-center flex flex-col gap-10 font-playfair">
                Poetry is a rib
              </h1>
              <p className="items-center justify-center flex flex-col gap-10 font-playfair">
                silent but sacred, <br />
                the bone that cradles the soul’s unrest. <br /> Dostoevsky
                carved his ache into it, <br />
                each word a fracture of truth, <br /> each line a cage for the
                screaming heart.
              </p>
              <p className="items-center justify-center flex flex-col gap-10 font-playfair">
                In the quiet of ink and paper, <br /> we find our own ribs,{" "}
                <br />
                the hidden chambers of our being, <br /> where the poetry of
                life breathes. <br /> It is a rib, a silent witness to our
                existence. <br /> It is a rib, a testament to our fragility.{" "}
                <br /> It is a rib,
              </p>
              <p className="absolute text-lg px-10 pt-96 mt-14 font-dancingScript">
                “Poetry is, after all, only nonsense and justifies what would be
                considered impudence if written in prose.” — Fyodor Dostoevsky,
                Demons
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2  items-center justify-center px-10 py-10 font-playfair md:w-1/2">
            <p className="absolute text-lg font-dancingScript  -rotate-[-60deg]">
              “As for me, this is my story: I worked and was tortured. You know
              what it means to compose? No, thank God, you do not! I believe you
              have never written to order, by the yard, and have never
              experienced that hellish torture.” — Fyodor Dostoevsky
            </p>
            <img src={dosto1} alt="" className="" />

            <img src={rib} alt="" />
            <img src={write} alt="" className="" />
            <div className="flex items-center justify-center flex-col font-cormorant">
              <img src={virginiawolf} alt="" />
              <p className="">virginia woolf</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container4 relative  min-h-screen  md:grid-cols-[1fr_2fr_1fr] grid  text-gray-900 text-xs overflow-hidden "
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/billie-holiday.png')`,
          backgroundBlendMode: "overlay",
          backgroundSize: "auto, cover",
        }}
      >
        <img src={loveis} alt="" className="absolute pt-2" />

        <div className="hidden md:block">
          <p className="font-serif  italic blur-xs relative  -left-20 leading-relaxed ">
            "Poetry is the soul whispering... <br /> A broken thought rebuilt in
            rhythm. <br />
            lorem ipsum dolor sit amet consectet <br />
            ur adipisicing elit. Quisquam, <br /> voluptatibus! A broken thought
            rebu <br />
            ilt in rhythm. lorem ipsum dolor "
          </p>
        </div>

        <div className=" ">
          <h1 className="blur-xxs leading-relaxed font-bold text-xl text-center">
            For your return
          </h1>
          <p className="font-serif italic blur-xxs leading-relaxed px-3">
            The space was quiet,but my mind was too loud,thoughts echoed
            relentlessly. i was lost in a thought of the day you've met me,the
            when you rescued me.At my lowest,when weariness was heavy,and i was
            unable to see the brightest side,as the darkness intensifies,it was
            the day you came across and sat with me.You found me broken, yet you
            crafted something beautiful out of the pieces.your smile,beacon in
            the storm,and you gifted me with that smile that lingered with
          </p>
          <p className="text-4xl  absolute text-[#517494] ">
            Verses born from heartache
          </p>
        </div>

        <div className="hidden md:block">
          <p className="font-serif  italic blur-xs leading-relaxed">
            "Poetry is the soul whispering... <br /> A broken thought rebuilt in
            rhythm. <br />
            lorem ipsum dolor sit amet consectet <br />
            ur adipisicing elit. Quisquam, <br /> voluptatibus! A broken thought
            rebu <br />
            ilt in rhythm. lorem ipsum dolor "
          </p>
          <img src={blind} alt="" className="absolute " />
          <img src={blind} alt="" className="absolute pt-4" />
        </div>
        <div className="hidden md:block">
          <p className="font-serif italic blur-xs  relative   -left-20 leading-relaxed">
            "A broken thought rebuilt in rhythm. <br /> "A broken thought
            rebuilt in rhythm. <br /> lorem ipsum dolor sit amet consectet{" "}
            <br />
            ur adipisicing elit. Quisquam, volup <br />
            tatibus! Lorem ipsum dolor sit amet <br />
            consectetur <br /> adipisicing elit. Quisquam, volupta <br />
            tibus!" "A broken thought rebuilt in <br />
            rhythm. lorem ipsum dolor sit amet <br /> consectetur adipisicing
            elit. Quisqua <br />
            m, voluptatibus!"
          </p>
        </div>

        <div className=" ">
          <h1 className="blur-xxs leading-relaxed font-bold text-xl text-center pt-4">
            Escaping Echoes
          </h1>
          <p className="font-serif  italic blur-xxs leading-relaxed px-3">
            Darkness has never frightened me, although I've always despised it.
            But now, fear consumes me, not because the darkness intensifies, nor
            because a guiding light appears, but because I'm losing myself to
            you.
          </p>

          <img
            src={dosto}
            alt=""
            className="absolute pt-8 w-[35%] sm:w-[25%] md:w-[17%] lg:w-[15%] blur-xxxs"
          />
          <p className="  text-2xl font-bold font-dancingScript pt-16 pl-52 pr-2 md:pl-40 ">
            “To live without hope is to cease to live.” – Dostoevsky
          </p>
        </div>

        <div className="hidden md:block ">
          <p className="font-serif  italic     blur-xs  leading-relaxed ">
            "Lines that never bleed out. <br /> "A broken thought rebuilt in
            rhythm. lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatibus!
            <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatibus!" "A broken thought rebuilt in rhythm. lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatibus! "A broken thought rebuilt in rhythm. lorem ipsum dolor
            "
          </p>
        </div>

        <div className="hidden md:block ">
          <p className="font-serif  italic blur-xs relative   -left-20 leading-relaxed">
            "Poetry is the soul whispering... <br /> A broken thought rebuilt in
            rhythm. <br />
            lorem ipsum dolor sit amet consectet <br />
            ur adipisicing elit. Quisquam, <br /> voluptatibus! A broken thought
            rebu <br />
            ilt in rhythm. lorem ipsum dolor "
          </p>
        </div>
        <div className=" ">
          <h1 className="blur-xxs leading-relaxed font-bold text-xl text-center pt-4">
            Accross your mind
          </h1>
          <p className="font-serif  italic blur-xxs leading-relaxed text-center">
            Lying on my back,
            <br />
            Leaning against the ground,
            <br />
            Looking at the moon <br />
            In a drizzle drowned.
            <br />
            ...
          </p>
        </div>

        <div className=" hidden md:block">
          <p className="font-serif  italic blur-xs  left-[1110px] w-[180px] leading-relaxed">
            "Lines that never bleed out. "A broken thought rebuilt in rhythm.
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatibus!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
