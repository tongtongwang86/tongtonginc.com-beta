import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const modelsDirectory = path.join(process.cwd(), 'src/app/tests');

  try {
    const files = fs.readdirSync(modelsDirectory);
    return NextResponse.json(files);
  } catch (error) {
    console.error('Error reading models directory:', error);
    return NextResponse.json({ error: 'Failed to read models directory' }, { status: 500 });
  }
}
