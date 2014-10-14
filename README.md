Screencode
==========

[![NPM](https://nodei.co/npm/screencode.png?compact=true)](https://nodei.co/npm/screencode/)

[![Build Status](http://img.shields.io/travis/outrightmental/screencode.svg)](https://travis-ci.org/outrightmental/screencode)

[![NPM](http://img.shields.io/npm/v/npm.svg)](https://www.npmjs.org/package/screencode)

An easy-to-use command line interface for **Screencoding**.

Computer programmers are writers, and they have perfected the art of writing in groups.  Computer programmers write together efficiently in groups using a tool called **Source Code Version Control**.

Screenplay is the source code of film. We seek to create a tool for the new millennium of screen writing, **Screencode**

Screencode is a 2-part epoxy made of two existing technologies that computer programmers have been using to write together efficiently for years:

## Part 1. [Fountain](http://fountain.io/) (based on [Markdown](http://daringfireball.net/projects/markdown/))

Fountain is a simple markup syntax for writing, editing and sharing screenplays in plain, human-readable text. Fountain allows you to work on your screenplay anywhere, on any computer or tablet, using any software that edits text files.
Taking its cues from John Gruber’s [Markdown](http://daringfireball.net/projects/markdown/), Fountain files are eminently readable. When special syntax is required, it is straightforward and intuitive.

## Part 2. [Git](http://git-scm.com/)
Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

## Installation

```shell
  npm install screencode --save
```

## Usage

```js
  var screencode = require('screencode')
      escape = screencode.escape,
      unescape = screencode.unescape;

  var html = '<h1>Hello World</h1>',
      escaped = escape(html),
      unescaped = unescape(escaped);

  console.log('html', html, 'escaped', escaped, 'unescaped', unescaped);
```

## Tests

```shell
   npm test
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.0.1 Initial release
