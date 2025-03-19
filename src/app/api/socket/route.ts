// app/api/socket/route.ts
import { Server } from 'socket.io';
import { NextRequest } from 'next/server';

let io: Server | undefined;

interface VideoState {
  timestamp: number;
  playing: boolean;
}

let videoState: VideoState = { timestamp: 0, playing: false };

export async function GET(req: NextRequest) {
  if (!globalThis.io) {
    console.log('Initializing Socket.IO server');
    globalThis.io = new Server(3001, {
      path: '/api/socket',
      cors: { origin: '*' },
    });

    io = globalThis.io;

    io.on('connection', (socket) => {
      console.log('New client connected');
      socket.emit('sync', videoState);

      socket.on('update', (state: VideoState) => {
        console.log('Received update:', state);
        videoState = state;
        io?.emit('sync', videoState);
      });

      socket.on('seek', (timestamp: number) => {
        console.log('Received seek:', timestamp);
        videoState.timestamp = timestamp;
        io?.emit('sync', videoState);
      });

      socket.on('pause', () => {
        console.log('Received pause');
        videoState.playing = false;
        io?.emit('sync', videoState);
      });

      socket.on('play', () => {
        console.log('Received play');
        videoState.playing = true;
        io?.emit('sync', videoState);
      });
    });
  }

  return new Response(null, { status: 200 });
}
