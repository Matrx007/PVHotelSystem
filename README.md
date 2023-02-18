# Before starting ..
 .. the frontend must be built from source.

```sh
cd frontend
npm i
npm run build
```

# Start the server ..
 .. using `python3 src/server.py`


# Dependencies

## MariaDB Connector/C
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

## Python dependencies
- flask
- flask_cors
- mariadb