"use client";
import { useState, useEffect, useRef } from "react";

interface Commit {
  commit: {
    author: {
      date: string;
    };
  };
}

export default function LastCommitDate() {
  const [lastCommitDate, setLastCommitDate] = useState<string>("Loading...");
  const [error, setError] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [width, setWidth] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Measure initial width of "Loading..." dynamically
    if (containerRef.current) {
      setWidth(containerRef.current.offsetWidth);
    }
  }, []); // Empty dependency ensures it only runs on the initial render

  useEffect(() => {
    async function fetchLastCommit() {
      const repoName = "tongtongwang86/tongtonginc.com-beta"; // Set your GitHub repository here

      try {
        const response = await fetch(
          `https://api.github.com/repos/${repoName}/commits?per_page=1`
        );
        if (!response.ok) {
          throw new Error(`Error fetching commits: ${response.status}`);
        }

        const data: Commit[] = await response.json();
        if (data.length > 0) {
          const lastCommit = data[0];
          const commitDate = new Date(lastCommit.commit.author.date);
          setLastCommitDate(
            commitDate.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          );
        } else {
          setLastCommitDate("No commits found.");
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch the last commit date.");
      } finally {
        setIsLoaded(true);
      }
    }

    fetchLastCommit();
  }, []);

  useEffect(() => {
    // Recalculate width whenever `lastCommitDate` changes
    if (containerRef.current) {
      setWidth(containerRef.current.offsetWidth);
    }
  }, [lastCommitDate]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <a
      className="absolute bottom-0 right-0 m-1 p-2 rounded-xl backdrop-blur-sm shadow-visionpro text-xs flex flex-col items-start"
      // href="/about"
      style={{
        width: width ? `${width}px` : "auto", // Add extra space for padding (prevent clipping)
        transition: "width 0.5s ease-in-out", // Smooth transition for width changes
        overflow: "hidden", // Prevent content overflow during animation
        whiteSpace: "nowrap", // Prevent wrapping
        boxSizing: "content-box", // Ensure padding doesn't affect the calculated width
      }}
    >
      <div ref={containerRef} className="inline-block">
        {/* Ensure "Last updated:" stays on one line */}
        <span className="block font-semibold">Last updated:</span>
        {/* Ensure the date stays on a separate line */}
        <p className="block">{lastCommitDate}</p>
      </div>
    </a>
  );
}
