{{#template name="intermediate-step05"}}

# Basic Routing with Layouts in Meteor

If you've ventured over to the browser, you may have noticed that there is no content being rendered to the client. That's because we haven't set up any routes and the app is only reading the `<title> intermediate</title>` from our `index.html` file. 

### Home Route

First, let's create a `lib` folder in our app route. Since this folder is not placed in the client or server folder, the code inside is accessible to both. Within our `lib` folder we'll create a file named: `routes.js`.

[Meteor docs](http://docs.meteor.com/#/full/structuringyourapp)

{{> DiffBox tutorialName="intermediate" step="5.1"}}

What this block of code does is tell FlowRouter that when the app is at the path `/` as in `localhost:3000/`: 

- give the path an alias `name` of `home`
- call the `action()` function so that once the `home` path is accessed it will
- render the `HomeLayout` template

If you head over to `localhost:3000` now, you'll see the `HomeLayout.html` template complete with the headings and loggin buttons.

Watch: [Create a home route with FlowRouter](https://youtu.be/nOJ0hfVo368?t=46s "Level Up Tutorials: Intermediate Meteor Tutorial #5 - Youtube")

### Testing Dynamic Routing

Let's create a generic template to see how dynamic template rendering works.

{{> DiffBox tutorialName="intermediate" step="5.2"}}

Once the template is created, we can use FlowRouter to make the connection between the `MainLayout` template and the template that will be rendered inside of its `main` section.

{{> DiffBox tutorialName="intermediate" step="5.3"}}

Here we created a route named `/test` that renders the `MainLayout`. Inside the `MainLayout` we render the `Test` template which simply reads "Hello!!!" We can see these changes at `localhost:3000/test`.

Watch: [Remove autopublish and insecure packages](https://youtu.be/nOJ0hfVo368?t=2m50s "Level Up Tutorials: Intermediate Meteor Tutorial #2 - Youtube")

{{/template}}