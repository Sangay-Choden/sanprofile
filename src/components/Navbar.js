export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full  shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex justify-end items-center space-x-10 py-4 px-6 text-gray-800 font-medium">
        <a href="#about" className="hover:text-gray-500 transition">ABOUT</a>
        <a href="#interest" className="hover:text-gray-500 transition">INTEREST</a>
        <a href="#projects" className="hover:text-gray-500 transition">PROJECTS</a>
        <a href="#inspiration" className="hover:text-gray-500 transition">INSPIRATION</a>
      </div>
      <hr className="border-white-300" />
    </nav>
  );
}
