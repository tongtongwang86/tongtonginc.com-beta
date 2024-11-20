"use client";
import * as UI from '@/components';
import React, { useEffect, useState, useRef } from "react";

const NotFound: React.FC = () => {
  const [responseWords, setResponseWords] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const makeApiRequest = async () => {
      const payload = {
        messages: [
          { content: "You are a 404 generator that writes no longer than 50 words", role: "system" },
          { content: "Write a funny and creative 404 error message with emojis", role: "user" },
        ],
        stream: "true",
      };
//https://api.tongtonginc.com/ai/v1/chat/completions
      try {
        const response = await fetch("https://api.tongtonginc.com/ai/v1/chat/completions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const reader = response.body?.pipeThrough(new TextDecoderStream()).getReader();
        if (!reader) return;

        let accumulatedData = "";
        let chatText = "";

        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          const lines = value.split("\n");

          lines.forEach((line) => {
            if (!line || line.startsWith(":") || line === "data: [DONE]") return;

            if (line.startsWith("data: ")) {
              line = line.slice("data: ".length);
            }

            accumulatedData += line;

            try {
              const jsonData = JSON.parse(accumulatedData);
              const content = jsonData.choices[0].delta.content;

              if (content) {
                chatText += content;
                const words = chatText.split(" ").filter((word) => word); // Split into words and filter out empty ones
                setResponseWords([...words]); // Update the array incrementally
              }

              accumulatedData = "";
            } catch {
              // Keep accumulating if JSON is incomplete
            }
          });
        }
      } catch (error) {
        console.error("Error fetching 404 message:", error);
      }
    };

    makeApiRequest();
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.height = `${containerRef.current.scrollHeight}px`;
    }
  }, [responseWords]);

  return (
    <>
          <UI.BodyContainer
  navColor="var(--background)"
  navDropoffColor="var(--navgradient)"
  backgroundColor="var(--background2)"
  logoColor='var(--logocolor)'
  hoverShadowColor='var(--logoHover)'
>
      <h1 className="leading-none text-[var(--highlightText)] font-serif text-[300%] text-center mb-10 drop-shadow-[0_0_5px_#ded2b4] p-2">
      404
</h1>



        {/* <h1 className="leading-none text-[#ded2b4] font-serif text-[300%] font-medium text-center">
          404
        </h1> */}

        <UI.TextContainer>
          <div
            id="response-container"
            ref={containerRef}
            style={{
              transition: "height 0.5s ease",
              overflow: "hidden",
            }}
            className="font-sans text-[#97b2cf] text-[140%] mt-4 text-left"
          >
            {responseWords.map((word, index) => (
              <span
                key={index}
                style={{
                  animation: `fade-in 0.5s ease-in, glow 1s ease-out, color-change 1.5s ease-out`,
                  opacity: 0,
                  animationFillMode: "forwards",
                  display: "inline-block",
                  marginRight: "0.3rem",
                }}
              >
                {word}
              </span>
            ))}

          </div>
        </UI.TextContainer>
<br></br><br></br>
        <UI.HomeButton></UI.HomeButton>
      </UI.BodyContainer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes glow {
          from {
            text-shadow: 0 0 5px #ffda79, 0 0 10px #ffd700, 0 0 20px #ffae42;
          }
          to {
            text-shadow: none;
          }
        }

        @keyframes color-change {
          from {
            color: #ded2b4;
          }
          to {
            color: #97b2cf;
          }
        }
      `}</style>
    </>
  );
};

export default NotFound;
