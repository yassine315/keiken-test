# keiken-test
## keiken-frontend
`cd keiken-frontend`\
`ng build --prod`
### with docker
`docker build -t keiken-frntend .`\
`docker run -it --rm -p 80:80 angular-app`
## keiken-backend
`cd keiken-backend`\
`mvn package`
### with docker
`docker build -t springio/gs-spring-boot-docker .`\
`docker run -p 8080:8080 springio/gs-spring-boot-docker`
## keiken with docker compose
`cd "Test Keiken"`\
`docker-compose up`
