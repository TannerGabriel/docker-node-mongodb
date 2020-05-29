# Docker Nodejs Vue Todo list example

> Simple example of a dockerized Node/Vue/Mongo app

## Quick Start

The external IP is required for the website to access the API from other PCs. For that, I included a shell script that automatically gets your IP Address on Linux, or lets you add a custom one if you are on Windows.

Start the application

```bash
# Building the application using the external IP as an Argument
./build-docker.sh

# Running the application in Docker
docker-compose up
```
