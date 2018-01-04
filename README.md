[circle.ci-master-badge]: https://circleci.com/gh/eugene-matvejev/battleship-game-gui-react-js/tree/master.svg?style=svg
[circle.ci-master-link]: https://circleci.com/gh/eugene-matvejev/battleship-game-gui-react-js/tree/master
[codecov.io-master-badge]: https://codecov.io/gh/eugene-matvejev/battleship-game-gui-react-js/branch/master/graph/badge.svg
[codecov.io-master-link]: https://codecov.io/gh/eugene-matvejev/battleship-game-gui-react-js/branch/master

[circle.ci-heroku-badge]: https://circleci.com/gh/eugene-matvejev/battleship-game-gui-react-js/tree/heroku.svg?style=svg
[circle.ci-heroku-link]: https://circleci.com/gh/eugene-matvejev/battleship-game-gui-react-js/tree/heroku
[codecov.io-heroku-badge]: https://codecov.io/gh/eugene-matvejev/battleship-game-gui-react-js/branch/heroku/graph/badge.svg
[codecov.io-heroku-link]: https://codecov.io/gh/eugene-matvejev/battleship-game-gui-react-js/branch/heroku

|                  | master                                                         | heroku
|---               |---                                                             |---
| __tests__        |
| _< Circle CI >_  | [![build][circle.ci-master-badge]][circle.ci-master-link]      | [![build][circle.ci-heroku-badge]][circle.ci-heroku-link]
| __coverage__     |
| _< codecov.io >_ | [![coverage][codecov.io-master-badge]][codecov.io-master-link] | [![coverage][codecov.io-heroku-badge]][codecov.io-heroku-link]

# Battleship Game GUI [on react.js]
project target is to rewrite [vanilla typescript GUI](https://github.com/eugene-matvejev/battleship-game-gui) on react.js, [DEMO](https://battleship-game-gui-react-js.herokuapp.com/)

## THIS IS SPARE TIME PROJECT, WORK IN PROGRESS! HIGHLY EXPERIMENTAL!!!

## software requirements
 * [node.js](https://nodejs.org/) v8+
 * [less](http://lesscss.org/)
 * [npm](https://www.npmjs.com/) v5+ or [yarn](https://yarnpkg.com/)

## used technologies
 * [react.js](https://reactjs.org/) v16+
 * [jest](https://facebook.github.io/jest/)
 * [enzyme](http://airbnb.io/enzyme/)
 * [node-parameter-handler](https://www.npmjs.com/package/node-parameter-handler)
  
## used enviroment variables
 * __BASE_URL__ - API endpoint host
   * example: `$ export BASE_URL="https://api.game.local"`
 
## how to install
 * `$ npm start` - execute `$ npm run generate:all`, then starts concurrently `lite-server` and `generate:css:w`
 * OPTIONAL:
   * `$ npm run generate:all` - shortcut to execute `generate:settings` and `generate:css` tasks
   * `$ npm run generate:settings` - to generate settings [_src/parameters.json_]
   * `$ npm run generate:css` - to generate CSS from LESS
   * `$ npm run generate:css:w` - watch LESS files for changes and compile CSS in runtime
 * TO DEPLOY:
   * `$ npm run build` - compile app and assets, compiled app will be located in __./build__ directory

## how to run tests
 * `$ npm test`
 * OPTIONAL:
   * `-- --coverage` to generate coverage report [located in __./coverage__ directory]
   * [additional jest CLI params](https://facebook.github.io/jest/docs/en/cli.html)
   
## gitlow
 * master -> most upto date 'production' version
 * heroku -> demo branch [master is not deployed to heroku with every push, because of constrains on 'free account']
 * other branches -> 'feature branches' get merged into master
 * coverage report check / CI build is mandatory checks for every PR to be merged in
