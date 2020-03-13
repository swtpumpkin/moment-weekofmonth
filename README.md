# moment-weekofmonth
[![moment-weekofmonth-CI](https://github.com/swtpumpkin/moment-weekofmonth/workflows/moment-weekofmonth-CI/badge.svg?branch=master)](https://github.com/swtpumpkin/moment-weekofmonth/actions)
[![version](https://img.shields.io/npm/v/moment-weekofmonth.svg?style=flat-square)]((http://npm.im/moment-weekofmonth))
[![install size](https://packagephobia.now.sh/badge?p=moment-weekofmonth)](https://packagephobia.now.sh/result?p=moment-weekofmonth)
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
