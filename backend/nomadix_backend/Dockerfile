FROM python:3.12.2-slim-bullseye

RUN mkdir /code
WORKDIR /code
COPY . /code/

RUN dir

# WORKDIR /usr/src/nomadix_backend

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt-get update && apt-get install -y netcat

RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY entrypoint.sh /code/entrypoint.sh

