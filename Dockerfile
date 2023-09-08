FROM mcr.microsoft.com/playwright:v1.34.3

RUN npm install -g artillery artillery-engine-playwright && \
        npm cache clean --force && \
        rm -rf /root/.cache && \
        rm -rf /ms-playwright/firefox* && \
        rm -rf /ms-playwright/webkit*

WORKDIR /app

# Copy your test configuration file and any necessary scripts
COPY . /app/

# Create a shell script to run the tests sequentially
RUN echo "#!/bin/sh" > run_tests.sh && \
    echo "for file in /app/*.yml; do" >> run_tests.sh && \
    echo "  artillery run \$file" >> run_tests.sh && \
    echo "done" >> run_tests.sh && \
    chmod +x run_tests.sh

# Define the command to run the shell script
CMD ["./run_tests.sh"]