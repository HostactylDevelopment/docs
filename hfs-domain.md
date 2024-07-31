---
outline: deep
---

# Setting up a Webserver

1) Login to your DNS manager, point the domain you want your dashboard to be hosted on to your VPS IP address. (Example: dash.hostactyl.tech 192.172.0.2)

2) Run `apt install nginx && apt install certbot`

3) Run `ufw allow 80 and ufw allow 443` on the vps

4) Run certbot certonly -d `<domain>` then do 1 and put your email

5) Run `nano /etc/nginx/sites-enabled/hostactyl.conf`

6) Paste the configuration at the bottom of this and replace `<domain>` (For Example: dash.hostactyl.tech) with the domain you want it to run on and `<port>` (For Example 3000) with the port it is already running on. By default that is 3000.

7) Run `systemctl restart nginx`

## Nginx Proxy Config

````Nginx
server {
    listen 80;
    server_name <domain>;
    return 301 https://$server_name$request_uri;
}
server {
    listen 443 ssl http2;
location /afkwspath {
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection "upgrade";
  proxy_pass "http://localhost:<port>/afkwspath";
}
    
    server_name <domain>;
ssl_certificate /etc/letsencrypt/live/<domain>/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/<domain>/privkey.pem;
    ssl_session_cache shared:SSL:10m;
    ssl_protocols SSLv3 TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers  HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
location / {
      proxy_pass http://localhost:<port>/;
      proxy_buffering off;
      proxy_set_header X-Real-IP $remote_addr;
  }
}
````

## Congratulations

Congratulations! You have now Updated Hostactyl to Custom Domain. Now ahead over to the domain to get Dashboard.
