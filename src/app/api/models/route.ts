import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const modelsDirectory = path.join(process.cwd(), 'public/models/teachers');

  try {
    const files = fs.readdirSync(modelsDirectory);
    const glbFiles = files.filter((file) => file.endsWith('.glb'));
    return NextResponse.json(glbFiles);
  } catch (error) {
    console.error('Error reading models directory:', error);
    return NextResponse.json({ error: 'Failed to read models directory' }, { status: 500 });
  }
}
