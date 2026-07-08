import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0e17",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: "bold",
            background: "linear-gradient(135deg, #00d4ff, #ff006e)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Parv Dixit
        </div>
        <div style={{ fontSize: 28, color: "#94a3b8", marginTop: 16 }}>
          DevOps Engineer · Pune, India
        </div>
        <div style={{ fontSize: 20, color: "#00d4ff", marginTop: 24 }}>
          Automating pipelines. Hardening infra. Shipping reliably.
        </div>
      </div>
    ),
    { ...size }
  );
}
