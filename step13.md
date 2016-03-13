{{#template name="intermediate-step13"}}

# Template Level Subscriptions

Let's refactor our Meteor.subscribe to have our subscripton send data only to the relevant template instead of all client templates.

Limiting which recipes in our collection flow to the client-side code helps our app load faster since it doesn't have to subscribe to data that isn't being used for that user.

Once the template is loaded, we subscribe to the correct data.

{{> DiffBox tutorialName="intermediate" step="13.1"}}

Here, `self.autorun` unsubscribes us from previous subscriptions the user may have loaded while navigating around the app visiting other templates.

Watch: [Create a template level subscription](https://youtu.be/MCoOTYNKX8A "Level Up Tutorials: Intermediate Meteor Tutorial #13 - Youtube")

### SubscriptionsReady

{{> DiffBox tutorialName="intermediate" step="13.2"}}

In our template, we use `Template.subscriptionsReady` to check to see if the data in our subscription is finished loading. Here we place it in an `#if/else` loop to display `Loading` text if the template subscription is not ready and displays the template data once it is.

Watch: [subscriptionsReady](https://youtu.be/MCoOTYNKX8A?t=4m13s "Level Up Tutorials: Intermediate Meteor Tutorial #13 - Youtube")

{{/template}}
