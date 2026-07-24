function isLoggedIn(req, res, next) {
    console.log("===== isLoggedIn =====");
    console.log("Authenticated:", req.isAuthenticated());
    console.log("User:", req.user);

    if (!req.isAuthenticated()) {
        console.log("Returning 401");
        return res.status(401).json({
            message: "Please login first"
        });
    }

    console.log("Calling next()");
    next();
}

module.exports = { isLoggedIn };
module.exports = {
    isLoggedIn,
};

