Welcome to the curency tracker app.

This is a work in development to showcase proficiency with React, forms and utilizing data from an api.js application

The api used can be found at: https://fixer.io

Changelog

07/24/2021:

- Implemented basic Header component

- Implemented basic functionality for the form component (changeHandler and onSubmit).

07/25/2021:

- Added a date picker to form component.

- Removed the onSubmit handler, anticipating that we will be displaying data dynamically as user enters a date rather than making them submit the form each time.

-Added very basic styling to the form

07/26/2021:

-Finished form element sans-styling.

-Moved state into App from Form component in order to access it in future components.

-set up basic useEffect hook. It is currently taking arguments from the form component to complete the api endpoint url and returning objects in the console after making the call (upon form update).