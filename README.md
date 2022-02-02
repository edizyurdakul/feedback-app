# Feedback App

My goal was to learn more about managing global state, event, and prop drilling.

## How to navigate this project

- Somewhat complex react global context: [https://github.com/edizyurdakul/feedback-app/blob/main/src/context/FeedbackContext.js](https://github.com/edizyurdakul/feedback-app/blob/main/src/context/FeedbackContext.js)
- Simple, modular and accessible component library Chakra UI https://github.com/edizyurdakul/feedback-app/blob/main/src/theme.js
- The application fetches data from the Heroku JSON-Server creating a fake API endpoint: [https://github.com/edizyurdakul/feedback-app-json-server](https://github.com/edizyurdakul/feedback-app-json-server)

## Why I built the project this way

- I didn't use a state management library like Redux on purpose. For this app using react context API is sufficient. I realized that more and more projects don't use Redux anymore since react context API are often used for global state management.
- Main focus of the project was to build strictly frontend. That's why I decided to use an JSON-Server as a fake API endpoint rather to create a backend server.

## If I had more time I would change this

- Refactor some of the code. Especially this part: [https://github.com/edizyurdakul/feedback-app/blob/main/src/components/FeedbackItem.jsx](https://github.com/edizyurdakul/feedback-app/blob/main/src/components/FeedbackItem.jsx)
- Add end-to-end tests with Cypress.
- Add ESLint, Husky, and Prettier

## Available Scripts

**`npm start`**

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000/) to view it in your browser.

**`npm run build`**

Builds the app for production to the `build` folder.

## Acknowledgements

- Inspired by [Brad Traversy](https://www.traversymedia.com/) from react front to back course project

## Contact

Created by [@Edizyurdakul](https://edizyurdakul.com/) - feel free to contact me!

## License

This project is open source and available under the MIT license.
