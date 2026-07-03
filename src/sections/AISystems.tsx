import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AISystemsSection() {
  const aiCategories = [
    {
      title: "AI Integration",
      skills: [
        "Groq API",
        "Prompt Engineering",
        "Context Grounding",
        "AI Chat Interfaces",
        "REST APIs",
      ],
    },
    {
      title: "AI Automation",
      skills: [
        "Workflow Design",
        "n8n (Learning)",
        "Webhooks",
        "API Integration",
        "Automation Systems",
      ],
    },
    {
      title: "Current Focus",
      skills: [
        "LLM Applications",
        "AI-Powered Web Apps",
        "Backend Architecture",
        "PostgreSQL (Learning)",
        "Agentic Systems (Learning)",
      ],
    },
  ];

  return (
    <section
      id="ai-systems"
      className="py-20 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            AI Systems
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Building practical AI-powered applications through modern APIs,
            backend engineering, and intelligent automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aiCategories.map((category) => (
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
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-3 py-1 text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

