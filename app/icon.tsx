import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default async function Icon() {
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
          borderRadius: "9999px",
          overflow: "hidden",
          backgroundColor: "#0A192F",
          border: "1.5px solid #D4A843",
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

