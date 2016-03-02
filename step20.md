{{#template name="intermediate-step20"}}

# Each:Else for No Results

We're going to take some time to fine tune the 'Add/Remove from menu' features.

First, let's make our `Menu.html` template a bit more modular by placing the `name` and `desc` or our individual menu items inside of it's own template and including that `MenuItem` template back into the `Menu` template.

{{> DiffBox tutorialName="intermediate" step="20.1"}}

Watch: [Create a template for Menu Items](https://youtu.be/AujL3lzXroA "Level Up Tutorials: Intermediate Meteor Tutorial #20 - Youtube")

### Show alternate text if there are no menu items

If we remove all of our recipes from our menu, we are left with a blank page. Not the best user experience. We can use the `{{#each}} ... {{else}} ... {{/each}}` helper to include a notice to the user to add items to thier menu.

{{> DiffBox tutorialName="intermediate" step="20.2"}}

Watch: [Show alternate text if there are no menu items](https://youtu.be/AujL3lzXroA?t=2m1s "Level Up Tutorials: Intermediate Meteor Tutorial #20 - Youtube")

### Clean up our recipe

Previously, we changed our css to hide our `toggle-buttons`. A way to have the same effect programatically would be to use an `{{#if}}/{{else}}` helper to check if `inMenu` is set to true and display the 'Remove from Menu' button, `else`, display the 'Add to Menu' button.

{{> DiffBox tutorialName="intermediate" step="20.3"}}

Watch: [Update the button css](https://youtu.be/AujL3lzXroA?t=3m58s "Level Up Tutorials: Intermediate Meteor Tutorial #20 - Youtube")

{{> DiffBox tutorialName="intermediate" step="20.4"}}

Watch: [Show buttons with if:else helper](https://youtu.be/AujL3lzXroA?t=5m26s "Level Up Tutorials: Intermediate Meteor Tutorial #2 - Youtube")
{{/template}}
