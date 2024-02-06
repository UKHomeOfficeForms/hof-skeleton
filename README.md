# Hof- skeleton
This is to get you started with HOF. Use this to create a new project.

## Install prerequisites

Step 1 : Install Node Version Manager

        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
        # or
        wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
        # or
        brew install nvm

    Check the version   nvm --version

Step 2 : nvm install 18.19.0

Step 3: nvm use 18.19.0

Step 4: npm i -g yarn

Step 5: yarn

Step 6: yarn run start:dev

- [Node.js](https://nodejs.org/en/) - Tested against LTS
- NPM (installed with Node.js) - Works with versions 2 and 3
- [Redis server](http://redis.io/download) running on the default port


### Replacing existing project and settings with a prefered project name

- In the apps folder rename the existing folder 'hof-project'.
    
    > Example   apps/hof-project -->  apps/name-of-project .

- navigate to the index.js file on line-4 replace 'hof-project'.
    
    > Example  name: 'hof-project' -->   name: 'name-of-project'.

- navigate to hof-settings.json on line-8 replace the app route.
    
    > Example  "routes": [
                    "./apps/hof-project"    -->  "./apps/name-of-project".
                ],
