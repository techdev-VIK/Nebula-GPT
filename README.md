
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
- Unsubsribed to the onAuthStateChanged callback
- Add values to the contants file
- Register TMDB API & create an app and get access token
- Get data from TMDB now playing movies list API
- Custom Hook for Now Playing Movies
- Create movieSlice
- Update Store with movies Data
- Planning for MainContainer & SecondaryContainer
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Youtube Video
- Make it autoplay and mute and hide controls
- Tailwind to create gradient and view like Netflix





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