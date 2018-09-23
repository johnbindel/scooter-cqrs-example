# Scooter CQRS Example App

The goal of this application is to demonstrate a basic CQRS system in Docker.  

There is a read model and a write model.  

The write API is used for commands.  The read API is used for queries.  

## Prerequisites

Docker
Docker-Compose

Hosts file entry for scooters: `127.0.0.1 scooters`


## How to run

From the src folder, run `docker-compose up --build`  

Then to access the application:

Read API: http://scooters:10300/read  
Write API: http://scooters:10300/write  

Read DB: http://scooters:10300/read-db  
Write DB: http://scooters:10300/write-db  
