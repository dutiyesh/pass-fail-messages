# pass-fail-messages [![Build Status](https://travis-ci.org/dutiyesh/pass-fail-messages.svg?branch=master)](https://travis-ci.org/dutiyesh/pass-fail-messages)

> Replace boring pass and fail messages with popular movies and tv dialogues.

*The lists are just JSON files and can be used wherever.*


## Install

```
$ npm install --save pass-fail-messages
```


## Usage

```js
const passFailMessages = require('pass-fail-messages');

passFailMessages.passRandom();
//=> 'The force is strong with this one.'
```


## API

### .pass

Type: `array`

Pass message.

### .fail

Type: `array`

Fail message.

### .all

Type: `array`

Both pass and fail messages.

### .passRandom()

Type: `function`

Random pass message.

### .failRandom()

Type: `function`

Random fail message.

### .allRandom()

Type: `function`

Random pass or fail message.


## CLI

```
$ npm install --global pass-fail-messages
```

```
$ pass-fail --help

  Examples
    $ pass-fail
    The force is strong with this one.

    $ pass-fail --all --type pass
    A hero can be anyone.
    GGGGGGGGGiddy-up!
    ...

  Options
    --all   Get all messages instead of a random message
    --type  Type of message: pass|fail|all  Default: all
```


## Related

- [yes-no-words](https://github.com/sindresorhus/yes-no-words) - Get yes/no like words


## License

MIT © Dutiyesh Salunkhe
