oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g es-check
$ es-check COMMAND
running command...
$ es-check (--version)
es-check/0.3.0 darwin-arm64 node-v18.11.0
$ es-check --help [COMMAND]
USAGE
  $ es-check COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`es-check count INDEX`](#es-check-count-index)
* [`es-check count world`](#es-check-count-world)
* [`es-check generate INDEX`](#es-check-generate-index)
* [`es-check help [COMMAND]`](#es-check-help-command)
* [`es-check mapping fields INDEX`](#es-check-mapping-fields-index)
* [`es-check plugins`](#es-check-plugins)
* [`es-check plugins:install PLUGIN...`](#es-check-pluginsinstall-plugin)
* [`es-check plugins:inspect PLUGIN...`](#es-check-pluginsinspect-plugin)
* [`es-check plugins:install PLUGIN...`](#es-check-pluginsinstall-plugin-1)
* [`es-check plugins:link PLUGIN`](#es-check-pluginslink-plugin)
* [`es-check plugins:uninstall PLUGIN...`](#es-check-pluginsuninstall-plugin)
* [`es-check plugins:uninstall PLUGIN...`](#es-check-pluginsuninstall-plugin-1)
* [`es-check plugins:uninstall PLUGIN...`](#es-check-pluginsuninstall-plugin-2)
* [`es-check plugins update`](#es-check-plugins-update)

## `es-check count INDEX`

Count documents

```
USAGE
  $ es-check count [INDEX] --endpoint <value>

ARGUMENTS
  INDEX  The elasticsearch index name

FLAGS
  --endpoint=<value>  (required)

DESCRIPTION
  Count documents

EXAMPLES
  $ oex count events
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/count/index.ts](https://github.com/datatok/es-check/blob/v0.3.0/dist/commands/count/index.ts)_

## `es-check count world`

Say hello world

```
USAGE
  $ es-check count world

DESCRIPTION
  Say hello world

EXAMPLES
  $ es-check count world
  hello world! (./src/commands/hello/world.ts)
```

## `es-check generate INDEX`

Generate documents

```
USAGE
  $ es-check generate [INDEX] --endpoint <value> [--limit <value>] [--bulkSize <value>]

ARGUMENTS
  INDEX  The elasticsearch index name

FLAGS
  --bulkSize=<value>  [default: 500]
  --endpoint=<value>  (required)
  --limit=<value>

DESCRIPTION
  Generate documents

EXAMPLES
  $ oex generate
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/generate/index.ts](https://github.com/datatok/es-check/blob/v0.3.0/dist/commands/generate/index.ts)_

## `es-check help [COMMAND]`

Display help for es-check.

```
USAGE
  $ es-check help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for es-check.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.19/src/commands/help.ts)_

## `es-check mapping fields INDEX`

Check fields are ok according mapping

```
USAGE
  $ es-check mapping fields [INDEX] --endpoint <value> [--query <value>] [--limit <value>] [--scrollSize <value>]
    [--ignoredFields <value>]

ARGUMENTS
  INDEX  The elasticsearch index name

FLAGS
  --endpoint=<value>       (required)
  --ignoredFields=<value>
  --limit=<value>
  --query=<value>
  --scrollSize=<value>     [default: 500]

DESCRIPTION
  Check fields are ok according mapping

EXAMPLES
  $ oex count events
  hello friend from oclif! (./src/commands/hello/index.ts)
```

## `es-check plugins`

List installed plugins.

```
USAGE
  $ es-check plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ es-check plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.7/src/commands/plugins/index.ts)_

## `es-check plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ es-check plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ es-check plugins add

EXAMPLES
  $ es-check plugins:install myplugin 

  $ es-check plugins:install https://github.com/someuser/someplugin

  $ es-check plugins:install someuser/someplugin
```

## `es-check plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ es-check plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ es-check plugins:inspect myplugin
```

## `es-check plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ es-check plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ es-check plugins add

EXAMPLES
  $ es-check plugins:install myplugin 

  $ es-check plugins:install https://github.com/someuser/someplugin

  $ es-check plugins:install someuser/someplugin
```

## `es-check plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ es-check plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ es-check plugins:link myplugin
```

## `es-check plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ es-check plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ es-check plugins unlink
  $ es-check plugins remove
```

## `es-check plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ es-check plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ es-check plugins unlink
  $ es-check plugins remove
```

## `es-check plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ es-check plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ es-check plugins unlink
  $ es-check plugins remove
```

## `es-check plugins update`

Update installed plugins.

```
USAGE
  $ es-check plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
