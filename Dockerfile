# ---------- Builder ----------
FROM python:3.12-slim AS builder

WORKDIR /app

ENV POETRY_VIRTUALENVS_IN_PROJECT=true \
    POETRY_NO_INTERACTION=1 \
    PIP_NO_CACHE_DIR=1

RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    git \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

RUN curl -sSL https://install.python-poetry.org | python3 -

ENV PATH="/root/.local/bin:$PATH"

# Copy dependency definitions first for Docker cache
COPY pyproject.toml poetry.lock ./

RUN poetry install \
    --only main \
    --no-root \
    --no-interaction \
    --no-ansi

# Copy only files required at runtime. Development files stay out of the image.
COPY mmdb_server ./mmdb_server
COPY db ./db
COPY update.sh ./update.sh

COPY etc/server.conf.sample ./etc/server.conf.sample

RUN cp /app/etc/server.conf.sample /app/etc/server.conf

RUN ./update.sh


# ---------- Runtime ----------
FROM python:3.12-slim AS runtime

LABEL authors="Erik Andri Budiman, Steve Clement"
LABEL optimized-by="Gordon, Rofly Antonio"

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    libmaxminddb0 \
    && rm -rf /var/lib/apt/lists/*

COPY --from=builder /app/.venv /app/.venv
COPY --from=builder /app/mmdb_server /app/mmdb_server
COPY --from=builder /app/etc /app/etc
COPY --from=builder /app/db /app/db

ENV PATH="/app/.venv/bin:$PATH" \
    PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

CMD ["python", "-m", "mmdb_server.mmdb_server"]