FROM mcr.microsoft.com/playwright:v1.34.3

RUN npm install -g artillery artillery-engine-playwright && \
        npm cache clean --force && \
        rm -rf /root/.cache && \
        rm -rf /ms-playwright/firefox* && \
        rm -rf /ms-playwright/webkit*

WORKDIR /app

# Copy your test configuration file and any necessary scripts
COPY hello-world.yml /app/
COPY flows.js /app/

# Define the command to run your Artillery test
CMD ["artillery", "run", "hello-world.yml"]
