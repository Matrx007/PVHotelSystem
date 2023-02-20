# About

Online hotel booking system made for ASI Karikas 2023 (Feb.) competition.

Back-end: flask, Python (Rainis Randmaa)

Front-end: React (Andrus Vaher)

# Cloning & running

## Cloning submodules
```sh
git submodule init
git submodule update
```

## Setting up database

Default configuration (can be changed in src/db.py):

- Database must be running at localhost
- Database must have user called 'root'

Database tables and example data can be loaded from 'dump.sql' file

Dump includes two accounts with username 'client' and 'admin', both of which have password 'abc'

Database 'root' user password must be stored in the project root folder in 'db_password.txt' file, without any other characters (new lines or whitespaces at the end or beginning)


## Dependencies

### MariaDB Connector/C
Required for Python dependency 'mariadb'

```
wget https://r.mariadb.com/downloads/mariadb_repo_setup
```
```
echo "06c500296164e49d0cc8c08ec7b0303445f3ddd7c864870d9e9ae6d159544d0a  mariadb_repo_setup" \
    | sha256sum -c -
```
```
chmod +x mariadb_repo_setup
```
```
mariadb --version
```
```
sudo ./mariadb_repo_setup \
   --mariadb-server-version="mariadb-<YOUR VERSION>"
```
For example:
```
sudo ./mariadb_repo_setup \
   --mariadb-server-version="mariadb-10.8.6"
```

### Python dependencies
- flask
- flask_cors
- flask_sqlalchemy
- mariadb

## Building React front-end

```sh
cd frontend
npm i
npm run build
```

## Start the server ..
 .. using `python3 src/server.py`