{{#template name="intermediate-step15"}}

# Single Item Subscriptions

Right now, our `RecipeSingle` template is receiving the data from all of the recipes for the current user. To increase performance, we'll create a new `Meteor.publish();` function that will only return a single recipe item with that items `id`.

{{> DiffBox tutorialName="intermediate" step="15.1"}}

Watch: [Create a publication for single recipes](https://youtu.be/OyiocweKg2o "Level Up Tutorials: Intermediate Meteor Tutorial #15 - Youtube")

### Adding database security with check 

Whenever we pass data to our server, we want to ensure that data is what we expect. For the security of our app, we'll use the `check` package to ensure the `id` parameter being passed is indeed a `String`.

{{> DiffBox tutorialName="intermediate" step="15.2"}}

Watch: [Adding the check package](https://youtu.be/OyiocweKg2o?t=3m20s "Level Up Tutorials: Intermediate Meteor Tutorial #15 - Youtube")

### Subscribing to the single recipe publication

Now that we have our single recipe publication, we have to subscribe to it in our client side code. 

{{> DiffBox tutorialName="intermediate" step="15.3"}}

In our `client/recipes/RecipeSingle.js` file, we update the `self.subscribe` method to call the `singleRecipe` publication. Additionally, the publication is expecting to receive an `id` parameter to use in it's database query. 

We can reuse the `id` variable we created to pull the parameter from FlowRouter to pass as a secondary parameter in our `self.subscribe` method. 

Now when the single recipe template is accessed, it will only hold data for that individual recipe, making the app load time faster and overall more performative.

Watch: [Subscribing to the single recipe publication](https://youtu.be/OyiocweKg2o?t=2m1s "Level Up Tutorials: Intermediate Meteor Tutorial #15 - Youtube")
{{/template}}
