# Warbler

## (Live Site Pending)

## [GitHub Repo for backend](https://github.com/startinmerc/warbler-server)

#### A full-stack twitter clone built on:

* Mongo
* Express
* React
* Node
* Redux
* React-DOM
* Bootstrap

A twitter clone built initially as part of the Advanced Web Developer Bootcamp, extended and customised myself.

The site is built on a Node/Express API with a Mongo database, with React/Redux handling the front end.

It makes extensive use of Redux for API interactions and authentification, and Bootstrap for a base UI to build off.

Current features are user signup & signin, message creation and deletion, with full RESTful routing a main goal.

---

## Change Logs

#### Initial Setup
* Initial create-react-app
* Add dependencies

#### Redux Pt.1
* Create ActionTypes
* Add simple error reducer
* Add reducer to set current user
* Combine reducers
* Create store & use redux-thunk

#### Basic frontend
* Include Bootstrap
* Add basic navbar
* Include redux state in navbar
* Set color palette in CSS root

#### React-Router
* Add Router to App
* Convert links to `<Link>` components

#### Homepage
* Add homepage component
* Add custom styling

#### Main
* Add main component to contain all other components
* Inlcude React-Router routing

#### Authform
* Create basic form page
* Add internal state to monitor input fields
* Update routing in Main container to redirect to authform
* Pass text props from Main to Authform

#### Redux Pt.2 + API
* Create Auth setCurrentUser action
* Create API middleware to communicate with backend
* Add Promise to handle API calls
* Add authUser function to async call API auth route
* Pass in userData, set JSON web token
* setTokenHeader in API service to include auth

#### Redux Pt.3
* Add Error actionTypes
* Add + Remove error actions
* Add errors to redux state, middleware in Main
* Render errors in Main component

#### Redux Pt.4
* Include error actions in Auth actions
* Add logOut auth action
* Add handlers to config auth token

#### Authform Pt.2
* Add further fields to render on signup
* Add handleSubmit func
 * Prevent default
 * Call API with authType & data
 * Basic return for testing
* Conditionally render component on login/out

#### Localstore
* Store JWT in localstore to remember if logged in
* Check on load if user exists & log in
* Clear localstore on logout

#### Redux Pt.5 - Messages
* Add actionTypes
* Add load messages action
* Add fetchMessgages thunk to `GET "api/messages"`
* Add messages reducer
* Include message reducers in reducer index

#### Display messages
* Create MessageTimeline container, show if logged in
* Create MessageList container
* Add fetchMessages to MessageList
* Map out messages to MesageItem
* Create MessageItem component to render message
* include Moment to format message post date

#### Styling
* Bootstrap column layout
* Add Bootstrap classes to components
* Move some HTML around as needed
* Add custom CSS

#### User rendering
* Add UserAside card to display current user
* Pass in defaults for missing data
* Also pass to MessageList

#### Higher Order Components
* Make HOC to handle authentication
* Take isAuthenicated from Redux
* Only render passed component if auth

#### New Message Form
* Render basic new message form w/ state
* Handle onSubmit
* Style w/ Bootstrap
* Add alert to show errors

#### Redux Pt.6
* Add postNewMessage action/api call
* Add removeHessage action/api call
* Add to messages reducer
* Add actions to MessageList, pass to MessageItem

#### MessageItem Delete
* Add delete message button, bind `this`
* Pass click handler from MessageList
* Show/hide on isCorrectUser
* Show/hide on hover
* Styling

#### Styling
* Add message length counter to NewMessage
* Reformat message date as fromNow
* Column resize
* Restyle navbar

#### Footer
* Add basic stateless footer
* Include in App
* Add height to HTML, flex to `#root` to ensure min-page height & footer positioning

#### Icon
* Add app icon as SVG Component
* Include where needed
* Add default props for styling
* Style as appropriate

#### Responsive styling
* Add column size breakpoints
* Add display breakpoins

#### Redux Pt.7
* Edit action

---

### To Do:

* Add individual message route
* Add edit message malarkey
* Change new message page to populate with text if editing
* Also change link to put request if editing