FROM ubuntu:latest
LABEL authors="jsvgo"

ENTRYPOINT ["top", "-b"]