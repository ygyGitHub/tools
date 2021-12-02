"use strict";
exports.__esModule = true;
exports.stringPrototype = exports.getPosition = exports.removeClass = exports.addClass = exports.hasClass = exports.chineseLength = exports.downLoad = exports.fromCamelCase = exports.toCamelCase = exports.debounce = exports.htmlDecode = exports.htmlEncode = exports.trim = exports.getStyle = exports.isArrayFn = exports.isLeapYear = exports.dataToTimestamp = exports.thousandCharacter = exports.getUrlKey = exports.verifyRealNumbers = exports.formatDate = exports.deepClone = exports.supplement = exports.getBrowserKernel = exports.generateUUID = void 0;
var stringPrototype_1 = require("./stringPrototype");
exports.stringPrototype = stringPrototype_1.stringPrototype;
/*
 * @Author GyYu
 * @Description //TODO 日期格式化
 * @Date 17:30 2021/11/23
 * @Param date 00000000
 * dateSeparator  连接符  单元格属性过来的
 * @return
 **/
function formatDate(date, dateSeparator) {
    if (dateSeparator === void 0) { dateSeparator = '-'; }
    if (!date) {
        return '';
    }
    if (date.length == 4) {
        return date;
    }
    if (date.length == 6) {
        return date.replace(/^(\d{4})(\d{2})$/, '$1' + dateSeparator + '$2');
    }
    if (date.length == 8) {
        return date.replace(/^(\d{4})(\d{2})(\d{2})$/, '$1' + dateSeparator + '$2' + dateSeparator + '$3');
    }
    return '';
}
exports.formatDate = formatDate;
/*
 * @Author GyYu
 * @Description //TODO 验证字符串是不是实数
 * @Date 17:40 2021/11/23
 * @Param
 * @return
 **/
function verifyRealNumbers(str) {
    var Sreg = /^(?:0|\-?(?:0\.\d*[0-9]|[0-9]\d*(?:\.\d*[0-9])?))$/; //验证是不是实数
    if (Sreg.test(str)) {
        return true;
    }
    return false;
}
exports.verifyRealNumbers = verifyRealNumbers;
/*
 * @Author GyYu
 * @Description 深拷贝
 * @Date 2021-11-23 1:06:23 ?F10: PM?
 */
function deepClone(obj, newObj) {
    var newObj = newObj || {};
    for (var key in obj) {
        if (typeof obj[key] == 'object') {
            newObj[key] = obj[key].constructor === Array ? [] : {};
            deepClone(obj[key], newObj[key]);
        }
        else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
exports.deepClone = deepClone;
/*
 * @Author GyYu
 * @Description 给数字补零
 * @Date 2021-11-23 1:08:37 ?F10: PM?
 * @param num： 需要补零的数值
 * @param len： 补零后的总位数
 */
function supplement(num, len) {
    if (String(num).length > len)
        return num;
    return (Array(len).join('0') + num).slice(-len);
}
exports.supplement = supplement;
/*
 * @Author GyYu
 * @Description 获取浏览器内核
 * @Date 2021-11-23 1:11:31 ?F10: PM?
 * @Param
 * @return
 */
function getBrowserKernel() {
    var explorer = window.navigator.userAgent, compare = function (s) {
        return explorer.indexOf(s) >= 0;
    }, ie11 = (function () {
        return 'ActiveXObject' in window;
    })();
    if (compare('MSIE') || ie11) {
        return 'ie';
    }
    else if (compare('Firefox') && !ie11) {
        return 'Firefox';
    }
    else if (compare('Chrome') && !ie11) {
        return 'Chrome';
    }
    else if (compare('Opera') && !ie11) {
        return 'Opera';
    }
    else if (compare('Safari') && !ie11) {
        return 'Safari';
    }
    return '';
}
exports.getBrowserKernel = getBrowserKernel;
/*
 * @Author GyYu
 * @Description 获取uuid(多组随机数思想)
 * @Date 2021-11-23 1:15:41 ?F10: PM?
 * @Param
 * @return
 */
function generateUUID() {
    var d = new Date().getTime(); // 获取当前时间，毫秒
    if (window.performance && typeof window.performance.now === 'function') {
        d += performance.now(); //use high-precision timer if available
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
}
exports.generateUUID = generateUUID;
/*
 * @Author GyYu
 * @Description 获取地址栏参数
 * @Date 2021-11-23 1:17:02 ?F10: PM?
 * @Param name key名称
 * @return
 */
function getUrlKey(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ''])[1].replace(/\+/g, '%20')) || null;
}
exports.getUrlKey = getUrlKey;
/*
 * @Author GyYu
 * @Description 千位符分割
 * @Date 2021-11-23 1:31:28 ?F10: PM?
 * @Param
 * @return
 */
