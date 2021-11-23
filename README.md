# ygy_tools_lib

[TOC]



> 工具方法插件

# Build Setup

``` bash
# install dependencies
npm i ygy_tools_lib
```

## quote

```javascript
import {formatDate} from "ygy_tools_lib";
```

# medthods

## formatDate

日期格式化

### call

```javascript
formatDate('yyyymmdd','-')
```

### Param

date：待格式化时间

dateSeparator：格式化连接符,可不传，默认'-'

### return

格式化后时间

## verifyRealNumbers

验证字符串是不是实数

### call

```javascript
verifyRealNumbers('0.00')
```

### Param

str：待验证字符串

### return

ture或false

## deepClone

深拷贝

### call

```javascript
deepClone(object)
```

### Param

obj：待拷贝对象

### return

拷贝后的对象

## supplement

首位补零

### call

```javascript
supplement('1',3)
```

### Param

num:待补0的内容

len：补0后的总长度

### return

案例中返回001

## getBrowserKernel

获取浏览器

### call

```javascript
getBrowserKernel()
```

### Param

### return

返回浏览器标识

ie/Firefox/Chrome/Opera/Safari

## generateUUID

获取随机数

### call

```javascript
generateUUID()
```

### Param

### return

“xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx”格式的唯一内容

## getUrlKey

获取随机数

### call

```javascript
getUrlKey(name)
```

### Param

name：地址栏参数key值

### return

返回key对应的value

## thousandCharacter

千位分隔符

### call

```javascript
thousandCharacter(value)
```

### Param

value：待处理的字符串数字

### return

千位分隔符处理完毕的内容

## dataToTimestamp

日期转时间戳

### call

```javascript
dataToTimestamp(date)
```

### Param

date：待转时间戳的日期

### return

时间戳

## isLeapYear

判断是否是闰年

### call

```javascript
isLeapYear(year)
```

### Param

year：年份

### return

true/false

## isArrayFn

验证是否是数组

### call

```javascript
isArrayFn(o)
```

### Param

o：待验证内容

### return

true/false



