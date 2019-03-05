export function authHeader() {
    // Set the auth header with the JWT token

    let user = JSON.parse(localStorage.getItem("user")).user;

    if (user && user.Token) {
        return { "Authorization" : "Bearer " + user.Token };
    }
    return {};
}