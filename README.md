# photo2code


## Flask:  
For local development:
1) Navigate to the flask folder  
`cd flask/`    

2) Activate virtual env  
`python -m venv env`  
`source env/bin/activate`  

3) Install requirements  
`pip3 install -r requirements.txt`

4) Run dev server  
`flask run`  

## Docker:  
Build services:
`docker-compose build`

Start the containers:
`docker-compose up`

To build and start containers:
`docker-compose up --build`

Remove containers and network:
 `docker-compose down -v`

Build the new image and spin up the two containers:

$ docker-compose up -d --build

Create the table:

$ docker-compose exec flask python run.py create_db


docker-compose exec db psql --username=hello_flask --dbname=hello_flask_dev