function thousandCharacter(value) {
    var Sreg = /^(?:0|\-?(?:0\.\d*[0-9]|[0-9]\d*(?:\.\d*[0-9])?))$/; //验证是不是实数 不是，原内容直接返回
    if (!Sreg.test(value)) {
        return value;
    }
    var reg = /\d{1,3}(?=(\d{3})+$)/g; // 三位三位
    var source = value.split('.'); // 截取小数点前后，小数点前的，千位符分割
    value = (source[0].replace(/,/g, '') + '').replace(reg, '$&,'); // 开始分割
    return value + (source[1] ? '.' + source[1] : ''); // 返回处理好的数据，并将小数点后的内容拼接回去
}
exports.thousandCharacter = thousandCharacter;
/*
 * @Author GyYu
 * @Description 一般日期转时间戳
 * @Date 2021-11-23 2:45:24 ?F10: PM?
 * @Param
 * @return
 */
function dataToTimestamp(date) {
    date = formatDate(date);
    return new Date(date).getTime() / 1000;
}
exports.dataToTimestamp = dataToTimestamp;
/*
 * @Author GyYu
 * @Description 判断是否是闰年
 * @Date 2021-11-23 2:48:51 ?F10: PM?
 * @Param
 * @return
 */
function isLeapYear(Year) {
    return 0 == Year % 4 && (Year % 100 != 0 || Year % 400 == 0);
}
exports.isLeapYear = isLeapYear;
/*
 * @Author GyYu
 * @Description 验证是否是数组
 * @Date 2021-11-23 2:52:48 ?F10: PM?
 * @Param o 待验证内容
 * @return
 */
function isArrayFn(o) {
    return Object.prototype.toString.call(o) === '[object Array]';
}
exports.isArrayFn = isArrayFn;
/*
 * @Author GyYu
 * @Description 获取元素中所有的样式属性，包含通过class设置的
 * @Date 2021-11-24 5:22:34 ?F10: PM?
 * @Param
 * @return
 */
function getStyle(element) {
    if (element.currentStyle) {
        return element.currentStyle;
    }
    else {
        return document.defaultView.getComputedStyle(element, null);
    }
    return {};
}
exports.getStyle = getStyle;
/*
 * @Author GyYu
 * @Description 分页方法
 * @Date 2021-11-26 1:51:20 ?F10: PM?
 * @Param
 * allData：全量数据
 * pageSize：每页多少条 默认10条
 * @return
 */
function pageingData(allData, pageSize) {
    if (pageSize === void 0) { pageSize = 10; }
    if (allData.length == 0) {
        return [];
    }
    var page = Math.ceil(allData.length / pageSize); // 计算页码
    var arr = [];
    for (var i = 1; i <= page; i++) {
        var start = void 0, end = void 0;
        if (i == 1) {
            start = 0;
            end = i * pageSize - 1;
        }
        else {
            start = i * pageSize - pageSize;
            end = i * pageSize - 1;
        }
        arr.push(this.deepClone(allData.slice(start, end)));
    }
    return arr;
}
/*
 * @Author GyYu
 * @Description 字符串去除空格
 * @Date 2021-12-1 8:40:52 ?F10: AM?
 * @Param
 * str 待处理字符串
 * type
 * 1 全部替换
 * 2 前后替换
 * 3 前替换
 * 4 后替换
 * @return
 */
function trim(str, type) {
    if (type === void 0) { type = 1; }
    switch (type) {
        case 1:
            return str.replace(/\s+/g, ''); // 全部替换
        case 2:
            return str.replace(/(^\s*)|(\s*$)/g, ''); // 前后
        case 3:
            return str.replace(/(^\s*)/g, ''); // 前
        case 4:
            return str.replace(/(\s*$)/g, ''); // 后
        default:
            return str;
    }
}
exports.trim = trim;
/*
 * @Author GyYu
 * @Description 转义html标签
 * @Date 2021-12-1 9:01:45 ?F10: AM?
 * @Param
 * @return
 */
