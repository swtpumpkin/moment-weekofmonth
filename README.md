# moment-weekofmonth
[![Build Status](https://travis-ci.org/swtpumpkin/moment-weekofmonth.svg?branch=master)](https://travis-ci.org/swtpumpkin/moment-weekofmonth)
[![version](https://img.shields.io/npm/v/moment-weekofmonth.svg?style=flat-square)]((http://npm.im/moment-weekofmonth))
[![downloads](https://img.shields.io/npm/dm/moment-weekofmonth.svg?style=flat-square)](https://npm-stat.com/charts.html?package=moment-weekofmonth&from=2020-03-05)  

Gets the week of the month.  
Use the moment object to find the week number of the month.

## Installation
Install via NPM:

```bash
npm install moment moment-weekofmonth
```

## Usage

#### Javascript
```javascript
var moment = require("moment");
var wom = require("moment-weekofmonth");
var nowDate = moment(); // 2020-02-29

wom(moment('2020-01-01')); // 1
wom(nowDate); // 5
wom(); // TypeError: Cannot read property 'week' of undefined
```

#### TypeScript
```typescript
import * as moment from "moment";
import * as wom from "moment-weekofmonth";

const nowDate = moment(); // 2020-02-29

wom(moment('2020-01-01')); // 1
wom(nowDate); // 5
wom(); // TypeError: Cannot read property 'week' of undefined```
```
