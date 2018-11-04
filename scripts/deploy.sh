mkdir -p ~/.ssh
echo "$UKOO_SSH_KEY" > ~/.ssh/id_rsa_ukoo_key
sudo chmod 600 ~/.ssh/id_rsa_ukoo_key
sudo apt-get install sshpass
sshpass -p "$UKOO_SSH_PASSWORD" ssh-add ~/.ssh/id_rsa_ukoo_key

npm install -g pm2
pm2 deploy production update