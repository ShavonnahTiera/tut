{{#template name="intermediate-step11"}}

# Creating Partials and Adding Styles

This tutorial is all about building an intermediat Meteor app, so instead of worrying about creating custom css, go ahead and copy and paste the file below into your `styles.styl` file.

{{> DiffBox tutorialName="intermediate" step="11.1"}}

Watch: [Add custom styles](https://youtu.be/U5Wp1eyGw18 "Level Up Tutorials: Intermediate Meteor Tutorial #11 - Youtube")

### Side Navigation

The mockup for this app has navigation buttons for the 'Recipe Book', 'Menu', and 'Shopping List'. This navigatin is shared among many templates so it makes sense for us to package it up in its own template that we can include it in many places while only needing to edit it in one.

Create a new file inside of the `client/partials` folder named: `SideNav.html`.

{{> DiffBox tutorialName="intermediate" step="11.2"}}

We can use the `font-awesome` package to add icons to the navigation using the `i class`.

Next, we include the `SideNav` template to the `MainLayout template

{{> DiffBox tutorialName="intermediate" step="11.3"}}

Watch: [Add side navigation](https://youtu.be/U5Wp1eyGw18?t=1m14s "Level Up Tutorials: Intermediate Meteor Tutorial #11 - Youtube")

### Header

Create another partial inside the `client/partials` directory named: `Header.html`. Just like our side navigation, we want to inclue the header into many templates and while only needing to edit it in one.

Move the `<header>` section from the `MainLayout.html` file and place it in the newly created `Header.html` file.

{{> DiffBox tutorialName="intermediate" step="11.4"}}

Add a template include for the `Header` template in the `MainLayout.html` template
{{> DiffBox tutorialName="intermediate" step="11.5"}}

And in your `HomeLayout.html` file:
{{> DiffBox tutorialName="intermediate" step="11.6"}}

Watch: [Create a partial for the Header](https://youtu.be/U5Wp1eyGw18?t=5m54s "Level Up Tutorials: Intermediate Meteor Tutorial #11 - Youtube")
{{/template}}
