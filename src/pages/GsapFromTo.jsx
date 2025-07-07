import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFromTo = () => {
  // TODO: Implement the gsap.fromTo() method
   useGSAP(() => {
      const redBox = document.getElementById("red-box");
      gsap.fromTo(
         redBox,
         {
          x: 0,
          rotation: 0,
          borderRadius: '0%'
         },
         {
            x: 400,
            y: 200,
            // repeat: -1,
            // yoyo: true,
            borderRadius: '50%',
            rotation: 360,
            duration: 2,
            ease: 'bounce.out',
            onComplete: () => {
               console.log("Animation complete!");
            },
         }
      );
   }, []);

  return (
    <main>
      <h1>GsapFromTo</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.fromTo()</code> method is used to animate elements from a
        new state to a new state.
      </p>

      <p className="mt-5 text-gray-500">
        The <code>gsap.fromTo()</code> method is similar to the{" "}
        <code>gsap.from()</code> and <code>gsap.to()</code> methods, but the
        difference is that the <code>gsap.fromTo()</code> method animates
        elements from a new state to a new state, while the{" "}
        <code>gsap.from()</code> method animates elements from a new state to
        their current state, and the <code>gsap.to()</code> method animates
        elements from their current state to a new state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.fromTo()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.fromTo()
        </a>{" "}
        method.
      </p>

      <div className="mt-20">
        <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg ml-0" />
      </div>
      <div className="w-20 h-1 bg-white mb-10"></div>
      <div className="ml-[400px] w-20 h-1 bg-white mt-[200px]"></div>
    </main>
  );
};

export default GsapFromTo;
