# npm-script-help
Utility to document npm scripts

# Installation

```js
npm install npm-script-help -g // or
npm install npm-script-help --save-dev
```

# Usage

Add a `scriptHelp` config object to your package.json

```json
{
  "scripts": {
    "start": "nodemon server.js"
  },
  "scriptHelp": {
    "start": {
      "usage": [
        "NODE_ENV=development $0",
        "NODE_ENV=production $0"
      ],
      "desc": "Starts the server (or some more useful description)"
    }
  }
}
```

Run:

```js
npm-help // In your project root
```

We suggest adding a script to your package.json

```json
{
  "scripts": {
    "help": "npm-help"
  }
}
```

Run:

```js
npm run help
```
