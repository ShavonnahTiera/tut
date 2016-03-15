{{#template name="intermediate-step12"}}

# Building our Recipes List

On our Recipe Book page, we are going to create a listing of our individual recipes.

To get the individual recipes to display, we are going to loop, or iterate, over a cursor from our database. First let's set up our template to loop through `{{dstache}}#each}}` of the recipes and output the single recipe template.

<!-- Recipes.html -->
{{> DiffBox tutorialName="intermediate" step="12.1"}}

Watch: [Create recipes #each loop](https://youtu.be/AjydyHbwbDA?t=2m3s "Level Up Tutorials: Intermediate Meteor Tutorial #12 - Youtube")

Next, create a helper named `recipes` that holds the recipes cursor from the `Recipes` collection.

{{> DiffBox tutorialName="intermediate" step="12.2"}}

Watch: [Recipes helper](https://youtu.be/AjydyHbwbDA?t=1m23s "Level Up Tutorials: Intermediate Meteor Tutorial #12 - Youtube")

Now that we have our loop and helper, let's create a template for each individual recipe called: `Recipe.html`.

<!-- Single Recipe.html article -->
{{> DiffBox tutorialName="intermediate" step="12.3"}}

Watch: [Single Recipe template](https://youtu.be/AjydyHbwbDA?t=3m38s "Level Up Tutorials: Intermediate Meteor Tutorial #12 - Youtube")

In this file we not only have the `name` and `desc`ription of the recipe, we can also loop over our `ingredients` subdocument array to show which ingredients each recipe has. 

{{/template}}
