'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { io } from 'socket.io-client';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

interface VideoState {
  timestamp: number;
  playing: boolean;
}

const socket = io(undefined, { path: '/api/socket' });

export default function Home() {
  const playerRef = useRef<any>(null);
  const [playing, setPlaying] = useState<boolean>(false);
  const [timestamp, setTimestamp] = useState<number>(0);

  const handlePlayPause = (isPlaying: boolean) => {
    setPlaying(isPlaying);
    console.log(isPlaying ? 'Play event' : 'Pause event');
  };

  const handleSeek = (newTime: number) => {
    console.log(`User skipped to: ${newTime.toFixed(2)} seconds`);
    setTimestamp(newTime);
  };

  const handleProgress = (state: { playedSeconds: number }) => {
    setTimestamp(state.playedSeconds);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Live Synced Video</h1>
      <ReactPlayer
        ref={playerRef}
        url="/e6.mov" // Change this to your video file URL
        playing={playing}
        controls
        onPlay={() => handlePlayPause(true)}
        onPause={() => handlePlayPause(false)}
        onProgress={handleProgress}
        onSeek={handleSeek}
        width="80%"
        height="auto"
      />
    </div>
  );
}
