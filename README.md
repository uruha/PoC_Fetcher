# Fetcher
fetch wrapper class (universal)

## Spec
- [isomorphic-unfetch](https://github.com/developit/unfetch/tree/master/packages/isomorphic-unfetch)
- typescript

## Development
```
$ npm i
$ npm run watch
```

## Usage
```javascript
// on client
const fetcher = new Fetcher('https://exmaple.com');

// use Fetcher
fetcher
    .get('user')
    .then(res => res.json())
    .then(res => console.log(res));
```