# photo2code


## Flask:  
For local development:
1) Navigate to the flask folder  
`cd flask/`  
`python3 -m venv env`  
`cd ..`  



2) run   
`pip3 install autoenv==1.0.0`  
``echo "source `which activate.sh`" >> ~/.bashrc``
`source ~/.bashrc`

3) Setup local dev psql  
See PSQL section below  

4) Run dev server  
`cd flask/`  

To manually activate the virtual environment:
`source env/bin/activate`

`pip3 install -r requirements.txt`  
Set Google Client Id/Secret environment variable.  
`python3 manage.py db upgrade`  
`flask run`  

## PSQL:

macOS:  
1) install and set up psql:  
following instructions on https://postgresapp.com/ 

1) enter 
`psql` into terminal  

`create database photo2code_dev;` to create db

`\q` to exit


For Linux

1) install psql:  

On Ubuntu:  
`sudo apt update` 
`sudo apt install postgresql postgresql-contrib`  

Other distributions:  
or see https://www.postgresql.org/download/  

2) run 
`sudo -i -u postgres`  

`psql`  

`create database photo2code_dev;` to create db  

`\q` to exit  

## Docker:  
Build services:
`docker-compose build`

Start the containers:
`docker-compose up`

To build and start containers:
`docker-compose up -d --build`

Remove containers and network:
 `docker-compose down -v`

## Set environmental variables

Linux bash or Mac OS X:   
`export GOOGLE_CLIENT_ID=your_client_id`  
`export GOOGLE_CLIENT_SECRET=your_client_id`
`export GOOGLE_APPLICATION_CREDENTIALS="[PATH]"`

Windows:  
`set GOOGLE_CLIENT_ID=your_client_id`  
