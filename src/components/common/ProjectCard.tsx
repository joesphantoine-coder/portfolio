type Project = {
  title: string;
  description: string;
  tech: string[];
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="p-6 rounded-xl border bg-white hover:shadow-xl transition duration-300">
      <h3 className="text-xl font-semibold">{project.title}</h3>

      <p className="text-gray-500 mt-2">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((t, i) => (
          <span
            key={i}
            className="text-xs px-2 py-1 rounded border bg-gray-50"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-5">
        <button className="text-sm px-3 py-1 border rounded hover:bg-black hover:text-white transition">
          GitHub
        </button>

        <button className="text-sm px-3 py-1 border rounded hover:bg-black hover:text-white transition">
          Live
        </button>
      </div>
    </div>
  );
}