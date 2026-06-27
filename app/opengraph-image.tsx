import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Brohammad — Backend & AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow blob */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "10%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(59,130,246,0.08)",
            filter: "blur(80px)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: 20,
            background: "linear-gradient(135deg, #3b82f6, #7c3aed)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
            fontSize: 36,
          }}
        >
          {"</>"}
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "white",
            letterSpacing: "-2px",
            marginBottom: 16,
          }}
        >
          Brohammad
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: "#3b82f6",
            fontWeight: 600,
            marginBottom: 24,
          }}
        >
          Backend & AI Engineer
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: 12 }}>
          {["Node.js", "Python", "Distributed Systems", "LLMs", "AWS"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  padding: "8px 16px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#a1a1aa",
                  fontSize: 16,
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            color: "#52525b",
            fontSize: 18,
          }}
        >
          brohammad.tech
        </div>
      </div>
    ),
    { ...size }
  );
}
