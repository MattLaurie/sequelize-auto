# Fork details

I found [sequelize-auto](https://github.com/sequelize/sequelize-auto) while trying to figure out what to do with
a large legacy Sequelize v6 application.  As a part of making use of it I had to get it to compile and from there
have been adding some potentially useful features.

My immediate goal for the fork is a tool for gaining a better understanding of what is currently in the
application database as compared to the definitions and the ability to automate changes as necessary.

## Tested on MySQL only

Please note that the application I'm trying to fix is using MySQL and with the tests here being a bit mysterious
to run I can't guarantee that all changes will work with other databases.  That said, I'm not deliberately breaking
compatability so you could be all right.

## Changes

* Check supported dialects against Sequelize dialects
* Support converting MySQL `tinyint(1)` to `boolean`
* Add `noMixins` option and `declare` variables to avoid shadowing
* Add `"json"` language to write out the introspected table structure as-is for use in other tooling.

## TODO

* Figure out how to get the tests working correctly.
* Define a better metamodel for "json" language output.  Suggestions welcome.
* Update to use the [latest built-in Sequelize Typescript definitions](https://sequelize.org/docs/v6/other-topics/typescript/)
  like `InferAttributes`, `CreationOptional`, `NonAttribute` etc.
* New output language to use [Sequelize Typescript](https://github.com/sequelize/sequelize-typescript) instead.
* Large refactor to split introspection from generation.  I think there is a great opportunity here but would very
  likely break compatibility with upstream