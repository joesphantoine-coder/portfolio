import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "React Router",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "PostgreSQL (Learning)",
        "Prisma (Learning)",
        "Groq API",
      ],
    },
    {
      title: "Tools & Workflow",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Linux",
        "Vercel",
        "Render",
        "Postman",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 md:px-8 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Technical Skills
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Technologies and tools I use to build modern full-stack web
            applications, REST APIs, and AI-powered software.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle className="text-xl">
                  {category.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}