const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const User = require("../models/User");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if user already exists
        let user = await User.findOne({
          googleId: profile.id,
        });

        if (user) {
          return done(null, user);
        }

        // Check if email already exists
        user = await User.findOne({
          email: profile.emails[0].value,
        });

        if (user) {
          user.googleId = profile.id;
          await user.save();

          return done(null, user);
        }

        // Create a new Google user
        user = new User({
          googleId: profile.id,
          username: profile.emails[0].value,
          name: profile.displayName,
          email: profile.emails[0].value,
        });

        await user.save();

        return done(null, user);
      } catch (err) {
        return done(err, null);
      }
    },
  ),
);
