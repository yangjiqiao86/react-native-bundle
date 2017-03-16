# react-native-bundle [![npm version badge](https://badge.fury.io/js/react-native-bundle.svg)](https://www.npmjs.com/package/react-native-bundle) [![downloads badge](http://img.shields.io/npm/dm/react-native-bundle.svg)](http://img.shields.io/npm/dm/react-native-bundle.svg)

> react native 自动化打包工具


## Install

```sh
npm install react-native-bundle --save-dev
```

```javascript
// Edit package.json
{
  "scripts": {
    "build": "npm run bundle",
    "bundle": "npm link && bundle --platform ios && bundle --platform android && npm unlink",
    "bundle-ios": "npm link && bundle --platform ios && npm unlink",
    "bundle-android": "npm link && bundle --platform android && npm unlink",
    "zip": "npm link && bundle --platform ios -z -i && bundle --platform android -z -i && npm unlink",
    "zip-ios": "npm link && bundle --platform ios -z -i && npm unlink",
    "zip-android": "npm link && bundle --platform android -z -i && npm unlink",
    "...": "..."
  }
}
```


## Uninstall

```bash
npm uninstall react-native-bundle --save-dev
```
