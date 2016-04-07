{{#template name="intermediate-step01"}}
### What We're creating

In this tutorial created by Scott Tolinski from [Level Up Tutorials](http://leveluptutorials.com) we'll build a recipe book that allows users to:

- Crate new recipes
- Add and remove recipes from a menu
- Automatically create a shopping list of ingredients from the menu

![Recipe Book][RecipeBook]
![New Recipe][NewRecipe]
![Menu page][Menu]
![Shopping List][ShoppingList]

And of course, the app is responsive:

![Mobile Shopping List][Mobile-ShoppingList]
![Mobile Recipe Book][Mobile-RecipeBook]

### Intermediate Skills

To build out our Recipe Book app, we'll take advantage of the instant updating that comes out-of-the-box with meteor to instantly add new ingredients to the shopping list. Additionally, we'll work with a feature focused file structure to organize our code. 

Meteor has a robust package community and we'll use several to help us quickly and efficiently build out our app. We'll use `AutoForm` to generate our recipe forms, `simple-schema` to create schemas for our Recipes collection and handle routing with `FlowRouter`. That's not all. We'll work with `reactive-var` to add reactivity to variables that manage our recipe editing feature and add Google analytics to our routes to track user engagment.

There's a lot to learn so let's dive in.

[Level Up Tutorials Intermediate Meteor Youtube](https://www.youtube.com/watch?v=BI8IslJHSag&list=PLLnpHn493BHFYZUSK62aVycgcAouqBt7V)

[RecipeBook]: /packages/intermediate-meteor/images/RecipeBook.png
[NewRecipe]: /packages/intermediate-meteor/images/NewRecipe.png
[EditRecipe]: /packages/intermediate-meteor/images/EditRecipe.png
[Menu]: /packages/intermediate-meteor/images/Menu.png
[ShoppingList]: /packages/intermediate-meteor/images/ShoppingList.png
[HomeLayout]: /packages/intermediate-meteor/images/HomeLayout.png
[Mobile-ShoppingList]: /packages/intermediate-meteor/images/Mobile-ShoppingList.png
[Mobile-RecipeBook]: /packages/intermediate-meteor/images/Mobile-RecipeBook.png
{{/template}}
