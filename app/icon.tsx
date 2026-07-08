import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0e17",
          borderRadius: 8,
          border: "2px solid #00d4ff",
          fontSize: 14,
          fontWeight: "bold",
          color: "#00d4ff",
          fontFamily: "monospace",
        }}
      >
        PD
      </div>
    ),
    { ...size }
  );
}
