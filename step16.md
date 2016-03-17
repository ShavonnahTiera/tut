{{#template name="intermediate-step16"}}

# User State Redirects in Routing

One thing you may have noticed is that wheter or not the user is logged in the default page is the `HomeLayout.html` template. We want to make it so when the user is logged in, they are automatically routed to their very own recipe book. On the flip side, when a user is not logged in, they can still access the Recipe Book page by going directly to the url. Let's change this to make our app more user friendly and secure.

### Automatically redirect logged in users

<!-- if Meteor action -->
{{> DiffBox tutorialName="intermediate" step="16.1"}}	

The built in `Meteor.userId();` function is super handy to check whether or not a user is logged in. Once we check to see if this returns true, we can use FlowRouters `.go();` function to route our logged in user to a page using the routes `name`. 

Watch: [Automatically redirect logged in users](https://youtu.be/aBiXUyJW0cs "Level Up Tutorials: Intermediate Meteor Tutorial #16 - Youtube")

### Redirect non-logged in users to the home page

At the top of our `lib/routes.js` file we'll make use of FlowRouter `triggers` to redirect non-logged in users to the home page, again using it's `.go();` function and calling the route by name.

{{> DiffBox tutorialName="intermediate" step="16.2"}}

Now, if you attempt to vist `localhost:3000/recipe-book` from an incognito window or while logged out, you'll see that you are redirected to the home page where the `HomeLayout.html` template is being rendered.

Watch: [Make sure logged out users are redirected to the home page](https://youtu.be/aBiXUyJW0cs?t=3m40s "Level Up Tutorials: Intermediate Meteor Tutorial #16 - Youtube")
{{/template}}
