// app/not-found.tsx
"use client";
import * as UI from '@/components';
import React, { useEffect, useState } from "react";
import Link from "next/link";


const NotFound: React.FC = () => {
  const [responseText, setResponseText] = useState<string>("");

  useEffect(() => {
    const makeApiRequest = async () => {
      const payload = {
        messages: [
          { content: "You are a error 404 generator", role: "system" },
          { content: "Write an creative 404 error code that is no longer than 50 words", role: "user" },
        ],
        stream: "true",
      };

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
                setResponseText(chatText);
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

  return (
    <div style={styles.fullwidthcontainer}>
      <div style={styles.topnav}>
        <Link href="/" style={styles.navLink}>
          Tongtong.inc
        </Link>
      </div>

      <h1 className="leading-none text-[#ded2b4] font-serif text-[300%] font-medium text-center">
      Tongtong.inc
</h1>


      <h1 className="leading-none text-[#ded2b4] font-serif text-[300%] font-medium text-center">
  404
</h1>


<UI.TextContainer>

<div id="response-container" className="font-sans text-[#97b2cf] text-[140%] mt-4 text-left">
          {responseText}
        </div>

</UI.TextContainer>



      <UI.HomeButton></UI.HomeButton>
      
    </div>
  );
};

// Inline styling
const styles = {
  fullwidthcontainer: {
    paddingTop: "5em",
    height: "70dvh",
    textAlign: "center" as const,
    color: "#97b2cf",
  },
  topnav: {
    marginBottom: "2em",
  },
  navLink: {
    fontSize: "1.5em",
    color: "#ded2b4",
    textDecoration: "none",
  },
  textcontainer: {
    minHeight: "70dvh",
  },
  title: {
    lineHeight: 1,
    color: "#ded2b4",
    fontFamily: "serif",
    fontSize: "300%",
    fontWeight: 500,
    textAlign: "center" as const,
  },
  maintext: {
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    color: "#97b2cf",
    fontSize: "140%",
    marginTop: "1em",
  },
 
};

export default NotFound;
