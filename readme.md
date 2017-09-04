# Citation Practice Backend
NodeJS REST API for CHS citation practice that interfaces with Postgres

# Setup

### 1. Install this repo
```bash
git clone https://github.com/SamCymbaluk/citation-practice-backend.git
```

```bash
cd citation-practice-backend
```

```bash
npm install
```

### 2. Setup Postgres
First, [install Postgres on your system](http://postgresguide.com/setup/install.html) and create a user.
Next, create a new database and add the following tables:

##### admins
![](/docs/admins_schema.png "admins schema")

##### citations
![](/docs/citations_schema.png "citations schema")

##### classrooms
![](/docs/classrooms_schema.png "classrooms schema")

##### results
![](/docs/results_schema.png "results schema")

### 3. Create start script
Create a file named `start.sh` and copy the contents of `dev_start.sh` into it.
It should look like this:
```bash
#!/bin/bash

DB_HOST=127.0.0.1 DB_USER=postgres DB_PASSWORD=test01 DB_DATABASE=mla node src/index.js
```
Replace `DB_HOST`, `DB_USER`, `DB_PASSWORD`, and `DB_DATABASE` with your Postgres credentials

### 4. Fire 'er up!
To start up the backend, run:
```bash
./start.sh
```
If you are running it on a production machine, you should run the above command through [screen](https://help.ubuntu.com/community/Screen)
```bash
screen -S backend
./start.sh
Ctrl + A + D
```