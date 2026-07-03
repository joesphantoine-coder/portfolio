export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur border-b z-50">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="font-bold text-lg">
          Mahmoud<span className="text-gray-400">.dev</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-6 text-sm text-gray-600">
          <a href="#about" className="hover:text-black transition">About</a>
          <a href="#skills" className="hover:text-black transition">Skills</a>
          <a href="#projects" className="hover:text-black transition">Projects</a>
          <a href="#contact" className="hover:text-black transition">Contact</a>
        </div>

        {/* CTA */}
        <a
          href="/resume.pdf"
          className="text-sm px-4 py-2 border rounded-lg hover:bg-black hover:text-white transition"
        >
          Resume
        </a>

      </nav>
    </header>
  );
}