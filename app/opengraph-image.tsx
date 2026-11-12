import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Vote Godson Azubuike for SRC President — African Leadership University. Together, We Make ALU Better. Election Day: TBD.";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  const posterBuffer = await readFile(
    join(
      process.cwd(),
      "public",
      "images",
      "Godson Azubuike_ Vote for SRC President.png"
    )
  );
  const posterDataUrl = `data:image/png;base64,${posterBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          justifyContent: "space-between",
          backgroundColor: "#0A192F",
          color: "#FFFFFF",
          padding: "36px 44px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top gold accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            backgroundColor: "#D4A843",
          }}
        />

        {/* Left campaign messaging column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "56%",
            paddingRight: "28px",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                alignSelf: "flex-start",
                borderRadius: "9999px",
                border: "1px solid rgba(212, 168, 67, 0.55)",
                backgroundColor: "rgba(17, 39, 72, 0.9)",
                padding: "8px 18px",
                fontSize: "15px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "#E2BD64",
              }}
            >
              ELECTION DAY | TBD
            </div>

            <div
              style={{
                marginTop: "26px",
                fontSize: "19px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "#E2BD64",
                textTransform: "uppercase",
              }}
            >
              GODSON AZUBUIKE &bull; FOR SRC PRESIDENT
            </div>

            <div
              style={{
                marginTop: "14px",
                fontSize: "54px",
                fontWeight: 800,
                lineHeight: 1.06,
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
              }}
            >
              TOGETHER, WE MAKE ALU BETTER.
            </div>

            <div
              style={{
                marginTop: "20px",
                fontSize: "22px",
                lineHeight: 1.4,
                color: "#CBD5E1",
              }}
            >
              One community. Shared responsibility. A better ALU.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              borderTop: "1px solid rgba(255, 255, 255, 0.14)",
              paddingTop: "18px",
              fontSize: "17px",
              fontWeight: 600,
              color: "#E2E8F0",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "3px",
                backgroundColor: "#D4A843",
              }}
            />
            <span>
              African Leadership University &bull; Student Representative Council
            </span>
          </div>
        </div>

        {/* Right campaign poster frame */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "42%",
            height: "100%",
            borderRadius: "16px",
            overflow: "hidden",
            border: "2px solid rgba(212, 168, 67, 0.6)",
            backgroundColor: "#111214",
          }}
        >
          <img
            src={posterDataUrl}
            alt="Vote Godson Azubuike for SRC President"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
