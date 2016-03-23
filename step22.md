{{#template name="intermediate-step22"}}

# Updating with a QuickForm

Looking back at our app up to now we have routes and templates for all of our pages completed. On our `http://localhost:3000/recipe-book` page you'll notice that there is no way to update the individual recipes. Let's program a way to update each recipe. 

<!-- Recipe.html -->
{{> DiffBox tutorialName="intermediate" step="22.1"}}

We can use a quickForm to update the recipes, just as we used one to insert the recipes in the first place. The differences from the previous quickForm are:

- `id=updateRecipeId` - we'll crate a helper for this form instead of using a css id property,
- `type="update"` - 
- `doc=this` - This `Recipe` template is within an `{{dstache}}#each}}` loop. The MongoDB `doc` we update will be the current item, `this` in the loop.

Watch: [Create a quickForm to update the recipes](https://youtu.be/BTMrwey7UXQ "Level Up Tutorials: Intermediate Meteor Tutorial #22 - Youtube")

### Add a helper for updateRecipeId

It is important to know what context your app is in when you are building an app. In the case of our helper function for `updateRecipeId` we want to return the `_id` of the currently looped over recipe with `this._id`. If we use the arrow funcion `()=>` the scope of `this` changes. Instead we'll call a regular `function()` that doesn't change the context of `this`.

 
{{> DiffBox tutorialName="intermediate" step="22.2"}}

Watch: [Add a helper for the update form](https://youtu.be/BTMrwey7UXQ?t=3m15s "Level Up Tutorials: Intermediate Meteor Tutorial #22 - Youtube")


### Updating a form with autosave

Instead of having to click '+' each time you update the form, we can use the `autosave` property from autoForm.

<!-- {{> DiffBox tutorialName="intermediate" step="22.3"}} -->

Now each time the user presses enter or changes the focus from the field, it will update the `Recipes` collection automatically and show up reactively in the recipe list.

Watch: [Updating a form with autosave](https://youtu.be/BTMrwey7UXQ?t=6m27s "Level Up Tutorials: Intermediate Meteor Tutorial #22 - Youtube")
{{/template}}