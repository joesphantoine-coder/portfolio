import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function ResumeSection() {
  return (
    <section id="resume" className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Resume
          </h2>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Interested in learning more about my experience, technical skills,
            and projects? You can preview or download my latest resume below.
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle className="text-2xl">
                  Mahmoud Gafar Ahmed Mohamed
                </CardTitle>

                <p className="text-muted-foreground mt-2">
                  Full-Stack Developer • React • TypeScript • Node.js • AI Systems
                </p>
              </div>

              <Badge className="w-fit">
                Updated July 2026
              </Badge>
            </div>
          </CardHeader>

          <Separator />

          <CardContent className="pt-8">
            <div className="grid md:grid-cols-2 gap-8">

              <div>
                <h3 className="font-semibold text-lg mb-4">
                  Highlights
                </h3>

                <ul className="space-y-3 text-muted-foreground">
                  <li>• Full-Stack Web Development</li>
                  <li>• REST API Design</li>
                  <li>• AI Integration</li>
                  <li>• React & TypeScript</li>
                  <li>• Express.js & Node.js</li>
                  <li>• PostgreSQL</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">
                  Resume Details
                </h3>

                <div className="space-y-3 text-muted-foreground">
                  <p>📄 PDF Format</p>
                  <p>🕒 Updated: July 2026</p>
                  <p>🌍 English Version</p>
                  <p>📱 Optimized for recruiters</p>
                </div>
              </div>

            </div>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

              <Button asChild size="lg">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Preview Resume
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
              >
                <a href="/resume.pdf" download>
                  Download PDF
                </a>
              </Button>

            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

