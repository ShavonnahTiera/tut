{{#template name="intermediate-step25"}}

# Toggle the New Recipe Form

The last major customization to our user experience we are going to tackle is toggling the form to create a new recipe. It does not always have to be there and adding a button to toggle when the form shows makes more sense and takes up less space.

Watch: [Wrapping Up](https://youtu.be/iYm1pbeYAm0 "Level Up Tutorials: Intermediate Meteor Tutorial #25 - Youtube")

### Add a toggle buttons

At the top of our `Recipes.html` template we add a button to open the new recipe form when clicked.
<!-- button -->
{{> DiffBox tutorialName="intermediate" step="25.1"}}

The opposite toggle button will be a close button that resides in side of our `NewRecipe` template.
<!-- close button -->
{{> DiffBox tutorialName="intermediate" step="25.2"}}

Watch: [Add a close button to the new recipe form](https://youtu.be/iYm1pbeYAm0?t=2m15s "Level Up Tutorials: Intermediate Meteor Tutorial #25 - Youtube")

### Setting a Sesson variables

We want the toggle action to happen between the `New Recipe` button and the close `x` button. Since this form is not specific to a particular template, we can use a session variable to handle this action. 

<!-- session to close -->
{{> DiffBox tutorialName="intermediate" step="25.3"}}

Here we set a session named `newRecipe` inside of a click event for the close button on the new recipe form.

Watch: [Add a session variable](https://youtu.be/iYm1pbeYAm0?t=2m55s "Level Up Tutorials: Intermediate Meteor Tutorial #25 - Youtube")

We set another session named `newRecipe` inside of a click event for the new recipe button.
<!-- recipes btn -->
{{> DiffBox tutorialName="intermediate" step="25.4"}}

Watch: [Add a session variable to the new recipe button](https://youtu.be/iYm1pbeYAm0?t=4m40s "Level Up Tutorials: Intermediate Meteor Tutorial #25 - Youtube")

Now, we can use the `raix:handlebar-helpers` package once again to create a custom template helper for our session variable inside of our html template.
<!-- session helper -->
{{> DiffBox tutorialName="intermediate" step="25.5"}}

We wrap the form inside of an `if/else` helper to show the `NewRecipe` templage if the session variable is `true`. If the session variable is false, the button is shown.

Watch: [Add a session helper to the Recipes.html template](https://youtu.be/iYm1pbeYAm0?t=6m35s "Level Up Tutorials: Intermediate Meteor Tutorial #25 - Youtube")

That does it for our Intermediate Meteor Tutorial. There are lots of more features and UI/UX design elements you can add to make this app ready for production. Take some time to:

- Add more information about recipes to the 'View Details' page; 
- Set active routes on the navigation items so that the current navigation link is highlighted
- Add transition animations on the toggled states.
{{/template}}