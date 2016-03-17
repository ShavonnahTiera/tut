{{#template name="intermediate-step21"}}

# Building the Shopping List

The next feature we are going to build is a list of ingredients for our shopping list page. This list will include all of the individual ingredients from our recepies that added to our menu.

<!-- shoppinglist.html -->
{{> DiffBox tutorialName="intermediate" step="21.1"}}

Inside we iterate over the ingredients in the recipe using `{{dstache}}#each ingredients}}`. If you recall back in Step 9 we created a subdocument for our `Recipes` collection called `Ingredients`. When we subscribe this template to receive data from the `Recipes` we also receive access to the `Ingredients` subdocument that is an array. We can interate over array data in our template using the `{{dstache}}#each}}` helper.

Additionally, we can create a better user experience in the case that there are no ingredients added to our list by including  alternate in an `{{dstache}}else}}` block.

Watch: [Create a template for the shopping list](https://youtu.be/dLLjmYz3ARA?t=1m33s "Level Up Tutorials: Intermediate Meteor Tutorial #21 - Youtube")

### Create a route for the ShoppingList template
<!-- create a route -->
{{> DiffBox tutorialName="intermediate" step="21.2"}}
Watch: [Create a route for the shopping list](https://youtu.be/dLLjmYz3ARA?t=1m43s "Level Up Tutorials: Intermediate Meteor Tutorial #21 - Youtube")

### Create a subscription and helper for our Shopping List 
<!-- shopping list.js list of ingredients -->
{{> DiffBox tutorialName="intermediate" step="21.3"}}

You should see a nice pattern with our `js` files for our template helpers. In this case, however, we are going to change the name of the helper to `shoppingList` to make it more in context with the feature we are building.

Watch: [Create a subscribe and helper for our Shopping List](https://youtu.be/dLLjmYz3ARA?t=3m5s "Level Up Tutorials: Intermediate Meteor Tutorial #21 - Youtube")
{{/template}}