FROM mariadb:latest

# passwords are
ENV MYSQL_DATABASE="Tinpet" \
    MYSQL_ROOT_PASSWORD="p" \
    MYSQL_USER="mysql_client" \
    MYSQL_PASSWORD="" \
    LANG=C.UTF-8

# run all the script at the boosting up of the container
COPY ./sql_scripts/ /docker-entrypoint-initdb.d/
