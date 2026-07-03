import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="border-t ">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <div>
            <h3 className="text-lg font-semibold">
              Mahmoud Gafar Ahmed Mohamed
            </h3>

            <p className="text-sm text-muted-foreground">
              Full-Stack Developer • React • Node.js • AI Systems
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm">

            <a
              href="https://github.com/joesphantoine-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              GitHub
            </a>

            <a
              href="mailto:gaafar.mahmoud@outlook.com"
              className="hover:text-primary transition-colors"
            >
              Email
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Resume
            </a>

          </div>

        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          © {new Date().getFullYear()} Mahmoud Gafar Ahmed Mohamed.
          Built with React, TypeScript, Tailwind CSS and ❤️.
        </p>

      </div>
    </footer>
  );
}
