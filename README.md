# Dockerized Artillery Test

This repository contains a Dockerized Artillery test for load testing a web application. With this setup, you can easily run the Artillery test in a container, encapsulating the test environment and dependencies.

## Prerequisites

Before running the Dockerized Artillery test, ensure you have the following installed on your system:

- Docker
- Node.js (only if you want to modify and run the Artillery test script)

## Usage

### Build the Docker Image

1. Clone this repository to your local machine.

   git clone https://github.com/SgtMarmite/Data-App-stress-test.git

2. Navigate to the project directory.

   cd Data-App-stress-test

3. Build the Docker image.

   docker build -t my-artillery-test .

4. Execute the Artillery test inside a Docker container.

   docker run my-artillery-test

The Artillery test will run inside the container, and the results will be displayed in your terminal.

### Customizing the Test

If you want to customize the Artillery test script or configuration, you can modify the following files:

- hello-world.yml: This YAML file contains the test configuration.
- flows.js: This JavaScript file contains the test script.

Make your changes, rebuild the Docker image, and rerun the container to test your custom configuration.

## Acknowledgments

- Artillery - The open-source load testing toolkit used in this project.
- Docker - The containerization platform.
