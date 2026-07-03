import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const timeline = [
  {
    year: "2026",
    title: "Built Haboba (Full-Stack AI Platform)",
    description:
      "Developed a bilingual folklore platform with React, Node.js, and Groq AI integration.",
    tags: ["React", "Node.js", "AI", "Groq API"],
  },
  {
    year: "2026",
    title: "Started AI Systems Development",
    description:
      "Began working on AI-powered chat systems, backend APIs, and automation workflows.",
    tags: ["AI Integration", "REST APIs", "Prompt Engineering"],
  },
  {
    year: "2025",
    title: "Frontend Development Focus",
    description:
      "Learned React, TypeScript, and modern UI development practices.",
    tags: ["React", "TypeScript", "Tailwind"],
  },
];

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Timeline
          </h2>
          <p className="mt-4 text-muted-foreground">
            My learning and project journey so far.
          </p>
        </div>

        <div className="space-y-6">
          {timeline.map((item) => (
            <Card key={item.title} className="relative">
              <CardContent className="p-6">

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">

                  {/* Left */}
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {item.year}
                    </p>

                    <h3 className="text-xl font-semibold mt-1">
                      {item.title}
                    </h3>

                    <p className="text-muted-foreground mt-2 leading-7">
                      {item.description}
                    </p>
                  </div>

                  {/* Right tags */}
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                </div>

              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}