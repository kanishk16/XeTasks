#!/bin/bash

# OS Details
lsb_release -a

# update your default packages
sudo apt update

# Install VSCode
sudo apt install software-properties-common apt-transport-https wget
wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
sudo apt update
sudo apt install code

# install git for me 
sudo apt install git
git --version
git config --global user.name "kanishk16"
git config --global user.email "kanishkkalra10@gmail.com"

# install heroku
sudo snap install --classic heroku
heroku --version

# install DOCKER


# install google chrome 
sudo apt install google-chrome-stable

#install LTS of node
sudo apt install nodejs
sudo apt install npm
nodejs -v
curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs

#fix dummy output problem
sudo apt-get remove alsa-base pulseaudio
sudo apt-get install alsa-base pulseaudio
sudo alsa force-reload


#install firebase
npm install --save firebase
npm install --save react-firebaseui
