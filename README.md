# Docker Nodejs Vue Todo list example

> Simple example of a dockerized Node/Vue/Mongo app

## Quick Start

First you need to create a .env file in the frontend directory and add a variable.

```bash
VUE_APP_API_URL=http://localhost:3000
```

Start the application

```bash
# Run in Docker
docker-compose up
# use -d flag to run in background

# Tear down
docker-compose down

# To re-build
docker-compose build
```
