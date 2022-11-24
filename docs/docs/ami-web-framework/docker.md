# Docker

## Learn how to deploy with Docker

The AMI Team published an official **Docker** image for the AMI Web Framework.

The repository for the image is accessible [here](https://hub.docker.com/r/amiteam/web-framework).

To get started, simply write this command in your terminal :

```bash
docker pull amiteam/web-framework
```

## Usage with Docker Compose

A docker compose file example is available on [Github](https://github.com/ami-team/AMIDemo/blob/master/docker-compose.yml).

```docker
version: "3.9"
services:
    awf:
        image: amiteam/web-framework:latest
        container_name: ami-stack-web-framework
    ports:
        - 80:80
    volumes:
        - ./data-web-framework/:/usr/share/nginx/html/
    environment:
        AMI_HOME_PAGE_TITLE: Demo
        AMI_HOME_PAGE_ENDPOINT: http://localhost:8080/AMI/FrontEnd
```

You can pass two environment variables to your docker-compose.yml file to adjust the title of your homepage and the endpoint.

From there, you can access to the frontend of your application :

`http://localhost:80/`
