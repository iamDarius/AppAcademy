# React Router


<BrowserRouter> provides your app access to the `react-router-dom` library.
<Route> connects specific URL paths to specific components you want rendered
<Switch> wraps several route elements, rendering only one even if several match the current URL
<Link> or <NavLink> are used to create links with relative paths to routes in your application (like /users/1)
    - Link can take two props: `to` and `Onclick`
    - Links are rendered as <a> elements
<Redirect> used to redirect a user to another path (e.g., a login page when the user is not logged in)
React Router's useHistory hook is used to update a browser's URL programmatically.

