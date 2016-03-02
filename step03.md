{{#template name="intermediate-step03"}}

# Project Structure

We're going to take a moment to setup our project's folder structure to make way for a more complicated app than in previous tutorials on Meteor.com.

Watch: [Intermediate Meteor Tutorial #3 - Project Structure](https://youtu.be/N_KiAqB31_Q "Level Up Tutorials: Intermediate Meteor Tutorial #3 - Youtube")

### Client 
In the root of your `intermediate` app, add a new folder named `client`. One of the magical features of Meteor is that it knows that every file inside your `client` folder is part of the client side code. This is the same as placing code inside of the following code block:

```js
if (Meteor.isClient){
	... //you can place this code inside of a client folder in your app directory
}
```
Now that we have the  `client` folder, you can delete the `if(Meteor.isClient)` code block from your `intermediate.js` file.

Inside our `client` folder we'll create a few folders:

> #### Client Folders
> - `layouts` this folder will hold our client side `.html` and `.js` layout files. 
> - `partials` this folder will hold the `header.html` and `footer.html` templates that will be used throughout the site
> - `recipes` this folder will hold all recipe related templates and the JavaScript that refrences those templates

The methodology for this project structure is a feature based folder structure. Each feature or component in the app will have its own folder inside of the `client` folder to separate out it's functionality from other features.

Watch: [Create client folders](https://youtu.be/N_KiAqB31_Q?t=5m1s "Level Up Tutorials: Intermediate Meteor Tutorial #3 - Youtube")

### Server 
Just like the `client` folder, we're going to create a `server` folder to contain the files we want to run solely on the server.

Inside this folder, add a file `init.js`.

{{> DiffBox tutorialName="intermediate" step="3.1"}}

This code allows you to run any code on your server when meteor starts up.

Next we'll add a `publish.js` file to the server. This file will host the publish code.

Watch: [Add server folder and init.js file](https://youtu.be/N_KiAqB31_Q?t=2m21s "Level Up Tutorials: Intermediate Meteor Tutorial #3 - Youtube")

### Collections
We'll create a new folder named `collections` to hold our MogoDB collection files. In this project each collection will receive it's own `.js` file named after the collection.

Watch: [Create a collections folder](https://youtu.be/N_KiAqB31_Q?t=4m2s "Level Up Tutorials: Intermediate Meteor Tutorial #3 - Youtube")
. . . 

Lastly, we'll rename the `intermediate.html` file that was generated when we created our app to `index.html`, and the `intermediate.css` file to `styles.styl`. We'll be using the [Stylus CSS language](http://stylus-lang.com/) to drop in a style sheet with prewritten styles.

## File Structure
```
intermediate
-- .meteor
-- client
---- layouts
---- partials
---- recipes
-- collections
-- server
---- init.js
---- publish.js
-- index.html
-- intermediate.js
-- styles.styl

```
{{/template}}