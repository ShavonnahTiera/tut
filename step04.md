{{#template name="intermediate-step04"}}

# Basic Layouts with FlowRouter

Watch: [Basic Layouts with FlowRouter](https://youtu.be/CGKAWMeeRzs "Level Up Tutorials: Intermediate Meteor Tutorial #4 - Youtube")

Let's start out by removing the default code in the index.html file except for the head tag.

{{> DiffBox tutorialName="intermediate" step="4.1"}}

### Main Layout
To display our interior pages for our app we are going to create a file inside our `client/layouts` folder: `MainLayout.html`

{{> DiffBox tutorialName="intermediate" step="4.2"}}

The `template.dynamic` tag allows you to create a template area that is equal to `main` to render content into. In the `header` we add a heading called "My Recipe Book" along with the standard `{{> loginButtons}}` that come along with the `accounts-ui` package.

FlowRouter will allow us to render, or display content, in the `main` section of our `MainLayout` template.

Watch: [Create a layout that will render other content](https://youtu.be/CGKAWMeeRzs?t=50s "Level Up Tutorials: Intermediate Meteor Tutorial #4 - Youtube")

### Home Layout
Now let's create a home layout to contain the billboard. This will be the landing page that anyone can see when they navigate to our home page.
 
Start by creating a file: `HomeLayout.html`
 
{{> DiffBox tutorialName="intermediate" step="4.3"}}

When we direct FlowRouter to use the `HomeLayout.html` layout, it will be static and only display the billboard div inside the `main` section.

Watch: [Create HomeLayout.html](https://youtu.be/CGKAWMeeRzs?t=3m9s "Level Up Tutorials: Intermediate Meteor Tutorial #4 - Youtube")

{{/template}}