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

## stringPrototype

string原型链挂载

### call

```javascript
stringPrototype(str)// 在页面初始化位置，先执行一下方法，将下面方法挂载到string原型链上
```

```javascript
/*
	 * @Description 字符串内容中全部替换
	 * @Param
	 * @use str.replaceAll('参数1','参数2')
	 * s1 待替换内容  s2 替换内容
	 * @return
	 * 替换后的字符串
	 */
1、String.prototype.ReplaceAll;//字符串内容中全部替换
	/*
	 * @Description 获取字符串长度，中文2个字符
	 * @use str.ChineseLength()
	 * @return 字符串长度，中文2个字符
	 */
2、String.prototype.ChineseLength;//获取字符串长度，中文2个字符
	/*
	 * @Author GyYu
	 * @Description 去掉字符串中空格
	 * @use str.Trim()
	 * @return 替换空格后的内容
	 */
3、String.prototype.Trim;//去掉字符串中空格
	/*
	 * @Author GyYu
	 * @Description 忽略大小写比较字符串是否相等
	 * @use str.IgnoreCaseEquals(str1)
	 * @return true/false
	 */
4、String.prototype.IgnoreCaseEquals;//忽略大小写比较字符串是否相等
	/*
	 * @Author GyYu
	 * @Description 不忽略大小写比较字符串是否相等
	 * @use str.Equals(str1)
	 * @return true/false
	 */
5、String.prototype.Equals;//不忽略大小写比较字符串是否相等
	/*
	 * @Author GyYu
	 * @Description  检查是否以特定的字符串开始
	 * @use str.startsWith(str1)
	 * @return true/false
	 */
6、String.prototype.startsWith;//检查是否以特定的字符串开始
	/*
	 * @Author GyYu
	 * @Description  检查是否以特定的字符串结束
	 * @use str.endsWith(str1)
	 * @return true/false
	 */
7、String.prototype.endsWith;//检查是否以特定的字符串结束
	/*
	 * @Author GyYu
	 * @Description  统计指定字符出现的次数
	 * @use str.Occurs(str1)
	 * @return number
	 */
8、String.prototype.Occurs;//统计指定字符出现的次数
	/*
	 * @Author GyYu
	 * @Description 反转字符串
	 * @use str.Reversal()
	 * @return 反转字符串
	 */
9、String.prototype.Reversal;//字符串反转
	/*
	 * @Author GyYu
	 * @Description  字符串占位符替换
	 * @use
	 * let a = "今天的天气很{0},大家一起去{1}！{2}"；
	 * (a as any).Assembly("晴朗","郊游","去不去？")
	 * @return 今天的天气很晴朗,大家一起去郊游！去不去？
	 */
10、String.prototype.Assembly;//字符串反转
	/*
	 * @Author GyYu
	 * @Description 密码安全级别
	 * @use str.PasswordSecurityLevel()
	 * @return number 0/1/2/3/4
	 */
11、String.prototype.PasswordSecurityLevel
	/*
	 * @Author GyYu
	 * @Description 常用正则表达式验证
	 * @Param type=number
	 * 1：手机号码；
	 * 2：座机；
	 * 3：邮箱；
	 * 4：税号；
	 * 5：身份证号；
	 * 6：邮政编码；
	 * 7：网址；
	 * 8：ip地址；
	 * 9：匹配是否是实数；
	 * 10：英文；
	 * 11：中文；
	 * 12：非零的正整数；
	 * 13：非零的负整数；
	 * 14：正浮点数；
	 * 15：负浮点数；
	 * 16：6-18位密码，可带“_”；
	 * @use str.RegularVerification(1)
	 * @return
	 * true/false
	 */
12、String.prototype.RegularVerification

```

