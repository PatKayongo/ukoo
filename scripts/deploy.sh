mkdir -p ~/.ssh
# echo "$UKOO_SSH_KEY" > ~/.ssh/id_rsa_ukoo_key
echo "$UKOO_SSH_KEY_PUB" > ~/.ssh/id_rsa_ukoo_key.pub
sudo chmod 600 ~/.ssh/id_rsa_ukoo_key.pub
# eval `ssh-agent -s`
# sudo ssh-add ~/.ssh/id_rsa_ukoo_key

npm install -g pm2
pm2 deploy production update