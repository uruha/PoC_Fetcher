import Fetcher from './fetcher';

// use mock api io
// @see https://www.mockapi.io/projects/5d25e705eeb36400145c5772
const fetcher = new Fetcher(
    'https://5d25e705eeb36400145c5771.mockapi.io/api/v1/'
);

// use Fetcher
fetcher
    .get('todo')
    .then(res => res.json())
    .then(res => console.log(res));
