elasticsearch-knife
=================

Do stuff with elasticsearch

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
$ npm install -g elasticsearch-knife
$ elasticsearch-knife COMMAND
running command...
$ elasticsearch-knife (--version)
elasticsearch-knife/0.4.2 darwin-arm64 node-v18.11.0
$ elasticsearch-knife --help [COMMAND]
USAGE
  $ elasticsearch-knife COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
- [elasticsearch-knife](#elasticsearch-knife)
- [Usage](#usage)
- [Commands](#commands)
  - [`elasticsearch-knife count INDEX`](#elasticsearch-knife-count-index)
  - [`elasticsearch-knife generate INDEX`](#elasticsearch-knife-generate-index)
  - [`elasticsearch-knife help [COMMAND]`](#elasticsearch-knife-help-command)
  - [`elasticsearch-knife mapping array INDEX`](#elasticsearch-knife-mapping-array-index)
  - [`elasticsearch-knife plugins`](#elasticsearch-knife-plugins)
  - [`elasticsearch-knife plugins:install PLUGIN...`](#elasticsearch-knife-pluginsinstall-plugin)
  - [`elasticsearch-knife plugins:inspect PLUGIN...`](#elasticsearch-knife-pluginsinspect-plugin)
  - [`elasticsearch-knife plugins:install PLUGIN...`](#elasticsearch-knife-pluginsinstall-plugin-1)
  - [`elasticsearch-knife plugins:link PLUGIN`](#elasticsearch-knife-pluginslink-plugin)
  - [`elasticsearch-knife plugins:uninstall PLUGIN...`](#elasticsearch-knife-pluginsuninstall-plugin)
  - [`elasticsearch-knife plugins:uninstall PLUGIN...`](#elasticsearch-knife-pluginsuninstall-plugin-1)
  - [`elasticsearch-knife plugins:uninstall PLUGIN...`](#elasticsearch-knife-pluginsuninstall-plugin-2)
  - [`elasticsearch-knife plugins update`](#elasticsearch-knife-plugins-update)

## `elasticsearch-knife count INDEX`

Count documents

```
USAGE
  $ elasticsearch-knife count [INDEX] --endpoint <value>

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

_See code: [dist/commands/count/index.ts](https://github.com/datatok/elasticsearch-knife/blob/v0.4.2/dist/commands/count/index.ts)_

## `elasticsearch-knife generate INDEX`

Generate documents

```
USAGE
  $ elasticsearch-knife generate [INDEX] --endpoint <value> [--limit <value>] [--bulkSize <value>]

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

_See code: [dist/commands/generate/index.ts](https://github.com/datatok/elasticsearch-knife/blob/v0.4.2/dist/commands/generate/index.ts)_

## `elasticsearch-knife help [COMMAND]`

Display help for elasticsearch-knife.

```
USAGE
  $ elasticsearch-knife help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for elasticsearch-knife.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.19/src/commands/help.ts)_

## `elasticsearch-knife mapping array INDEX`

List all fields with array values

```
USAGE
  $ elasticsearch-knife mapping array [INDEX] --endpoint <value> [--query <value>] [--limit <value>] [--scrollSize
    <value>] [--ignoredFields <value>]

ARGUMENTS
  INDEX  The elasticsearch index name

FLAGS
  --endpoint=<value>       (required)
  --ignoredFields=<value>
  --limit=<value>
  --query=<value>
  --scrollSize=<value>     [default: 500]

DESCRIPTION
  List all fields with array values

EXAMPLES
  $ oex mapping array
  hello friend from oclif! (./src/commands/hello/index.ts)
```

## `elasticsearch-knife plugins`

List installed plugins.

```
USAGE
  $ elasticsearch-knife plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ elasticsearch-knife plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.7/src/commands/plugins/index.ts)_

## `elasticsearch-knife plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ elasticsearch-knife plugins:install PLUGIN...

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
  $ elasticsearch-knife plugins add

EXAMPLES
  $ elasticsearch-knife plugins:install myplugin 

  $ elasticsearch-knife plugins:install https://github.com/someuser/someplugin

  $ elasticsearch-knife plugins:install someuser/someplugin
```

## `elasticsearch-knife plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ elasticsearch-knife plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ elasticsearch-knife plugins:inspect myplugin
```

## `elasticsearch-knife plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ elasticsearch-knife plugins:install PLUGIN...

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
  $ elasticsearch-knife plugins add

EXAMPLES
  $ elasticsearch-knife plugins:install myplugin 

  $ elasticsearch-knife plugins:install https://github.com/someuser/someplugin

  $ elasticsearch-knife plugins:install someuser/someplugin
```

## `elasticsearch-knife plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ elasticsearch-knife plugins:link PLUGIN

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
  $ elasticsearch-knife plugins:link myplugin
```

## `elasticsearch-knife plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ elasticsearch-knife plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ elasticsearch-knife plugins unlink
  $ elasticsearch-knife plugins remove
```

## `elasticsearch-knife plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ elasticsearch-knife plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ elasticsearch-knife plugins unlink
  $ elasticsearch-knife plugins remove
```

## `elasticsearch-knife plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ elasticsearch-knife plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ elasticsearch-knife plugins unlink
  $ elasticsearch-knife plugins remove
```

## `elasticsearch-knife plugins update`

Update installed plugins.

```
USAGE
  $ elasticsearch-knife plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
