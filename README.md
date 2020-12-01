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
`docker-compose up -d --build`

Remove containers and network:
 `docker-compose down -v`

## Set environmental variables

Linux bash or Mac OS X:   
`export GOOGLE_CLIENT_ID=your_client_id`  
`export GOOGLE_CLIENT_SECRET=your_client_id`  

Windows:  
`set GOOGLE_CLIENT_ID=your_client_id`  