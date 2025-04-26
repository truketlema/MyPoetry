import { Typewriter } from "react-simple-typewriter";
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
  return (
    <div className="home text-white font-bold overflow-hidden font-cormorant">
      <div className="absolute ">
        <Header className="" />
      </div>

      <div
        className=" container1 h-screen flex items-center justify-center text-4xl bg-gradient-to-r from-black to-[#517494] overflow-hidden shadow-2xl
       "
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
        <h1 className="absolute z-10 top-80 pt-5 font-dancingScript">
          <Typewriter
            words={["Here my world starts."]}
            loop={1}
            typeSpeed={80}
            deleteSpeed={0}
            delaySpeed={200}
          />
        </h1>
        <div className="container2 max-md:absolute items-end pl-96  ">
          <img src={butterfly} className="w-[600px]" alt="" />
        </div>
      </div>
      {/* <div className="items-center justify-center flex flex-col gap-10 py-20">
        <img src={writer} className=" " alt="" />
      </div> */}
      <div
        className="container2 items-center justify-center px-20  pt-28  flex flex-row  bg-[#c7c7c7] font-playfair 
      "
      >
        <img src={leaves} className=" w-40" alt="" />
        <div className="flex flex-col gap-10 px-10">
          <div className="flex flex-col gap-2 ">
            <h1 className="text-3xl font-bold">Wander Through My Words</h1>
            <p className="text-lg">
              Here lies a collection of verses, pieces of my heart etched into
              rhythm and rhyme. Each path below leads you to a world of emotions
              I've wrapped in poetry. Dive in.
            </p>
          </div>

          <div className="flex flex-row  gap-10 text-2xl font-bold text-black font-dancingScript">
            <div>
              <Link to="/overview" className="">
                Spritual
              </Link>
            </div>
            <div>
              {" "}
              <Link to="/overview">Romance</Link>
            </div>
            <div>
              {" "}
              <Link to="/overview">Feelings</Link>
            </div>
            <div>
              <Link to="/overview">All in one</Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" container2 items-center justify-center flex flex-col gap-10   bg-[#c7c7c7]">
        <img src={writer} className=" " alt="" />
      </div>
      <div className="min-h-screen container3 overflow-hidden flex flex-col gap-10">
        <div className=" text-black flex flex-col md:flex-row">
          <div className="md:w-1/2    items-center  flex flex-col gap-5  font-playfair ">
            {" "}
            <div>
              <h1 className="text-3xl font-bold text-center pt-10 font-playfair">
                The Fractured Beauty of Writing
              </h1>
            </div>
            <div className=" items-center justify-center flex flex-col gap-5 font-playfair ">
              {" "}
              <h1 className="items-center justify-center flex flex-col gap-10 font-playfair">
                {" "}
                Poetry is a rib
              </h1>
              <p className="items-center justify-center flex flex-col gap-10 font-playfair">
                silent but sacred, <br />
                the bone that cradles the soul’s unrest. <br /> Dostoevsky
                carved his ache into it, <br />
                each word a fracture of truth, <br /> each line a cage for the
                screaming heart.{" "}
              </p>
              <p className="items-center justify-center flex flex-col gap-10 font-playfair">
                {" "}
                In the quiet of ink and paper, <br /> we find our own ribs,{" "}
                <br />
                the hidden chambers of our being, <br /> where the poetry of
                life breathes. <br /> It is a rib, a silent witness to our
                existence.
                <br /> It is a rib, a testament to our fragility. <br /> It is a
                rib,
              </p>
              <p className=" absolute text-lg px-10 pt-96 mt-14 font-dancingScript  ">
                “Poetry is, after all, only nonsense and justifies what would be
                considered impudence if written in prose.” — Fyodor Dostoevsky,
                Demons
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2  items-center justify-center px-10 py-10 font-playfair md:w-1/2  ">
            <p className="absolute text-lg font-dancingScript  -rotate-[-60deg]">
              “As for me, this is my story: I worked and was tortured. You know
              what it means to compose? No, thank God, you do not! I believe you
              have never written to order, by the yard, and have never
              experienced that hellish torture.” — Fyodor Dostoevsky
            </p>
            <img src={dosto1} alt="" className="" />

            <img src={rib} alt="" />
            <img src={write} alt="" className="" />
            <div className="flex items-center justify-center flex-col font-cormorant ">
              {" "}
              <img src={virginiawolf} alt="" />
              <p className="">virginia woolf</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container4 relative min-h-screen  md:grid-cols-[1fr_2fr_1fr] grid xl:grid-cols-[1fr_2fr_2fr_2fr_1fr]  text-gray-900 text-xs overflow-hidden "
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/billie-holiday.png')`,
          backgroundBlendMode: "overlay",

          backgroundSize: "auto, cover",
        }}
      >
        <img src={loveis} alt="" className="absolute pt-2" />

        <div className=" hidden md:block">
          <p className="font-serif  italic blur-xs absolute   -left-20 leading-relaxed ">
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
            {" "}
            For your return{" "}
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
        <div className="hidden xl:block">
          <p className="font-serif  blur-xxxs leading-relaxed italic">
            me.In a quiet place,the birdsong filled the air,while a gentle
            breeze embranced my face with soothing touch.I was lost in a thought
            of the day you've rescued me,the day we've met. We loved, we lived,
            we laughed, and we wept together.Having you by my side was the
            biggest paradise. You were the lover of my soul,the one who remained
            beside me through all the situations. You kept me alive, even
            through the moment of madness.
          </p>
          <img src={read} alt="" className="absolute w-64 ml-16" />
        </div>
        <div className="hidden xl:block ">
          <p className="font-serif italic blur-xxs leading-relaxed px-3">
            You've been a shoulder to cry on,the heaven i seek refuge in,the
            home i always run to.In a quiet place and serene day,while i was
            rushing to flee from my heart,I was lost in a thought of the day
            you've met me. But I'm lost again,blinded to see your presence.Only
            your love can rescue me now,making me whole again.Remind me of my
            worth,and awaken the strength within.Am I worth the fight? Will you
            lift me up again? <br />
            -Avril
          </p>
          <p className="text-4xl absolute pt-2 -rotate-[-12deg] text-red-900">
            "Poetry is the breath of the soul."
          </p>
          <img src={lili2} alt="" className="absolute" />
        </div>
        <div className=" hidden md:block">
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
        <div className=" hidden md:block">
          <p className="font-serif italic blur-xs  absolute   -left-20 leading-relaxed">
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
            {" "}
            Escaping Echoes
          </h1>
          <p className="font-serif  italic blur-xxs leading-relaxed px-3">
            Darkness has never frightened me, although I've always despised it.
            But now, fear consumes me, not because the darkness intensifies, nor
            because a guiding light appears, but because I'm losing myself to
            you.
          </p>
          {/* virginia woolf */}
          <img src={dosto} alt="" className="absolute pt-8 w-[13%] blur-xxxs" />
          <p className="  text-2xl font-bold font-dancingScript pt-8 pl-40 ">
            “To live without hope is to cease to live.” – Dostoevsky
          </p>
          {/* <p className="absolute text-9xl">❌</p> */}
        </div>
        <div className="hidden xl:block ">
          <h1 className="blur-xxs leading-relaxed font-bold text-xl text-center pt-4">
            {" "}
            I see you{" "}
          </h1>
          <p className="font-serif  italic blur-xxxs leading-relaxed pl-4">
            I see you in every dream of my night,
            <br />
            In every rainbow of my ignite. <br />
            In the beauty of the moon, <br />
            In a shadowed afternoon. <br />
            In a thought of not being enough, <br />
            When the day is eagerly tough. <br /> <br />
            I see you, like a daily nightmare; <br />
            Your spirit is everywhere. <br />
            I drown in a jealous river, <br />
            Where every piece of you for me is a mirror— <br />
            A mirror to my conquered soul, <br />
            To show me the little me is all. <br />
            The unloved me is more, <br />
            The ugly me is full and whole. <br />
            I see you on my saddest day;
            <br />
            ...
          </p>
          {/* <p className="text-4xl absolute">
            "The poet’s mission is to bring the heart of the reader to life, to
            awaken his feelings, to make him aware of the great depths of the
            soul."
          </p> */}
          <p className="text-4xl absolute -rotate-12 text-[#517494]">
            “Hope is the thing with feathers that perches in the soul.” — Emily
            Dickinson
          </p>
        </div>
        <div className=" hidden xl:block">
          <h1 className="blur-xxs leading-relaxed font-bold text-xl text-center pt-4">
            {" "}
            unspoken desire
          </h1>
          <p className="font-serif  italic blur-xxs leading-relaxed px-3">
            you were quiet, in the hush of that moment you adored my verses with
            a whispered praises, each compliment of our shared admiration. your
            smile bloomed like a delicate flower, remember? the day I've noticed
            you. your words flowed smoothly, like a calm river, with their
            peaceful melody. In the quiet of the night, as I lay in my bed and
            closed my eyes, i remembered the little sparkle and peace I felt for
            a moment. Days went buy, yet the sparkles remained. your red eyes,
            flushed with lack of sleep. i was vanished in a thought, as if
            you've cast a spell over my mind. You admired the moon with a smile,
            and I couldn't help but feel a bit envious. Your voice echoes in my
            head, I seek you out in every place i find myself.
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
          <p className="font-serif  italic blur-xs absolute   -left-20 leading-relaxed">
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
        <div className=" hidden xl:block">
          <p className="font-serif  italic blur-xxxs leading-relaxed pt-8">
            Far from the land carrying me along,
            <br />
            A clouded sky with a bird-filled song, <br />
            In silent thought and a peaceful heart,
            <br />
            Until I see once again through your red eyes. <br />
            I secretly wished to roam across your mind. <br />
          </p>
        </div>
        <div className="hidden xl:block ">
          <p className="font-serif  italic blur-xxs leading-relaxed px-3">
            my heart races whenever you're near, as if I'm loosing control. I
            wish for your gaze, but not too intense, for fear you might see my
            mess. <br />
            <br />
            Trying to provoke you, Seeking your attention, yet avoiding eye
            contact. Walking by your side, longing to touch your hands, yet
            searching for another topic to discuss.
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
