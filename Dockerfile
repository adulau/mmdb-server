FROM ubuntu:24.04
LABEL authors="Erik Andri Budiman, Steve Clement"
LABEL optimized-by="Gordon"
WORKDIR /app
COPY . .

# Prepare to install required packages
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    git \
    nano \
    python3 \
    python3-pip \
    wget \
    && rm -rf /var/lib/apt/lists/*

# Update the database
RUN chmod +x db/update.sh && db/update.sh

# Installing the Application
ENV PATH=$PATH:/root/.local/bin
RUN curl -sSL https://install.python-poetry.org | python3 - \
    && poetry install --no-interaction --no-ansi \
    && cp /app/etc/server.conf.sample /app/etc/server.conf

ENTRYPOINT ["poetry", "run", "serve"]
