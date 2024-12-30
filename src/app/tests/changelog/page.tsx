// app/about/page.tsx
"use client";

import * as UI from '@/components';
import React, { useState, useEffect } from 'react';

interface Commit {
  sha: string;
  commit: {
    author: {
      name: string;
      date: string;
    };
    message: string;
  };
}

interface Props {
  commits: Commit[];
  error?: string;
}

const ChangelogPage: React.FC<Props> = ({ commits, error }) => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <UI.BodyContainer>
      <div>
        <h1>Commits</h1>
        {commits.length === 0 ? (
          <p>No commits found for this repository.</p>
        ) : (
          <div
            style={{
              maxHeight: '400px',
              overflowY: 'auto',
              border: '1px solid #ccc',
              padding: '10px',
            }}
          >
            <ul>
              {commits.map((commit) => (
                <li key={commit.sha}>
                  <strong>{commit.commit.author.name}</strong>: {commit.commit.message}{' '}
                  <em>({formatDate(commit.commit.author.date)})</em>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </UI.BodyContainer>
  );
};

export default function About() {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchCommits = async (): Promise<void> => {
      const repoName = 'tongtongwang86/tongtonginc.com-beta'; // Set your GitHub repository here

      try {
        const response = await fetch(`https://api.github.com/repos/${repoName}/commits`);
        if (!response.ok) {
          throw new Error(`Error fetching commits: ${response.status}`);
        }

        const data: Commit[] = await response.json();
        setCommits(data);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error';
        console.error('Error fetching data:', errorMessage);
        setError(errorMessage);
      }
    };

    fetchCommits();
  }, []);

  return <ChangelogPage commits={commits} error={error} />;
}
