# Matinee

### About
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
#### Build the application

```
npm run build
```

### Requriements before running the application

Make a folder named ".env.local" where you need to put all the below mentioned api keys with the exact same variable name
<br>
<br>
NEXT_PUBLIC_API_KEY = API key from [TMDB](https://developers.themoviedb.org/3)


#### Deploy on [Local Host](http://localhost:3000)

```
npm start
```

#### If you want to run on development server

```
npm run dev
```

## Server Side

###Building Server

clone the following [Repository](https://github.com/deveshXm/matinee-movie-recommender)

###Running the Server

```
uvicorn main:app --reload
```

You can test the GET requests on [Local Host](http://localhost:8000/docs)




