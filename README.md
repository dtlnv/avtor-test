<h1 align="center">
  Weather App
</h1>

<p align="center">
  Online Demo: 
  <a href="https://admirable-kelpie-fe2d9f.netlify.app/">
    https://admirable-kelpie-fe2d9f.netlify.app/
  </a>
</p>

<p align="center">
  <img src="preview.gif" alt="Weather App" />
</p>

This project is a weather web application developed as a test assignment.

Created: March 2020

Last refactoring: July 2023 (Update npm dependencies, Design fixes)

## Test assignment

Create a weather application using React, Redux, and React Router.

Data for weather information can be fetched from the openweathermap.org or any other weather service.

The application features links in the header or footer for:
- Home page (/)
- Cities (/cities)
- News (/news)

The app has the following functionalities:
- Add/remove cities to the list of tracked cities (stored in Redux).
- Save the application state locally (update the store from previously saved data in localStorage).
- Automatically request and display weather based on the user's coordinates, which serve as the default location.

Any necessary data can be passed through Redux.

Design and styling are not essential for this task.

The final development result should be saved on GitHub with local commits by the developer.

## Note

The application is built using create-react-app. It works correctly in Webkit-based browsers (Chrome, Opera). In other browsers, such as FireFox and Safari, the default weather feature (your city's weather) might not work due to their geolocation policies.

## APIs Used

- Weather: openweathermap.org
- News: newsapi.org
- Cities: opencagedata.com (for search)


## Project Structure

- `src`
    - `components` - Application components, each in a separate folder.
    - `system` 
        - `App` 
            - `index.js` - Application entry point.
            - `test.js` - Test environment wrapper.
        - `Router` - Router for handling routes. 
    - `utils` - Utility tools, constants, functions, Redux, and global hooks.

## 🚀 Try yourself

<a href="https://admirable-kelpie-fe2d9f.netlify.app/">
Check online demo
</a>

or
1. Clone the repository and open the directory in terminal.
2. Run `npm ci` or `npm i`.
3. Run `npm start`.
4. Open <a href="http://localhost:3000/">http://localhost:3000/</a>