function htmlEncode(text) {
    return text
        .replace(/&/g, '&')
        .replace(/\"/g, '"')
        .replace(/</g, '<')
        .replace(/>/g, '>');
}
exports.htmlEncode = htmlEncode;
/*
 * @Author GyYu
 * @Description 还原html标签
 * @Date 2021-12-1 9:02:06 ?F10: AM?
 * @Param
 * @return
 */
function htmlDecode(text) {
    return text
        .replace(/&/g, '&')
        .replace(/"/g, '"')
        .replace(/</g, '<')
        .replace(/>/g, '>');
}
exports.htmlDecode = htmlDecode;
/*
 * @Author GyYu
 * @Description 防抖函数--在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时
 * @Date 2021-12-1 9:26:26 ?F10: AM?
 * @Param
 * @return
 */
function debounce(fun, delay) {
    return function (args) {
        var that = this;
        clearTimeout(fun['id']);
        fun['id'] = setTimeout(function () {
            fun.call(that, args);
        }, delay);
    };
}
exports.debounce = debounce;
/*
 * @Author GyYu
 * @Description 连字符转驼峰
 * @Date 2021-12-1 9:31:27 ?F10: AM?
 * @Param
 * @return
 */
function toCamelCase(str, separator) {
    if (str === void 0) { str = ''; }
    if (separator === void 0) { separator = '-'; }
    if (typeof str !== 'string') {
        throw new Error('Argument must be a string');
    }
    if (str === '') {
        return str;
    }
    var newExp = new RegExp('\\-(\\w)', 'g');
    return str.replace(newExp, function (matched, $1) {
        return $1.toUpperCase();
    });
}
exports.toCamelCase = toCamelCase;
/*
 * @Author GyYu
 * @Description 驼峰转连字符
 * @Date 2021-12-1 9:31:27 ?F10: AM?
 * @Param
 * @return
 */
function fromCamelCase(str, separator) {
    if (str === void 0) { str = ''; }
    if (separator === void 0) { separator = '-'; }
    if (typeof str !== 'string') {
        throw new Error('Argument must be a string');
    }
    if (str === '') {
        return str;
    }
    return str.replace(/([A-Z])/g, "".concat(separator, "$1")).toLowerCase();
}
exports.fromCamelCase = fromCamelCase;
/*
 * @Author GyYu
 * @Description 表单提交方式下载文件
 * @Date 2021-12-1 10:43:22 ?F10: AM?
 * @Param
 * @return
 */
function downLoad(url, type, params) {
    if (type === void 0) { type = 'GET'; }
    var form = document.createElement('form');
    form.id = 'form';
    form.name = 'form';
    form.enctype = 'application/x-www-form-urlencoded';
    document.body.appendChild(form);
    if (params) {
        for (var obj in params) {
            if (params.hasOwnProperty(obj)) {
                var input = document.createElement('input');
                input.type = 'hidden';
                input.name = obj;
                input.value = params[obj];
                form.appendChild(input);
            }
        }
    }
    //请求方式POST提交时 默认Content-Type就是application/x-www-form-urlencoded
    form.method = type;
    form.action = url;
    form.submit();
    document.body.removeChild(form);
}
exports.downLoad = downLoad;
/*
 * @Author GyYu
 * @Description 一个中文俩字符
 * @Date 2021-12-1 11:37:59 ?F10: AM?
 * @Param
 * @return
 */
var chineseLength = function (str) {
    return str.replace(/[^\x00-\xff]/g, '**').length;
};
exports.chineseLength = chineseLength;
/*
 * @Author GyYu
 * @Description 是否有
 * @Date 2021-12-1 3:09:03 ?F10: PM?
 * @Param
 * ele：页面标签
 * cls：类名
 * @return
 */
var hasClass = function (ele, cls) {
    if (!ele || !cls)
        return false;
    if (ele.classList) {
        return ele.classList.contains(cls);
    }
    else {
        return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    }
};
exports.hasClass = hasClass;
/*
 * @Author GyYu
 * @Description 增加类名
 * @Date 2021-12-1 3:11:54 ?F10: PM?
 * @Param
 * ele：页面标签
 * cls：类名
 * @return
 */
var addClass = function (ele, cls) {
    if (ele.classList) {
        ele.classList.add(cls);
    }
    else {
        if (!hasClass(ele, cls))
            ele.className += '' + cls;
    }
};
exports.addClass = addClass;
/*
 * @Author GyYu
 * @Description 移除类名
 * @Date 2021-12-1 3:14:59 ?F10: PM?
 * @Param
 * ele：页面标签
 * cls：类名
 * @return
 */
var removeClass = function (ele, cls) {
    if (ele.classList) {
        ele.classList.remove(cls);
    }
    else {
        ele.className = ele.className.replace(new RegExp('(^|\\b)' + ele.className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
};
exports.removeClass = removeClass;
/*
 * @Author GyYu
 * @Description 获取元素相对于浏览器窗口的位置
 * @Date 2021-12-1 3:20:06 ?F10: PM?
 * @Param element 页面元素
 * @return {x，y}
 */
var getPosition = function (element) {
    var offsety = 0;
    offsety += element.offsetTop;
    var offsetx = 0;
    offsetx += element.offsetLeft;
    if (element.offsetParent != null) {
        getPosition(element.offsetParent);
    }
    return { Left: offsetx, Top: offsety };
};
exports.getPosition = getPosition;
