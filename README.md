

# Tongtonginc.com website source


## Nginx Configuration

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

Reference:  
https://certbot.eff.org/instructions?ws=nginx&os=snap  
https://www.youtube.com/watch?v=vj34hX8jWM0&list=WL&index=3
