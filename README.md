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

## getStyle

获取元素中所有的样式属性，包含通过class设置的

### call

```javascript
getStyle(element)
```

### Param

element：元素

### return

对象

## trim

获取元素中所有的样式属性，包含通过class设置的

### call

```javascript
trim(str)
```

### Param

str：待处理元素

### return

处理后内容

## htmlEncode

转义html标签

### call

```javascript
htmlEncode(text)
```

### Param

text：待处理内容

### return

处理后内容

## htmlDecode

还原html标签

### call

```javascript
htmlDecode(text)
```

### Param

text：待处理内容

### return

处理后内容

## debounce

 防抖函数--在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时

### call

```javascript
debounce(function(){},delay)
```

### Param

delay：延迟执行时间

## toCamelCase

连字符转驼峰

### call

```javascript
toCamelCase(str,separator)
```

### Param

str：待处理内容,

separator:连接符

### return

驼峰

## fromCamelCase

连字符驼峰转连字符驼峰

### call

```javascript
toCamelCase(str,separator)
```

### Param

str：待处理内容,

separator:连接符

### return

连字符

## downLoad

表单提交方式下载文件

### call

```javascript
downLoad(url,type,params)
```

### Param

url：请求地址,

type:GET/POST,

params:参数对象

### return

无

## downLoad

表单提交方式下载文件

### call

```javascript
downLoad(url,type,params)
```

### Param

url：请求地址,

type:GET/POST,

params:参数对象

### return

无

## chineseLength

计算字符串长度，中文俩字符长度

### call

```javascript
chineseLength(str)
```

### Param

str：字符串,

### return

字符串长度
