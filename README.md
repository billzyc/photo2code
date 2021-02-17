# photo2code
https://photo2code.netlify.app/

An application that allows users to convert whiteboard and handwritten code to source code. Users can access and
download converted source code files from their account and then edit and compile them on their computer, enabling them to
quickly validate whiteboard solutions, use lecture slide code or have a repository for their handwritten code.

Built using Python , Flask , PostgreSQL , React , JavaScript , and Google Cloud Vision API . Account authentication
implemented using OAuth 2.0 and JWT .

# Local Development Setup. 

## Flask:  

First time local development set up:

1)  
`cd flask/`  
`python3 -m venv env`  
`cd ..`  
`pip3 install autoenv==1.0.0`  
``echo "source `which activate.sh`" >> ~/.bashrc``
`source ~/.bashrc`

3) create PSQL DB called "photo2code_dev". 

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
