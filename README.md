# Honeypot System
An example demonstrating a simple honeypot system with logging mechanism to detect XSS and SQLi queries. 
The system consists of a webpage, a classification model, and a logging mechanism to correspondingly warn about the malicious queries.


# Set up 

## Running the backend

Install MySQL DB on your machine, configure it, create a user. Add the DB info in `backend/src/config.py` file. 

Create a Users table.

Create a virtual enironment

```
python -m venv env

source env/bin/activate
```
Install the requirements

```
cd backend

pip install -r requirements.txt
```

Run the service

```
python app.py {port-number}
```

## Running the frontend

Make sure to have yarn installed on your machine.

```
cd frontend

yarn start
```
This will run the project on port 3000 by default.


