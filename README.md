# node-ts-scaffold

Made with ☕️ by <a href="http://www.sc0ttwad3.com">Scott Wade</a>

A [Typescript](https://www.typescriptlang.org/) based **node project scaffold** that supports both cutting-edge Typescript and the latest Javascript features and proposals possible through babel7 pipeline integration.

## Get started

```
$ yarn
$ yarn build
$ yarn start
```

Typescript source files begin in `/src` which are compiled into **es6** and placed in `/build` where babel7 picks them up and transpiles them into **es5** and placed in `/dist` where they are ready for use.

## Development zen

This starter includes a watch task which makes development faster and more interactive.

```
// Not Working Currently
$ yarn watch
```

## View test coverage

To generate and view test coverage, run:

```bash
$ yarn cov
```

This will create an HTML report of test coverage – source-mapped back to Typescript – and open it in your default browser.

<p align="center">
  <img height="600" alt="source-mapped typescript test coverage example" src="https://cloud.githubusercontent.com/assets/904007/22909301/5164c83a-f221-11e6-9d7c-72c924fde450.png">
</p>

## Generate/update changelog & tag release

This project is tooled for [Conventional Changelog](https://github.com/conventional-changelog/conventional-changelog) to make managing releases easier. See the [standard-version](https://github.com/conventional-changelog/standard-version) documentation for more information on the workflow, or [`CHANGELOG.md`](CHANGELOG.md) for an example.

```bash
// bump package.json version, update CHANGELOG.md, git tag the release
$ yarn changelog
```

## One-step publish preparation script

## Notes

Can't currently run the following npm scripts that do work manually from the command line.

```
"pretty:check": "prettier --config .prettierrc --list-different src",
"format:check": "prettier --config .prettierrc --list-different src/**/*{.ts,.js}",
```

It's a good idea to maintain 100% unit test coverage, and always test in the environments you target.
