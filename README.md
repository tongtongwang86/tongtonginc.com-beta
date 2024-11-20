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


# Nginx Configuration

### Key Directories
- **Available Sites Directory**: `/etc/nginx/sites-available`
- **Enabled Sites Directory**: `/etc/nginx/sites-enabled`

### Commands

- **Symlink a Site Configuration**  
  To enable a site by creating a symlink from `sites-available` to `sites-enabled`:
  ```bash
  ln -s /etc/nginx/sites-available/things /etc/nginx/sites-enabled/things
  ```

- **Check Nginx Syntax**  
  Test for syntax errors in Nginx configuration:
  ```bash
  nginx -t
  ```

- **Restart Nginx Service**  
  Restart Nginx to apply changes:
  ```bash
  sudo service nginx restart
  ```

---

# Screen Command Reference

`screen` is a terminal multiplexer that allows for managing multiple terminal sessions.

### Basic Commands

- **Start a New Screen Session**  
  Start a screen session with a custom name:
  ```bash
  screen -S session_name
  ```
  Replace `session_name` with a descriptive name for easy identification.

- **Detach from a Screen Session**  
  Detach from the current session without terminating it:
  - Press `Ctrl + A`, then `D`.

- **Reattach to a Screen Session**  
  To view active sessions:
  ```bash
  screen -ls
  ```
  Reattach using the session name or ID:
  ```bash
  screen -r session_name
  # OR
  screen -r session_id
  ```

- **Close a Screen Session**  
  Once finished with a session, reattach to it and type:
  ```bash
  exit
  ```
  This terminates the session.

### Advanced Usage

- **Start a Detached Session Directly**  
  Run a command in a new detached session:
  ```bash
  screen -dmS session_name command
  ```
  This starts `command` in a detached session named `session_name`.

- **Monitor Multiple Sessions**  
  To manage multiple screens, use:
  ```bash
  screen -ls
  ```
  This command lists all active sessions, allowing you to switch between them as needed.

---


Reference:  
https://certbot.eff.org/instructions?ws=nginx&os=snap  
https://www.youtube.com/watch?v=vj34hX8jWM0&list=WL&index=3
