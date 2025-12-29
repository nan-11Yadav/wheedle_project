import React from "react";
import AudienceCard from "./AudienceCard"


const LandingPage = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#1f2b8f] via-[#4b5fd1] to-[#6a7cff] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">

        {/* Top Badge */}
        <div className="inline-block mb-6 px-4 py-1 rounded-full bg-blue-900/40 text-xs tracking-widest uppercase">
          Modern IT Services
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Empowering Businesses with <br />
          <span className="text-blue-200">Smart Digital Solutions</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-sm md:text-base text-blue-100 mb-10">
          Delivering scalable IT services, innovative software, and secure digital
          solutions to help your business grow faster and smarter.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition shadow-lg">
            🚀 Get a Free Consultation
          </button>

          <button className="px-6 py-3 rounded-full bg-white text-black hover:bg-gray-200 transition shadow-lg">
            Talk to Our Experts
          </button>
        </div>

        {/* Image Card */}
        <div
          className="
            relative mx-auto
            w-[1006px] h-[648px]
            rounded-[30px]
            overflow-hidden
            border-[1.5px] border-blue-300/40
            shadow-2xl
          "
        >
          <img
            src="src/assets/Dashboard.png"
            alt="Dashboard Preview"
            className="w-full h-full object-cover opacity-100"
          />

          {/* subtle glow overlay */}
          <div className="absolute inset-0 rounded-[30px] ring-1 ring-blue-400/20 pointer-events-none" />
        </div>

      </div>


      {/* Trusted By Section */}
<div className="mt-20 w-full border bg-black border-dashed border-blue-400/40 rounded-xl px-10 py-8">
  
  {/* Heading */}
  <p className="text-center text-sm md:text-base text-gray-200 mb-8">
    Empowering <span className="font-semibold text-white">1,000+</span> organizations with reliable and scalable IT services
  </p>

  {/* Logos */}
  <div className="flex flex-wrap items-center justify-between gap-10 text-gray-300">
    <img src="Logos.png"></img>
    
    {/* <div className="flex items-center gap-2">
      <span className="text-xl">▮▮▮</span>
      <span className="font-semibold">TechFlow</span>
    </div>

    <div className="flex items-center gap-2">
      <span className="text-xl">📄</span>
      <span className="font-semibold">DataVault</span>
    </div>

    <div className="flex items-center gap-2">
      <span className="text-xl">☁️</span>
      <span className="font-semibold">CloudSync</span>
    </div>

    <div className="flex items-center gap-2">
      <span className="text-xl">✖️</span>
      <span className="font-semibold">NexusAI</span>
    </div>

    <div className="flex items-center gap-2">
      <span className="text-xl">📊</span>
      <span className="font-semibold">FlowMetrics</span>
    </div>

    <div className="flex items-center gap-2">
      <span className="text-xl">🔑</span>
      <span className="font-semibold">StreamCore</span>
    </div> */}

  </div>
</div>
{/* Vision & Technology Section */}
<section className="mt-24">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex flex-col lg:flex-row items-center gap-10
                    border border-dashed border-blue-400/40
                    rounded-[24px] p-8 bg-gradient-to-r from-[#020617] via-[#040b2c] to-[#050b3f]">

      {/* Left Image */}
      <div className="w-full lg:w-1/2">
        <div className="relative w-full h-[360px] md:h-[420px] rounded-[20px] overflow-hidden">
          <img
            src="src/assets/Rectangle 2.png"   // replace with your image path
            alt="AI Technology Vision"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 ring-1 ring-blue-500/30 rounded-[20px]" />
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 text-left text-white">
        <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
          Your Vision. <br />
          Our Technology. <br />
          <span className="text-blue-300">Smarter Solutions.</span>
        </h2>

        <p className="text-sm md:text-base text-blue-100 mb-6 max-w-lg">
          We deliver powerful IT services tailored to your business goals from
          development to deployment, all built for performance, security, and scalability.
        </p>

        {/* Bullet Points */}
        <ul className="space-y-3 mb-8 text-sm md:text-base">
          <li className="flex items-center gap-3">
            <span className="text-blue-400">✔</span>
            Custom software & web solutions
          </li>
          <li className="flex items-center gap-3">
            <span className="text-blue-400">✔</span>
            Reliable IT support & consulting
          </li>
          <li className="flex items-center gap-3">
            <span className="text-blue-400">✔</span>
            Scalable systems built for growth
          </li>
        </ul>

        {/* CTA */}
        <button className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition shadow-lg">
          Start Now
        </button>
      </div>

    </div>
  </div>
</section>

{/* Build It Once Section */}
<section className="mt-28">
  <div className="max-w-7xl mx-auto px-6">
    <div className="
      border border-blue-500/40
      rounded-[24px]
      p-10
      bg-gradient-to-br from-[#020617] via-[#050b2e] to-[#000814]
      text-white
    ">

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold">
          Build It Once.
          <span className="block text-blue-300 font-medium">
            Scale It Forever.
          </span>
        </h2>
        <p className="text-sm md:text-base text-blue-100 mt-3">
          3 Simple Steps to Power Your Business with Technology
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

        {/* Steps List */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-600 text-sm font-semibold">
              1
            </span>
            <span className="text-blue-400 font-medium">
              Share Your Requirements
            </span>
          </div>

          <div className="flex items-center gap-4 opacity-90">
            <span className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-500 text-sm">
              2
            </span>
            <span>Design & Develop Smart Solutions</span>
          </div>

          <div className="flex items-center gap-4 opacity-90">
            <span className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-500 text-sm">
              3
            </span>
            <span>Deploy & Scale with Confidence</span>
          </div>
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <div className="w-[280px] h-[360px] rounded-[24px] overflow-hidden shadow-xl">
            <img
              src="Business.png"  // place image in public folder
              alt="Business Planning"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Step Description */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center">
              🛡️
            </div>
            <h3 className="text-lg font-semibold text-blue-400">
              Share Your Requirements
            </h3>
          </div>

          <p className="text-sm md:text-base text-blue-100 max-w-md">
            Tell us your business needs, goals, or challenges.
            We analyze your requirements to design the right IT solution for you.
          </p>
        </div>

      </div>
    </div>
  </div>
</section>


{/* Audience Section */}
<section className="mt-32">
  <div className="max-w-7xl mx-auto px-6 text-white">

    {/* Heading */}
    <h2 className="text-2xl md:text-3xl font-semibold mb-10">
      For Businesses, Startups <br /> & Enterprises
    </h2>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Card 1 */}
      <AudienceCard
        image="/image1.png"
        tag="Web development, cloud apps, product MVPs, automation"
        title="Startups & Growing Businesses"
        desc="Build strong digital foundations with scalable IT solutions tailored for growth, performance, and reliability."
      />

      {/* Card 2 */}
      <AudienceCard
        image="/image2.png"
        tag="Enterprise software & managed IT services"
        title="Enterprises & Agencies"
        desc="Streamline operations, enhance productivity, and deliver better services with secure, custom-built IT solutions."
      />

      {/* Card 3 */}
      <AudienceCard
        image="/image3.png"
        tag="SaaS development, IT consulting, digital transformation"
        title="Entrepreneurs & Founders"
        desc="Turn ideas into powerful digital products with expert development, automation, and ongoing technical support."
      />

    </div>
  </div>
</section>







    </section>
  );
};

export default LandingPage;
