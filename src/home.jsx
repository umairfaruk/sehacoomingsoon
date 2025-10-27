import React from "react";
import Particles from "./Particles";
import ShinyText from "./ShinyText";


const Home = () => {
  return (
    <div className="w-screen h-screen relative text-white flex items-center justify-center">
      <div className="flex flex-col justify-center items-center gap-8">
        <ShinyText text="We are working on Seha Capital" disabled={false} speed={3} className='custom-class' />
        <ShinyText text="Coming back Soon ..." disabled={false} speed={3} className='custom-class' />
      </div>
      <div className="absolute inset-0  bg-black -z-10">
        <Particles
          particleColors={[
            "#060010",
            "#ffffff",
            "#b0b0b1",
            "#374AA0",
            "7A22FF",
          ]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
    </div>
  );
};

export default Home;
