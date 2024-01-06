function withAuth(req, res, next) {
    // If the user is not logged in, redirect them to the login page
    // We'll assume the login status is stored in req.session.logged_in
    if (!req.session.logged_in) {
        // Respond with an unauthorized status if the user is not logged in
        res.status(401).json({ message: "Please log in to view this resource" });
    } else {
        // If the user is logged in, proceed with the next middleware
        next();
    }
}

module.exports = withAuth;
