{{#template name="intermediate-step18"}}

# Update Methods &amp; Adding to the Menu

Let's add toggle buttons to our recipe so that our user will know they can add and remove items from the menu.

<!-- add buttons -->
{{> DiffBox tutorialName="intermediate" step="18.1"}}

The way this feature will work is once the user clicks the 'Add to Menu' or 'Remove from Menu' buttons, it will trigger an event that will update the `inMenu` value in our `Recipes` collection to the opposite of the stored value.

Watch: [Create toggle buttons for each recipe](https://youtu.be/DuRcJS72Eqo "Level Up Tutorials: Intermediate Meteor Tutorial #18 - Youtube")

### Test adding an event to our toggle buttons

{{> DiffBox tutorialName="intermediate" step="18.2"}}

To ensure we've wired up our `click` event correctly we'll test to see if the JavaScript console in our browser registers the word 'click' when the button is clicked.

Watch: [Create events for the toggle button](https://youtu.be/DuRcJS72Eqo?t=2m28s "Level Up Tutorials: Intermediate Meteor Tutorial #18 - Youtube")

### Allow users to update the collection 

When the user toggles the add and remove fromm menu buttons, we want to update the `inMenu` value in our database to the opposite of its saved value. Since we are updating our database from the client, we have to update our `Recipes.allow();` function to accept changes from our user.

{{> DiffBox tutorialName="intermediate" step="18.3"}}

Watch: [Allow users to update the collection](https://youtu.be/DuRcJS72Eqo?t=3m45s "Level Up Tutorials: Intermediate Meteor Tutorial #18 - Youtube")

### Create a method to update the inMenu value

Now that we have permission to change data on the database, let's create a method to actually record that change.

We want to create a method that finds the database record by the `id` of the current recipe and update it's `inMenu` value to the opposite of the `currentState`. This way if the `currentState` of `inMenu` is false, once the user clicks the toggle-button, the `inMenu` value will update to true and vice versa.

{{> DiffBox tutorialName="intermediate" step="18.4"}}

Now that we have created the ability to change the `inMenu` value on our database, we have to `.call()` this method on the client in order to pass it data to update.

Watch: [Allow users to update the collection](https://youtu.be/DuRcJS72Eqo?t=4m56s "Level Up Tutorials: Intermediate Meteor Tutorial #18 - Youtube")

### Call the toggleMenuItem method in the click event

{{> DiffBox tutorialName="intermediate" step="18.5"}}

If you head back over to the browser and open up the Meteor Toys mongol instance, `control-m`, you can look at our recipe book page and see that when we click on the `Add' or 'Remove' buttons, the `inMenu` value in our collection changes to the opposite value or is added if it didn't already exist. If you continue to click the same button, the value toggles from true to false, regardless of if we are clicking the 'Add' or 'Remove' button.  

We'll update our app to only update the `inMenu` value to true if the 'Add to Menu' button is clicked in the next step.

Watch: [Call the toggleMenuItem method from an event](https://youtu.be/DuRcJS72Eqo?t=6m45s "Level Up Tutorials: Intermediate Meteor Tutorial #18 - Youtube")
{{/template}}
