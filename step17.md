{{#template name="intermediate-step17"}}

# Login &amp; Logout Redirecting

To further enhance our user experience we want to ensure they are redirected to their recipe book the instant they are logged in. In the previous lesson, we added a redirect for currently logged in users. If we were to logout and log in again, you'll see we are only redirected once we refresh our browser. 

We'll use the `gwendall:auth-client-callbacks` package to know the moment a user logs in and we can use it to redirect them to their recipe book. Once a user is logged out, we will redirect them to the homepage. 

{{> DiffBox tutorialName="intermediate" step="17.1"}}

Watch: [Login and Logout Redirecting ](https://youtu.be/rFpTwqfXE "Level Up Tutorials: Intermediate Meteor Tutorial #17 - Youtube")

{{/template}}
