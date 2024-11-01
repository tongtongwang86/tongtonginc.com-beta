This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


The `screen` command is excellent for managing long-running processes on a cloud-hosted VM. Using `screen` allows you to run commands in a persistent session that stays active even if you disconnect from the terminal. Here’s how to use it on a Debian VM:

### 1. Install `screen` (if not already installed)
On Debian, you can install `screen` using:
```bash
sudo apt update
sudo apt install screen
```

### 2. Start a New Screen Session
To start a new `screen` session, use:
```bash
screen -S session_name
```
Replace `session_name` with a name you’d like to give the session, making it easier to identify later.

### 3. Run Commands Inside the Screen Session
Inside the `screen` session, run any long-running command or process you want. The session will keep running in the background after you detach from it.

For example:
```bash
python my_script.py
```

### 4. Detach from the Screen Session
To detach from the `screen` session without stopping the process, press:
```plaintext
Ctrl + A, then D
```
This will leave the session running in the background, allowing you to safely close your terminal.

### 5. Reattach to the Screen Session
If you want to return to the session later, list all `screen` sessions first:
```bash
screen -ls
```
This command will show active screen sessions with their IDs. You can reattach to the session with:
```bash
screen -r session_name
```
or, if you’re using the session ID:
```bash
screen -r session_id
```

### 6. Close the Screen Session (Optional)
Once your process is complete and you’re done with the session, you can exit it. Reattach to the session and simply type:
```bash
exit
```
This will terminate the session entirely.

### Extra Tips
- **Start a Detached Session Directly:** You can also start a session detached right from the beginning:
  ```bash
  screen -dmS session_name command
  ```
  This will start `command` in a detached `screen` session named `session_name`.

- **Monitor Multiple Screens:** For managing multiple screens, `screen -ls` will list all sessions so you can switch between them as needed.
