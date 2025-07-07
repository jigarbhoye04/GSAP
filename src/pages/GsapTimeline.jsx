import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef,useState } from "react";

const GsapTimeline = () => {
  const yellowBox = useRef(null);
  const timelineRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useGSAP(() => {
    const timeline = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power1.inOut",
      },
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    });
    timeline.to(yellowBox.current, {
      x: 250,
      rotation: 360,
      borderRadius: "50%",
      ease: "elastic.out(1, 0.3)",
      onComplete: () => {
        console.log("Animation complete!");
      }
    })
    timeline.to(yellowBox.current,{
      x: 500,
      y: 50,
      backgroundColor: "green",
      scale: 1.5,
      rotation: 360,
      borderRadius: "0%",
      onComplete: () => {
        console.log("Second animation complete!");
      }
    })
    timeline.to(yellowBox.current,{
      y: 100,
      backgroundColor: "red",
      scale: 1.2,
      rotation: 360,
      borderRadius: "50%",
      ease: "circ.inOut",
      onComplete: () => {
        console.log("Third animation complete!");
      }
    });
    timelineRef.current = timeline;
  },[]);

  const playPauseTimeline = () => {
    if(!timelineRef.current) return;
    const timeline = timelineRef.current;
    if (timeline.paused()) {
      timeline.play();
      setIsPlaying(true);
    } else {
      timeline.pause();
      setIsPlaying(false);
    }
  };

  return (
    <main>
      <h1>GsapTimeline</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.timeline()</code> method is used to create a timeline
        instance that can be used to manage multiple animations.
      </p>

      <p className="mt-5 text-gray-500">
        The <code>gsap.timeline()</code> method is similar to the{" "}
        <code>gsap.to()</code>, <code>gsap.from()</code>, and{" "}
        <code>gsap.fromTo()</code> methods, but the difference is that the{" "}
        <code>gsap.timeline()</code> method is used to create a timeline
        instance that can be used to manage multiple animations, while the{" "}
        <code>gsap.to()</code>, <code>gsap.from()</code>, and{" "}
        <code>gsap.fromTo()</code> methods are used to animate elements from
        their current state to a new state, from a new state to their current
        state, and from a new state to a new state, respectively.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.timeline()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.timeline()
        </a>{" "}
        method.
      </p>

      <div className="mt-20 space-y-10">
        <button
          onClick={playPauseTimeline}
          className={`px-4 py-2 font-semibold rounded border border-neutral-700 ${
            isPlaying ? "bg-yellow-600" : "bg-green-800"
          }`}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>

        <div ref={yellowBox} id="yellow-box" className="w-20 h-20 bg-yellow-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTimeline;
