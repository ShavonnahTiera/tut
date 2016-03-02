{{#template name="intermediate-step02"}}

# Getting Started

Just like any other Meteor.js project, we'll start by heading to our terminal and creating a project, changing into the directory of the project and running the project.

```bash
meteor create intermediate
cd intermediate
meteor
```

Once your app is up an running, head to `http://localhost:3000` in your browser. If everything is up and running correctly, you'll see the basic Meteor starter app.

Watch: [Intermediate Meteor Tutorial #2](https://youtu.be/BvkQNTIfbQk?t=23s "Youtube")

### Packages

We're going to jumpstart our Recipe Book project by adding several of the packages we'll be using at once. 

Open your application in your favorite text editor. Inside the `.meteor` folder you'll find the `packages` file. Open up that file and remove the autopublish and insecure packages. 

If your app is still running, in the terminal you'll see that these package files are being removed. Editing your `packages` file is the same as using `meteor add <package name>` or `meteor remove <package name>` in the terminal.

We are going to replace those packages with this curated list of packages:

#### Package List
```
kadira:flow-router
kadira:blaze-layout
erasaur:meteor-lodash
stolinski:stylus-multi
fortawesome:fontawesome
spiderable
fastclick
raix:handlebar-helpers
aldeed:collection2
aldeed:autoform
accounts-ui
accounts-password
matb33:bootstrap-glyphicons
msavin:jetsetter
zimme:active-route
gwendall:auth-client-callbacks
```

Your `.meteor/packages` file should now look like this:

<!-- Remove auto add packages -->
{{> DiffBox tutorialName="intermediate" step="2.1"}}


Watch: [Remove autopublish and insecure packages](https://youtu.be/BvkQNTIfbQk?t=2m2s "Level Up Tutorials: Intermediate Meteor Tutorial #2 - Youtube")

{{/template}}
