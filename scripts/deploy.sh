mkdir -p ~/.ssh
echo "$UKOO_SSH_KEY" > ~/.ssh/id_rsa_ukoo_key

npm install -g pm2
pm2 deploy production update