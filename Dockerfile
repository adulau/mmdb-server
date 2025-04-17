FROM ubuntu:24.04
LABEL authors="Erik Andri Budiman"
WORKDIR /app
COPY . .

## Prepare to install require packages
RUN apt update \
    && apt install -y --no-install-recommends nano git wget curl python3 python3-pip

## Update the database
RUN cd db \
    && chmod +x update.sh \
    && ./update.sh

## Installing the Application
ENV PATH=$PATH:/root/.local/bin
RUN curl -sSL https://install.python-poetry.org | python3 - \
    && poetry install \
    && cp /app/etc/server.conf.sample /app/etc/server.conf

ENTRYPOINT ["poetry", "run", "serve"]
