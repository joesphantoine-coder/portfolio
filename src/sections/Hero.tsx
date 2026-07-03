export default function Hero() {
  return (
    <section className="h-[85vh] flex flex-col items-center justify-center text-center px-6">
      
      {/* Name */}
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
        Mahmoud Mohamed
      </h1>

      {/* Role with highlight */}
      <p className="mt-4 text-xl md:text-2xl text-gray-600">
        AI Automation &{" "}
        <span className="text-black font-semibold">
          SaaS Systems Developer
        </span>
      </p>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-gray-500 leading-relaxed">
        I build AI-powered SaaS applications, automation systems, and backend APIs
        using React, Node.js, and LLM APIs like Groq. Focused on turning ideas
        into real scalable products.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-10">
        <a
          href="#projects"
          className="px-5 py-3 rounded-lg bg-black text-white hover:opacity-90 transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="px-5 py-3 rounded-lg border hover:bg-black hover:text-white transition"
        >
          Contact Me
        </a>
      </div>

      {/* Small status line */}
      <p className="mt-10 text-sm text-gray-400">
        Available for internships & AI SaaS opportunities
      </p>
    </section>
  );
}