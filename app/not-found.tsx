import Link from "next/link";
import { Terminal, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-md">
        <div className="w-14 h-14 rounded-[var(--radius)] bg-primary flex items-center justify-center mx-auto shadow-[var(--shadow-button)]">
          <Terminal className="w-7 h-7 text-primary-foreground" />
        </div>

        <div className="space-y-3">
          <div className="text-caption text-primary">404 — Not Found</div>
          <h1 className="text-heading text-foreground">Page not found</h1>
          <p className="text-muted-foreground leading-relaxed">
            The route you requested doesn&apos;t exist. It may have been moved or deleted.
          </p>
        </div>

        <div className="card-static p-5 font-mono text-sm text-left">
          <span className="text-primary">~ $</span>{" "}
          <span className="text-muted-foreground">curl https://brohammad.tech</span>
          <br />
          <span className="text-red-400/80">error:</span>{" "}
          <span className="text-muted-foreground/70">404 Not Found</span>
          <br />
          <span className="text-primary">~ $</span>{" "}
          <span className="cursor-blink inline-block w-1.5 h-3.5 bg-primary/70 rounded-[1px] align-middle" />
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-[var(--radius)] bg-primary text-primary-foreground text-sm font-medium hover:bg-secondary transition-colors shadow-[var(--shadow-button)]"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
      </div>
    </div>
  );
}
