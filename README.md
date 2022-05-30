# Matinee

### About
Hello Everyone!
I made this Project under MS ENGAGE 2022 Program.<br>
I have used the following Technologies in this Project.<br>

##### FRONT-END
<ul>
  <li>Node Js v(16.15.0)</li>
  <li>Tailwind CSS v(2.0)</li>
  <li>TMDB Api</li>
</ul>

##### BACK-END
<ul>
  <li>Python </li>
  <li>Fast API </li>
</ul>



A nextjs application to watch movies and get recommended based on your preferences.
[matinee](https://matinee.vercel.app/)

### Api

This application fetches data from [The Movie Database](https://www.themoviedb.org/)

### API Documentation

To View all available methods you can go to TMDB API documentation [TMDB Documentation](https://developers.themoviedb.org/3)

## Installation

### Requirements

You should have the following installed in your system

<ul>
  <li>Node (latest)</li>
  <li>Python (latest)</li>
</ul>

#### Clone the Repository
```
git clone https://github.com/deveshXm/matinee.git
```
#### Install npm dependencies

```
npm install
```

### Requriements before running the application

Make a file named ".env.local" in the root where you need to put all the below mentioned api key with the exact same variable name
<br>
<br>
NEXT_PUBLIC_API_KEY = API key from [TMDB](https://developers.themoviedb.org/3)

#### Build the application

```
npm run build
```

#### Deploy on localhost:3000

test email - test@gmail.com
test password - 123456

```
npm start
```

#### If you want to run on development server

```
npm run dev
```

## Server Side

### Building Server

Go to the following repository and follow the instructions mentioned in ReadMe [Repository](https://github.com/deveshXm/movie-recommendation-algorithm)

### Running the Server

simply go to cmd and type the follwing command
```
uvicorn main:app --port 8000 --reload
```

You can test the GET requests on localhost:8000/docs


#### I was not able to deploy on heroku the FASTApi as my app needed more than 1 GB RAM to run

