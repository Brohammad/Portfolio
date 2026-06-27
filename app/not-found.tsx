import Link from "next/link";
import { Terminal, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#09090b] flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-md">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mx-auto shadow-2xl shadow-blue-600/30">
          <Terminal className="w-8 h-8 text-white" />
        </div>

        <div className="space-y-3">
          <div className="font-mono text-sm text-blue-400">404 — NOT_FOUND</div>
          <h1 className="text-4xl font-bold text-white">Page not found</h1>
          <p className="text-zinc-400">
            The route you requested doesn&apos;t exist. It may have been moved or deleted.
          </p>
        </div>

        <div className="bg-[#111113] border border-white/5 rounded-xl p-4 font-mono text-sm text-left">
          <span className="text-blue-400">~ $</span>{" "}
          <span className="text-zinc-300">curl https://brohammad.tech</span>
          <br />
          <span className="text-red-400">error:</span>{" "}
          <span className="text-zinc-500">404 Not Found</span>
          <br />
          <span className="text-blue-400">~ $</span>{" "}
          <span className="cursor-blink inline-block w-2 h-4 bg-blue-400 rounded-sm align-middle" />
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
      </div>
    </div>
  );
}
