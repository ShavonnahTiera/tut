{{#template name="intermediate-step09"}}

# Sub-documents &amp; Array Fields

One of the features of our app is that we have a list of the ingredients that we need to make any recipe in our menu. In order to store the ingredient data, we're going to create a sub-document inside our `Recipes` Collection to include ingredient fields `name` and `amount`. We'll use the `SimpleSchema` just like we defined before.

{{> DiffBox tutorialName="intermediate" step="9.1"}}
<!-- ing schema -->

The only difference here is that we tie the `Ingredient` schema together with the `RecipeSchema` by creating a property in the `RecipeSchema` named: `ingredients`. Boom! You have just created a sub-document inside of your collection.

Another change is we're using the `type: [Ingredient]`. This creates an array that automatically gives us incrementing boxes in our user interface to add as many ingredients to our recipe as we would like. 

When we look back to our refreshed browser, we can see that autoform has automatically added the ui for the ingredients array.

Watch: [Create a sub-document](https://youtu.be/ooSJ13vHUrw "Level Up Tutorials: Intermediate Meteor Tutorial #9 - Youtube")

### A simple feature design pattern

In our app, we want to be able to have specific recipes show up in our weekly menu and ingredients to appear in our shopping list. To do this we'll create a new property in our schema: `inMenu`. This will allow us to filter the `Recipes` collection by all that have `inMenu` set to `true` and display those results within our app with:

`Recipes.find({inMenu: true});`

{{> DiffBox tutorialName="intermediate" step="9.2"}}

The `Boolean` type means the value of `inMenu` will be either true or false. `collection2` allows us to set the default value which we have set to `false`. This means by default, the recipe will not appear in our weekly menu and the ingredients will not appear in our shopping list. 

> Tip: Test adding another recipe using the form. Use control-m to open the Meteor Toys Mongol console to take a look at the recipe collection.

Watch: [Create inMenu field in the Recipes collection](https://youtu.be/ooSJ13vHUrw?t=6m23s "Level Up Tutorials: Intermediate Meteor Tutorial #9 - Youtube")

{{/template}}
