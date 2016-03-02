{{#template name="intermediate-step23"}}

# Deleting Recipes and Session Helpers

In the last step, we created a form to update our recipes, now let's add some user interface elements to hide and show the  update form as we need it.

Watch: [Deleting Recipes and Session Helpers](https://youtu.be/qRzMkj1L6z0 "Level Up Tutorials: Intermediate Meteor Tutorial #23 - Youtube")

Let's begin adding a Font Awesome icons to our recipe to handle deleting a recipe.
<!-- trash icon -->
{{> DiffBox tutorialName="intermediate" step="23.1"}}

We can wire up the icon to delete the `Recipe` item when a user 'clicks' on the trash icon. Since we are deleting a record from the database, let's create a method that we can later call in a click event.

<!-- method -->
{{> DiffBox tutorialName="intermediate" step="23.2"}}

Watch: [Create a method to delete a recipe](https://youtu.be/qRzMkj1L6z0?t=3m11s "Level Up Tutorials: Intermediate Meteor Tutorial #23 - Youtube")

And call the `deleteRecipe` method on the client in a click event.
<!-- recipe.js -->
{{> DiffBox tutorialName="intermediate" step="23.3"}}

Watch: [Call the delete method when a user clicks the trash icon](https://youtu.be/qRzMkj1L6z0?t=4m10s "Level Up Tutorials: Intermediate Meteor Tutorial #23 - Youtube")

### Editing Recipes

We'll work through a similar development process to add a pencil icon to the recipes for editing. When the user clicks on the pencil icon, it will toggle the update form.
<!-- pencil icon -->
{{> DiffBox tutorialName="intermediate" step="23.4"}}

Watch: [Call the delete method when a user clicks the trash icon](https://youtu.be/qRzMkj1L6z0?t=5m4s "Level Up Tutorials: Intermediate Meteor Tutorial #23 - Youtube")

After we add the pencil icon, we have to style it to place it inline with the trash icon and stand out from the background.
<!-- add css -->
{{> DiffBox tutorialName="intermediate" step="23.5"}}

Watch: [Add styles to the pencil icon](https://youtu.be/qRzMkj1L6z0?t=5m24s "Level Up Tutorials: Intermediate Meteor Tutorial #23 - Youtube")

### Toggle the update form with the edit icon

To show the update form only when we want to edit a recipe, we'll use a session variable to set the view state. We'll take advantage of the `raix:handlebar-helpers` package to define custom spacebars helpers grab session variable within a template helper without having to define the helper in JavaScript.

<!-- html -->
{{> DiffBox tutorialName="intermediate" step="23.6"}}

Watch: [Add a custom helper to the template](https://youtu.be/qRzMkj1L6z0?t=6m54s "Level Up Tutorials: Intermediate Meteor Tutorial #23 - Youtube")

Next, we add a click event to the recipe and setup a session variable named `editMode` with a value that is the opposite of `editMode` when the session reads the current status of the session variable. The default value is set to false.
<!-- pencil event -->
{{> DiffBox tutorialName="intermediate" step="23.7"}}

Watch: [Add a click event to the pencil to toggle the update form](https://youtu.be/qRzMkj1L6z0?t=7m2s "Level Up Tutorials: Intermediate Meteor Tutorial #23 - Youtube")

Now when a user clicks on the pencil, they will see that the form toggles between a show and hide state.

Finally, we rearrange our code so that when we are in edit mode we won't see the descripton, ingredients and buttons for the recipe.
<!-- hide  form -->
{{> DiffBox tutorialName="intermediate" step="23.8"}}

Watch: [Hide the recipe details while in editMode](https://youtu.be/qRzMkj1L6z0?t=10m2s "Level Up Tutorials: Intermediate Meteor Tutorial #23 - Youtube")
{{/template}}