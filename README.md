# Pokemon Card Game

A React card game: eight Pokemon are split into two random hands, each hand's total base experience is added up, and whichever hand scores higher is declared the winner.

## Tech stack

- React 16 (Create React App)

## Running it

```bash
npm install
npm start
```

Then open `http://localhost:3000`.

**Note:** on a modern Node.js version, `npm start`/`npm run build` need `NODE_OPTIONS=--openssl-legacy-provider` because this project uses an older webpack/react-scripts version (webpack 4) that's incompatible with OpenSSL 3:

```bash
NODE_OPTIONS=--openssl-legacy-provider npm start
```

## Running the tests

```bash
NODE_OPTIONS=--openssl-legacy-provider npm test
```
