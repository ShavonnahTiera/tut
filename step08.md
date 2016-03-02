{{#template name="intermediate-step08"}}

# Insert Permissions, Publishing &amp; Meteor Toys

In order to send data from our database from the server to the client, we'll need to create a publication. It's good practice to only send the data you need to be rendered in a publication in order for your app to have faster load times and be more secure.

Watch: [Insert Permissions, Publishing & Meteor Toys](https://youtu.be/kCn_AnU91Dg "Level Up Tutorials: Intermediate Meteor Tutorial #8 - Youtube")

### Publish Recipes

Inside the `server/publish.js` file we created in Step 2, use the `Meteor.publish` method to publish data only where the `userId` matches the currently logged in user.

{{> DiffBox tutorialName="intermediate" step="8.1"}}

Watch: [Insert Permissions, Publishing & Meteor Toys](https://youtu.be/kCn_AnU91Dg?t=49s "Level Up Tutorials: Intermediate Meteor Tutorial #8 - Youtube")

### Testing our Publication

Head over to the browser and create a user account. 

Next, back in your editor, open your `.meteor/packages` file and replace the `msavin:jetsetter` package with `meteortoys:allthings`.

{{> DiffBox tutorialName="intermediate" step="8.2"}}

The Meteor Toys package give you access to a Mongol server, JetSetter and more right from your browser. To open, make sure your app is running, click `control-M` inside of your browser window. You'll see an overlay with the Meteor Toys components.

Let's test out adding a recipe to our Recipe Book. 

After we add our "Ahi Tuna" recipe, open up the console. You'll find an insert error message that denies you the abilty to insert into the Recipes Collection. This is Meteor's security at work. To allow a user to insert a recipe from our form, we'll have to update our Allow/Deny rules.

Watch: [Testing our Publication](https://youtu.be/kCn_AnU91Dg?t=1m40s "Level Up Tutorials: Intermediate Meteor Tutorial #8 - Youtube")

### Allow and Deny rules

In our `collections/Recipes.js` file, we can give users permission to insert data into our recipe collection with the `allow()` method. 

{{> DiffBox tutorialName="intermediate" step="8.3"}}

if userId exists you are allowed to add a recipe.

Watch: [Allow the user to insert data via the quickForm into the database](https://youtu.be/kCn_AnU91Dg?t=4m34s "Level Up Tutorials: Intermediate Meteor Tutorial #8 - Youtube")

### Subscribe

The counterpart to our publish method is subscribe. In order for our client to receive the data in the publish method, we use the subscribe method to access that data set using the name of the publish method, in this case `recipes`.

{{> DiffBox tutorialName="intermediate" step="8.4"}}

Watch: [Subscribing to recipes](https://youtu.be/kCn_AnU91Dg?t=7m45s "Level Up Tutorials: Intermediate Meteor Tutorial #8 - Youtube")
{{/template}}
