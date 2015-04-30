# peerbot

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]

[npm-image]: https://img.shields.io/npm/v/peerbot.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/peerbot
[travis-image]: https://img.shields.io/travis/moose-team/peerbot.svg?style=flat-square
[travis-url]: https://travis-ci.org/moose-team/peerbot

Message seeding utility for [friends](https://github.com/moose-team/friends) p2p chat.

Run this on a server to ensure that there will always be a peer available to connect to for a given channel on friends.

## Install

1. Use newest io.js and npm ((`>= 1.8.1`, `>= 2.8.3`).
2. Install `electron-prebuilt` & `electron-spawn` globally.
3. Install `peerbot` globally.

```
npm install -g peerbot
```

## Usage

```
peerbot
```

`peerbot` always seeds the `#friends` channel. Pass `--channel=mychannel` to also seed another channel.

```
peerbot --channel=cats
```

You can specify as many channels as you want with multiple `--channel` flags.

### Running on headless Ubuntu

If you're running `peerbot` on headless Ubuntu, you will need to use `xvfb-run` to create a virtual display so that Chromium can run:

```
$ sudo apt-get install xvfb
$ xvfb-run peerbot
```

Also you [may need to `apt-get install libgconf-2-4`](https://github.com/atom/electron/issues/1518)

## Build and run peerbot locally

Same requirements as in [Install](#install).

```
git clone git@github.com:moose-team/peerbot.git
cd peerbot
npm install
npm run rebuild-leveldb
npm start
```

## Todo

* Better command line interface
  * usage on `-h`/`--help`
  * version on `-v`/`--version`
  * better channel specification method

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

[MIT](LICENSE.md)
