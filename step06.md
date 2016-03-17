{{#template name="intermediate-step06"}}

# Defining a Schema in Meteor

In this project we're using `aldeed:collection2` and `aldeed:autoform` packages to make it easy for us to define schemas and generate forms from those schemas.

### Defining a collection

In your `collections` folder create a file `Recipes.js`.

<!-- {{> DiffBox tutorialName="intermediate" step="6.1"}} -->

On line 1, we create a Collection like normal with `Recipes = new Meteor.Collection('recipes');
`. Starting on line 3, we begin to create a schema based on the fields we'll use in our recipe app.

Inside of the SimpleSchema object, we begin to layout the data model for our schema. For each property in our model we'll define a set of properties that will be used by the `aldeed:autoform` package. All of the properties used by the package are required by defaut.

Our schema consists of: 
> #### Recipe Schema
> - `name`: The name of the recipe
> - `desc`: Description of the recipe
> - `author`: The user.id of the person that created the recipe
> - `createdAt`: The date the recipe was created

Here are the schema properties we are using to generate the autoform:

- `type`: data type (String, Number, Date, etc.)
- `label`: description used in the form field
- `autovalue`: call a function to generate a default value

Lastly, we attach the schema to our collection with: `Recipes.attachSchema(RecipeSchema);`

Watch: [Defining a collection](https://youtu.be/KK42dBBfaaU?t=1m28s "Level Up Tutorials: Intermediate Meteor Tutorial #6 - Youtube")

{{/template}}