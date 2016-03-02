{{#template name="intermediate-step10"}}

# Private &amp; Public Settings and Google Analytics

The `settings.json` file holds private variables including API keys for use by default on your server. When working with third-party services like Google or Facebook, you will receive these private keys to allow you app to connect to their data. Imagine if your app is interacting with dozens of services, the 'settings.json' file allows you one place to store your keys and access them securely as needed within your application.

> 'settings.json' is a file you do not want to commit to your publically hosted repository as with API keys, they are secret and unique to you.

In the root of your app directory, create a `settings.json` file.

<!-- settings.json -->
{{> DiffBox tutorialName="intermediate" step="10.1"}}

Inside your `settings.json` file create an object. You can create a `public` object to hold public keys like a Google Analytics account number and a `private` object to hold sensitive keys like a Stripe API key.

"public": {
		"ga: {
			"account: "UA- XXXXXXXX-X"
	}
},
"private": {
	"stripe": {
		"apiPrivate": "apikey"
}
}

You can test whether this key is accessible using dot notation on the client side of your code.

```js
console.log(Meteor.settings.public.ga.account);
```

To use `settings.json` head over to your terminal and re-run your meteor app with the following flag and file:

```bash
$ meteor --settings settings.json
```

In the browser, open up your console and you should see the UA code logged to your console.

### Protect your private keys

Before you push your git commits to a public repository be sure to create a file named `.gitignore` and add it to the root of your application.

Inside your `.gitignore` file add:

```
settings.json
```

This will ensure that your `settings.json` file is not added to your public repository.

Additionally, you run Meteor with the keys in your `settings.json` file, you will need to re-run Meteor with:

```bash
$ meteor --settings settings.json
```

Watch: [Create a settings.json file](https://youtu.be/Np5WuyUw "Level Up Tutorials: Intermediate Meteor Tutorial #10 - Youtube")

### Google Analytics

Using FlowRouter and the `datariot:ganalytics` package, we can add our Google Analytics account to each page in our app as it is rendered.

First, install the `datariot:ganalytics` package in your `.meteor/packages.js` file.

<!-- Add analytics package -->
{{> DiffBox tutorialName="intermediate" step="10.2"}}

Inside of `router.js`, we can register a page view to each of our routes before the layout renders.

<!-- GAnalytics.pageview(); -->
{{> DiffBox tutorialName="intermediate" step="10.3"}}


Watch: [Add Google Analytics to the router](https://youtu.be/Np5WuyUw?t=7m1s "Level Up Tutorials: Intermediate Meteor Tutorial #10 - Youtube")
{{/template}}
