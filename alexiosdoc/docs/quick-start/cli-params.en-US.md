---
order: 1
---

# Command Line Params

Contains three commands: `dev`, `build`, and `serve`. There are some command line parameters to quickly set certain functions.

## dev

- <b>--port</b>

  Custom port number, default `3000`.

- <b>--open</b>

  Whether to automatically open the browser, default `false`.

- <b>--mock</b>

  Whether to enable interface mock, default `true`. Set `--port=false` to close all interface mocks with one step.

- <b>--ie</b>

  The lowest compatible ie version, not compatible by default. Supports `9` and `11`. For example: setting `--ie=9` will automatically import the corresponding polyfill at all entrances.

## build

- <b>--ie</b>

  The lowest compatible ie version, not compatible by default. Supports `9` and `11`. For example: setting `--ie=9` will automatically import the corresponding polyfill at all entrances.

- <b>--analysis</b>

  Whether to display the product analysis page. Use it carefully for automated deployment, will start a server to block the current process. The default is `false`.

## serve

- Nothing.
