import React from "react";

function About() {
  return (
    <div className="container-fluid mx-auto mr-20 p-5 ">
      <div>
        <div className="mx-auto flex flex-col mt-5  items-center justify-center">
          <h1 className="text-3xl w-2/3">Paris Charalampidis</h1>
          <h3 className="text-xl w-2/3 ">Front end developer</h3>
        </div>
      </div>
      <div className="text-left mt-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl text-cyan-800 w-2/3 text-left font-semibold">
            Hey! My name is Paris.
          </h1>
          <h3 className="text-xl w-2/3 text-left">
           
            I am a web & front end developer based in Athens, Greece, and i'm
            passionate with technology and art.
          </h3>
          <p className="text-lg mt-10 w-2/3 leading-8">
            I have been studying and working as a front-end developer since
            2020. I've gained experience at both IT and web development sectors.
            So i'm always aiming to bring a project at the light from scratch.
            I’ve always been someone who has both a creative and a logical side.
          </p>
          <p className="text-lg w-2/3 leading-8">
            I prefer to work either with a team or alone. I believe that success
            comes from teamwork.
          </p>

          <p className="text-lg w-2/3 leading-8">
            My main focus these days is building web products and web
            applications
          </p>

          <p className="text-lg w-2/3 leading-8">
            When I discovered web front end developer, I realized it would be
            the perfect fit. I am aiming to use front end technologies, design
            tools, in order to be able to deliver specific solutions.
          </p>
          <p className="text-lg w-2/3 leading-8">
            My freelance web development roots are in PHP, Javascript,React.js
            and databases. In 2019, I started at Social Hackkers to broaden my
            knowledge of the full stack development. Since then, I fell in love
            with & have been primarily using Front-end development & Bacl end
            technologies in web applications. For static sites, I love using
            Nuxt.js for creating blazing fast, SEO-driven headless frontend user
            interfaces. I try to use the appropriate tools in order to achieve
            the desired results.
          </p>
          <p className="text-lg w-2/3 leading-8">
            Since my time is split between a few different things, I’m not able
            to take on every project I’d like to, but I'm always looking for fun
            work. Take a look at my portfolio, if you think I’d be a good match
            send me an email.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
