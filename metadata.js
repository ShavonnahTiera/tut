if (Meteor.isClient) {
  DiffBox.registerTutorial("intermediate", {
    gitHubRepoName: "ShavonnahTiera/intermediate",
    patchFilename: "generated/intermediate.multi.patch"
  });
}

TutorialRegistry.registerTutorial("blaze", {
  title: "Intermediate Meteor",
  subtitle: "Build a recipe app with Scott from Level Up Tutorials",
  tutorialSourceLink: "github.com/ShavonnahTiera/intermediate",
  steps: [
    {
      title: 'What we are creating',
      slug: "what-we-are-creating",
      template: 'intermediate-step01'
    },
    {
      title: 'Getting Started',
      slug: "getting-started",
      template: 'intermediate-step02'
    },
    {
      title: 'Project Structure',
      slug: "structure",
      template: 'intermediate-step03'
    },
    {
      title: 'Basid Layouts with FlowRouter',
      slug: "basic-layouts",
      template: 'intermediate-step04'
    },
    {
      title: 'Basic Routing with Layouts in Meteor',
      slug: "routing-with-layouts",
      template: 'intermediate-step05'
    },
    {
      title: 'Defining a Schema in Meteor',
      slug: "defining-schema",
      template: 'intermediate-step06'
    },
    {
      title: 'Easy Forms with AutoForm in Meteor',
      slug: "autoform",
      template: 'intermediate-step07'
    },
    {
      title: 'Insert Permissions, Publishing and Meteor Toys',
      slug: "insert-publishing",
      template: 'intermediate-step08'
    },
    {
      title: 'Sub-documents and Array Fields',
      slug: "subdocuments",
      template: 'intermediate-step09'
    },
    {
      title: 'Private &amp; Public Settings and Google Analytics',
      slug: "private-public-settings",
      template: 'intermediate-step10'
    },
    {
      title: 'Creating Partials and Adding Styles',
      slug: "partials",
      template: 'intermediate-step11'
    },
    {
      title: 'Building our Recipes List',
      slug: "recipes-list",
      template: 'intermediate-step12'
    },
    {
      title: 'Template Level Subscriptions',
      slug: "template-subscriptions",
      template: 'intermediate-step13'
    },
    {
      title: 'FlowRouter Parameters',
      slug: "flowrouter-parameters",
      template: 'intermediate-step14'
    },
    {
      title: 'Single Item Subscriptions',
      slug: "single-subscriptons",
      template: 'intermediate-step15'
    },
    {
      title: 'User State Redirects in Routing',
      slug: "user-redirects",
      template: 'intermediate-step16'
    },
    {
      title: 'Login and Logout Redirecting',
      slug: "redirecting",
      template: 'intermediate-step17'
    },
    {
      title: 'Update Methods &amp; Adding to the Menu',
      slug: "update-methods",
      template: 'intermediate-step18'
    },
    {
      title: 'Filtering our inMenu Items',
      slug: "filtering-inmenu",
      template: 'intermediate-step19'
    },
    {
      title: 'Each:Else for No Results',
      slug: "each-else",
      template: 'intermediate-step20'
    },
    {
      title: 'Building the Shopping List',
      slug: "shopping-list",
      template: 'intermediate-step21'
    },
    {
      title: 'Updating with a QuickForm',
      slug: "updating-quickform",
      template: 'intermediate-step22'
    },
    {
      title: 'Deleting Recipes and Session Helpers',
      slug: "deleting-recipes",
      template: 'intermediate-step23'
    },
    {
      title: 'Scoped Reactivity with Reactive Vars',
      slug: "scoped-reactivity",
      template: 'intermediate-step24'
    },
    {
      title: 'Wrapping Up',
      slug: "wrapping-up",
      template: 'intermediate-step25'
    }
  ]
});
