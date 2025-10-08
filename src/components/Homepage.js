export default function Homepage() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/images/sc.png')" }} // replace with your own image
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative text-left max-w-4xl px-6">
        <h1 className="text-5xl font-semibold mb-4 leading-tight">
          Hello,<br /> I’m Sanzin!
        </h1>
        <h2 className="text-2xl font-light mb-4">Full Stack Developer</h2>
        <p className="text-sm max-w-lg leading-relaxed text-gray-200">
          I am currently studying bachelor’s degree 
          of Computer Science at GCIT,
          specializing in Full Stack Development.
        </p>
      </div>
    </section>
  );
}
