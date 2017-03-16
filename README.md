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
    "zip": "npm link && bundle --platform ios -z -i --dest build --zipdest build --inlinedest build && bundle --platform android -z -i --dest build --zipdest build --inlinedest build && npm unlink",
    "zip-ios": "npm link && bundle --platform ios -z -i --dest build --zipdest build --inlinedest build && npm unlink",
    "zip-android": "npm link && bundle --platform android -z -i --dest build --zipdest build --inlinedest build && npm unlink",
    "...": "..."
  }
}
```


## Uninstall

```bash
npm uninstall react-native-bundle --save-dev
```


## Bundle Options

```bash
Usage: bundle [options]

选项：
  -p, --platform    对应打包平台      [字符串] [必需] [可选值: "ios", "android"]
  -z, --zip         是否打zip包[true|false]                               [布尔]
  -i, --inline      是否打内置包[true|false]                              [布尔]
  -d, --dev         是否开发环境[true|false]，开发环境代码不进行压缩      [布尔]
  -a, --dest        打包文件生成目录                  [字符串] [默认值: "build"]
  -b, --zipdest     打zip包生成目录                   [字符串] [默认值: "build"]
  -c, --inlinedest  打内置包生成目录                  [字符串] [默认值: "build"]
  -h, --help        显示帮助信息                                          [布尔]

示例：
  bundle --platform ios -z -i -d --dest build --zipdest build --inlinedest build

copyright 2017
```
