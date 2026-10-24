import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-shell" style={{ minHeight: "100svh", display: "grid", placeItems: "center" }}>
      <div style={{ maxWidth: "28rem" }}>
        <p className="section-kicker">404</p>
        <h1 className="display-name" style={{ fontSize: "clamp(2.5rem, 8vw, 4rem)" }}>
          not found
        </h1>
        <p className="list-body" style={{ marginTop: "1.25rem" }}>
          this route doesn&apos;t exist. it may have moved.
        </p>
        <Link href="/" className="section-more">
          ← back home
        </Link>
      </div>
    </div>
  );
}
