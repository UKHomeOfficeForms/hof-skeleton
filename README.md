# HOF Skeleton

The purpose of this project is to provide a very simple project which contains the latest version of the HOF framework, and necessary dependencies to get started with building a HOF form. 

## Pre-Requirements

Using this project, and therefore the HOF framework, requires [Redis](https://redis.io/). Instructions on [how to install redis on OSX](https://medium.com/@petehouston/install-and-config-redis-on-mac-os-x-via-homebrew-eb8df9a4f298#.jcwwhv7oz).

Further details of HOF requirements can be found [here](https://ukhomeofficeforms.github.io/hof-guide/HOF_Framework/1-getting-started).

https://ukhomeofficeforms.github.io/hof-guide/HOF_Framework/1-getting-started

## Getting Started

1. Clone this repo `git clone git@github.com:UKHomeOfficeForms/hof-skeleton.git` into a destination folder of your chosing. 

2. Update the git remote to point to the repository you want to push the code to: `git remote set-url origin <NEW_GIT_URL_HERE>`.

3. Install the dependencies `yarn install`

4. Make or copy, or change the `.env.example` file to `.env` (this contains some sample env configuration for the application to work) 

5. Run the service in dev mode `yarn start:dev`

6. Access the service locally on `http://localhost:8080`

### Containerised App 

If you want to run the application in a containerised setup, there is a `docker compose` file ready to use. This will build the container image based on the dockerfile and run it alongside an instance of redis on the same shared network:

`docker compose up`

Once all services are up successfully, access the service locally on `http://localhost:8080`

## Dependencies

- HOF v22.7.2
- Jest v29.7.0
- eslint v8.56.0
- eslint-config-hof v1.3.4
