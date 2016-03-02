{{#template name="intermediate-step19"}}

# Filtering our inMenu Items

We're going to continue building out the 'Add' and 'Remove from Menu' feature in our app. In order to have a better user expereience, We want to let the user:

- Know which recipes are added to the menu;
- Know if the item can be added or removed from the menu; and 
- Create a page that lists the recipes that are added to the menu.

Watch: [Filtering our inMenu Items](https://youtu.be/1Rttsukxxzg "Level Up Tutorials: Intermediate Meteor Tutorial #19 - Youtube")

### Create a conditional class for recipes

<!-- add if menu class -->
{{> DiffBox tutorialName="intermediate" step="19.1"}}

We can use spacebars to include a conditional to check if our `inMenu` value is set to true. If it is, it will add the `in-menu` class to our `Recipe.html` template.

Watch: [Create a conditional class for recipes](https://youtu.be/1Rttsukxxzg?t=1m8s "Level Up Tutorials: Intermediate Meteor Tutorial #19 - Youtube")

If we now open up our `styles.styl` file where all of our Stylus css declarations are. Here we can see that the `in-menu` class changes the background of the recipe to teal and the font to white.

We also want to update the styles so that we use the Twitter Bootstrap `.btn` classes used in our html templage and set `.btn-deny` to not be initally displayed.

<!-- change styles -->
{{> DiffBox tutorialName="intermediate" step="19.2"}}

Watch: [Update in-menu the styles](https://youtu.be/1Rttsukxxzg?t=1m41s "Level Up Tutorials: Intermediate Meteor Tutorial #19 - Youtube")

### Add a new route for the menu page

<!-- add a route -->
{{> DiffBox tutorialName="intermediate" step="19.3"}}

Watch: [Add a new route](https://youtu.be/1Rttsukxxzg?t=4m55s "Level Up Tutorials: Intermediate Meteor Tutorial #19 - Youtube")

### Create a menu template

In this template, we will display recipes by `name` and `desc` that were added to our menu.

<!-- Menu.html -->
{{> DiffBox tutorialName="intermediate" step="19.4"}}

Watch: [Create a menu template](https://youtu.be/1Rttsukxxzg?t=5m18s "Level Up Tutorials: Intermediate Meteor Tutorial #19 - Youtube")

### Create template helpers for our menu pae

<!-- Menu.js -->
{{> DiffBox tutorialName="intermediate" step="19.5"}}
Create a new `menu.js` file. What's different in this file is we change the `recipes` helper to only return a cursor with recipes where `inMenu: true`.

Watch: [Add a helper to only find recipes inMenu](https://youtu.be/1Rttsukxxzg?t=6m15s "Level Up Tutorials: Intermediate Meteor Tutorial #19 - Youtube")
{{/template}}
