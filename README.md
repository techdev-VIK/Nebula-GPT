
# Nebula - GPT

## React + Vite

- Vite
- Tailwind for styling
- Header
- Login
- Sign Up
- Routing
- Form Validation
- useRef Hook
- Firebase Setup
- Deploy app in Prod
- Create signup in user api
- implement sign in user
- created redux store with userslice
- Implemented Signout
- Bug FIx - SignUp User, displayName and profile picture from null to real. It was null on initial render. In this change was made how how payload was given to store. Used in useeffect of Header
- If user is not logged in then dont let user access /browse page and redirect to signin page. And if logged in then redirect to /browse page automatically
- we unsubsribed to the onAuthStateChanged callback







## Features

- Login/Sign Up
    - Sign In / Sign up form
    - redirect to Browse Page
- Browse (after authentication)
    - Header
    - Main Movie
        - Trailer in Background
        - Title & Description
        - Movie Suggestions
            - Movie Lists * N
- Nebula GPT
    - Search Bar
    - Movie Suggestions