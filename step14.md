{{#template name="intermediate-step1"}}

# FlowRouter Parameters

Now that we have a listing of all of our recipes submitted through our autoform, let's build an individual reciepe page. On that page, you can view a recipe based on the unique Mongo `_id` of the recipe stored as a parameter of the url.

```
localhost:3000/recipe/u04cqhcq8sW    # u04cqhcq8sW is the unique Mongo _id`

### Adding a link to a route

We start by going inside of our `Recipe` template that is being iterated over to create our Recipe-List. Below the `{{dstache}}#each ingredients}}` loop we add a `View Details` link with a url that has a helper for `{{dstache}}>_id}}`.

{{> DiffBox tutorialName="intermediate" step="14.1"}}

If you open up your JavaScript console and click one of the `View Details` links, you'll see a FlowRouter error with a link that has the unique `_id` of that recipe. When we subscribed to our recipe collection in Step 8 we sent data from our `Recipes` collection to this template along with the `_id` of each individual recipe. This data is where the `id` is pulled from.

Watch: [Add a 'read more' link to our Recipe in our list page](https://youtu.be/jp09Kw3sduo?t=2m3s "Level Up Tutorials: Intermediate Meteor Tutorial #14 - Youtube")


### Add a parameter to a route

Open up the `lib/routes.js` file and let's specify a new `FlowRouter.route` for our single recipe page.

{{> DiffBox tutorialName="intermediate" step="14.2"}}

Specify a parameter in the route with by using a `:` as in `:id` or `:_id` if you want to identically match the property we are accessing. 

Let's also update the template being rendered to our `main` section to `'RecipeSingle'` which we'll create next.

Watch: [Add a parameter to a route](https://youtu.be/jp09Kw3sduo?t=1m48s "Level Up Tutorials: Intermediate Meteor Tutorial #14 - Youtube")

### Create a template for a single recipe

Here's the template code for `RecipeSingle.html`.

{{> DiffBox tutorialName="intermediate" step="14.3"}}

Here we just added a template helper that will render the name of the recipe.

Watch: [Create a template for a single recipe](https://youtu.be/jp09Kw3sduo?t=2m59s "Level Up Tutorials: Intermediate Meteor Tutorial #14 - Youtube")

### Create a helper for a single recipe

<!-- helper -->
{{> DiffBox tutorialName="intermediate" step="14.4"}}

In `RecipeSingle.js` we update our helper to only return one recipe from our Mongo Collection with the Mongo query method `.findOne();`

To use the `.findOne();` query to return the specific `_id` of the recipe we select, create a variable for `FlowRouter.getParam('id')`. This allows us to pull in the paramater from the route and use it in our `.findOne();` Mongo query to pull a single unique recipe based on it's id when we click on the `View Details` link on our listing page.

Watch: [Create a helper for a single recipe](https://youtu.be/jp09Kw3sduo?t=4m11s "Level Up Tutorials: Intermediate Meteor Tutorial #14 - Youtube")

{{/template}}
