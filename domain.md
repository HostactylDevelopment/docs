---
outline: deep
---

# Setting up a Webserver

1) Login to your DNS manager, point the domain you want your dashboard to be hosted on to your VPS IP address. (Example: dashboard.domain.com 192.168.0.1)

2) Run `apt install nginx && apt install certbot`

3) Run `ufw allow 80 and ufw allow 443` on the vps

4) Run certbot certonly -d `<Your Domain>` then do 1 and put your email

5) Run `nano /etc/nginx/sites-enabled/hostactyl.conf`

6) Paste the configuration at the bottom of this and replace `<domain>` with the domain you want it to run on and `<port>` with the port it is already running on. By default that is 3000.

7) Run `systemctl restart nginx`

## Congratulations

Congratulations! You have now Updated Hostactyl to Custom Domain. Now ahead over to the domain to get Dashboard.
