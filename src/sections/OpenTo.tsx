import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function OpenToSection() {
  const opportunities = [
    "Full-Stack Developer Roles",
    "Frontend React Positions",
    "Backend Node.js Roles",
    "AI / LLM Engineering Roles",
    "Internships / Entry-Level Roles",
    "Remote Opportunities",
  ];

  return (
    <section id="opento" className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Open To Work
          </h2>

          <p className="mt-4 text-muted-foreground">
            I am currently available for new opportunities and collaborations.
          </p>
        </div>

        <Card className="shadow-md">
          <CardContent className="p-8 md:p-10">

            {/* Status */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

              <div>
                <h3 className="text-xl font-semibold">
                  Status: Available
                </h3>

                <p className="text-muted-foreground mt-1">
                  Open to full-time roles, internships, and freelance projects.
                </p>
              </div>

              <Badge className="w-fit bg-green-600 hover:bg-green-600 text-white">
                Actively Looking
              </Badge>
            </div>

            {/* Opportunities */}
            <div className="mb-8">
              <h4 className="font-semibold mb-4">
                Interested In:
              </h4>

              <div className="flex flex-wrap gap-2">
                {opportunities.map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <Button asChild size="lg">
                <a href="#contact">
                  Contact Me
                </a>
              </Button>

              <Button asChild variant="outline" size="lg">
                <a href="/resume.pdf" target="_blank">
                  View Resume
                </a>
              </Button>

            </div>

          </CardContent>
        </Card>

      </div>
    </section>
  );
}