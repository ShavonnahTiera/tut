{{#template name="intermediate-step24"}}

# Scoped Reactivity with Reactive Vars

In our app, once a user clicks the edit icon in one recipe, it will toggle the update form for each recipe in our list. In order to scope the edit toggle to each unique recipe, we'll create reactive variables for the recipes.

Let's start by adding the `reactive-var` package.

<!-- add package -->
{{> DiffBox tutorialName="intermediate" step="24.1"}}
Watch: [Add the reactive-var package](https://youtu.be/0MgFzsQujFw?t=2m3s "Level Up Tutorials: Intermediate Meteor Tutorial #24 - Youtube")

Reactive variables are similar to session variables, except that they are connected or scoped to the template. We'll create a variable once our template is created within the `onCreated` method.

<!-- on created -->
{{> DiffBox tutorialName="intermediate" step="24.2"}}

Here we create a variable `this.editMode` assigned to a `new ReactiveVar();` who's value is `false.

Watch: [Create a new reactive variable](https://youtu.be/0MgFzsQujFw?t=1m13s "Level Up Tutorials: Intermediate Meteor Tutorial #24 - Youtube")

To access and update `this.editMode`, we pass the `event` and `template` parameters to the click event on the pencil in order to get access to the specific recipe `template` registering the click event. Once we have the ability to call the `editMode` reactive variable on a specific template, we `set` the `editMode` to the opposite `!` value of what we retrieve when we invoke the `get();` function.

{{> DiffBox tutorialName="intermediate" step="24.3"}}

In other words, we initialized the reactive var by setting it to true when the template was created. Once the pencil icon is clicked, it sets the value of the reactive var to the opposite of the value it was last and does this for each recipe template individually.

Watch: [Update the click event to use the reactive var](https://youtu.be/0MgFzsQujFw?t=3m13s "Level Up Tutorials: Intermediate Meteor Tutorial #24 - Youtube")

### Adding a template helper to toggle the update form

Since we're now using a reactive variable instead of a session variable, we can update our recipe template to use a normal template helper and register that helper in our JavaScript.
{{> DiffBox tutorialName="intermediate" step="24.4"}}

Watch: [Update the template helper to editMode](https://youtu.be/0MgFzsQujFw?t=4m36s "Level Up Tutorials: Intermediate Meteor Tutorial #24 - Youtube")

In our helper, we only need to return the selected templates edit mode reactive variable.

{{> DiffBox tutorialName="intermediate" step="24.5"}}

Watch: [Register a helper for editMode](https://youtu.be/0MgFzsQujFw?t=4m56s "Level Up Tutorials: Intermediate Meteor Tutorial #24 - Youtube")

{{/template}}