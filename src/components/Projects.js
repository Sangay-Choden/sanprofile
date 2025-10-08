export default function Projects() {
  const projects = [
    {
      name: "MushMush - 2025",
      desc: "A web platform displaying all available mushrooms in Tsirang, Bhutan, with ordering features.",
    },
    {
      name: "VetConnect - 2025",
      desc: "A veterinary service platform connecting vets and clients across Bhutan.",
    },
    {
      name: "Catchy Fruits Game - 2024",
      desc: "An interactive game using design patterns where players catch fruits while avoiding rotten ones.",
    },
    {
      name: "GCIT Truftrek - 2024",
      desc: "A football ground reservation system with real-time updates and improved accessibility.",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto my-10 px-4">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.name} className="bg-white shadow-lg rounded-xl p-5 hover:shadow-2xl transition">
            <h3 className="font-bold text-lg mb-2">{p.name}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
