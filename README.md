# photo2code


## Flask:  

First time local development set up:

1)
`cd flask/`  
`python3 -m venv env`  
`cd ..`  
`pip3 install autoenv==1.0.0`  
``echo "source `which activate.sh`" >> ~/.bashrc``
`source ~/.bashrc`

3) create PSQL DB called "photo2code_dev"

4) Run dev server  
`cd flask/`  
`pip3 install -r requirements.txt`  
Set Google Client Id/Secret environment variable (See section below).  
`python3 manage.py db upgrade`  
`flask run`  



Misc:  

To manually activate the virtual environment:
`source env/bin/activate`  

Running file migrations:  
`cd flask`  
To initialize Alembic - `python3 manage.py db init`  
Create migration - `python3 manage.py db migrate`  
Apply upgrades - `python3 manage.py db upgrade`  

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


## React

For local dev:  
`cd react-app`
`npm install`
`npm start`  
