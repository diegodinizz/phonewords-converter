## Phonewords Converter

https://phonewords-converter.herokuapp.com

The Phonewords Converter is a Full Stack Application built with Node and Express as Backend and React, Redux and Styled Components as Frontend, and hosted on Heroku.

<img width="1680" alt="Screenshot 2021-04-21 at 15 08 15" src="https://user-images.githubusercontent.com/47988806/115567783-89d1b600-a2b3-11eb-9404-139b3dfcdee8.png">

## Description

This application is a converter from phone numbers to [Phonewords](https://en.wikipedia.org/wiki/Phoneword). You can input numbers, and it will give you a list of all the possible phonewords for that specific phone number.

The frontend has validation, checking that the phone number are only integers (2-9) digits and/or spaces, is not empty and maximum length 6, and shows all the corresponding phone words in a list.

The backend is an **API developed with Node / Express** that exposes an endpoint for a given number and then returns all the possible phonewords for that number. Also, it checks for valid numbers and possible errors.

## Installation

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

## Project structure

To get started:

Inside the project folder:

```
npm install
```

Inside the "client" folder:

```
npm install
```

## Start Server:

Inside the project folder:

```
npm run dev
```

It will run the server and the frontend concurrently in the same tab, and if one process fails, others will die.

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Production:

```
npm run build
```

## Framework used

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), [Redux](https://github.com/reduxjs/react-redux), [Styled Components](https://github.com/styled-components/styled-components) and [Express](https://expressjs.com). 

## Hosted

The project is hosted on [Heroku](https://www.heroku.com/) at https://phonewords-converter.herokuapp.com

## Reflection

This was a three days-long project built as a short technical exercise. The project goal included is to implement a number-to-word list converter as a Node backend and React/Redux frontend.

Originally I wanted to build an application that allowed users to input numbers, and it will give you a list of all the possible phonewords for that specific phone number. I started this process by building and working on the backend logic. After this using the `create-react-app` boilerplate, then adding `Redux` to manage the state flow in the App, and `styled-components` to write actual CSS code to style the components.

One of the main challenges I ran into was to converts a given numeric string into a list of corresponding words in the style of T9. This leads me to spend a few hours working on the API logic and a better way to display the information coming from the API. Due to project time constraints, I had to decide on a simplified design to demonstrate a better visualisation of the pieces of information that I had available.

At the end of the day, the technologies implemented in this project are Node and Express for Backend and React, Redux and Styled Components for the Frontend. I choose to use few frameworks to minimize initial setup and invest more time diving into logic technological rabbit holes. In the next iteration, with more time, I would like to implement filtering to include only real words based on a suitable word list, type safety method and possibly unit tests.
