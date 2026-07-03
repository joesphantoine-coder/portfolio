import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg">
          <CardContent className="py-14 px-8 text-center">

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Build Something Great
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto leading-8 mb-10">
              I'm currently seeking opportunities as a Full-Stack Developer.
              Whether you have a project in mind, a collaboration opportunity,
              or simply want to connect, I'd be happy to hear from you.
            </p>

            <div className="grid gap-4 md:grid-cols-3 mb-10">

              <div className="rounded-xl border p-5">
                <h3 className="font-semibold mb-2">
                  Email
                </h3>

                <a
                  href="mailto:gaafar.mahmoud@outlook.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  gaafar.mahmoud@outlook.com
                </a>
              </div>

              <div className="rounded-xl border p-5">
                <h3 className="font-semibold mb-2">
                  GitHub
                </h3>

                <a
                  href="https://github.com/joesphantoine-coder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  github.com/joesphantoine-coder
                </a>
              </div>

              <div className="rounded-xl border p-5">
                <h3 className="font-semibold mb-2">
                  Location
                </h3>

                <p className="text-muted-foreground">
                  Ajman, United Arab Emirates
                </p>
              </div>

            </div>

            <Button size="lg" asChild>
              <a href="mailto:gaafar.mahmoud@outlook.com">
                Get In Touch
              </a>
            </Button>

          </CardContent>
        </Card>
      </div>
    </section>
  );
}

