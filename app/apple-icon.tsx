import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default async function AppleIcon() {
  const portraitBuffer = await readFile(
    join(
      process.cwd(),
      "public",
      "images",
      "Godson Nnamdi Azubuike SRC PC.jpeg"
    )
  );
  const portraitDataUrl = `data:image/jpeg;base64,${portraitBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          borderRadius: "36px",
          overflow: "hidden",
          backgroundColor: "#0A192F",
          border: "4px solid #D4A843",
        }}
      >
        <img
          src={portraitDataUrl}
          alt="Godson Azubuike"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top center",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}

