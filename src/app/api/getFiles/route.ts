import fs from 'fs';
import path from 'path';

interface FileGroup {
  directory: string;
  files: string[];
}

export async function GET(): Promise<Response> {
  // Define the paths to the directories
  const dirPaths = [
    path.join(process.cwd(), 'src/app/eca/3dart'),
    path.join(process.cwd(), 'src/app/eca/electronics'),
  ];

  // Function to read files in a directory
  const readFiles = (dirPath: string): string[] => {
    try {
      // Read files in the directory
      const files = fs.readdirSync(dirPath);
      return files;
    } catch (error) {
      console.error(`Error reading directory ${dirPath}:`, error);
      return [];
    }
  };

  // Get files from both directories
  const files: FileGroup[] = dirPaths.map((dirPath) => ({
    directory: path.basename(dirPath),
    files: readFiles(dirPath),
  }));

  return new Response(JSON.stringify(files), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
