# npm-script-help
Utility to document npm scripts

# Installation

```bash
npm install npm-script-help -g # or
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

```bash
npm-help # In your project root
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

```bash
npm run help
```

Outputs:

```bash
Script     Usage                                       Description

start      NODE_ENV=development npm start              Starts the server (or some more useful
           NODE_ENV=production npm start               description)
```
