import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function About() {
  const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "PostgreSQL",
    "REST APIs",
    "AI Integration",
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">
          About Me
        </h2>

        <Card className="border border-border/50 shadow-sm">
          <CardContent className="p-8 md:p-10 flex flex-col md:flex-row gap-10 items-center md:items-start">
            {/* Avatar */}
            <Avatar className="w-44 h-44 rounded-3xl ">
              <AvatarImage
                src="/images/profile.jpeg"
                alt="Mahmoud Gafar Ahmed Mohamed"
              />
              <AvatarFallback className="text-3xl font-bold">
                MG
              </AvatarFallback>
            </Avatar>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4">
                Hi, I'm Mahmoud — a Full-Stack Developer
              </h3>

              <p className="text-muted-foreground leading-8 mb-5">
                I build modern full-stack web applications with a focus on clean
                architecture, scalability, and user experience. I enjoy turning
                ideas into reliable software using React, TypeScript, Node.js,
                and modern web technologies.
              </p>

              <p className="text-muted-foreground leading-8 mb-8">
                My recent work focuses on backend engineering, AI-powered
                applications, and automation. I enjoy designing REST APIs,
                integrating AI services, and building projects that solve
                real-world problems while remaining maintainable and easy to
                extend.
              </p>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}