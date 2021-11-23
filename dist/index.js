"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArrayFn = exports.isLeapYear = exports.dataToTimestamp = exports.thousandCharacter = exports.getUrlKey = exports.verifyRealNumbers = exports.formatDate = exports.deepClone = exports.supplement = exports.getBrowserKernel = exports.generateUUID = void 0;
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
    var Sreg = /^(?:0|\-?(?:0\.\d*[0-9]|[0-9]\d*(?:\.\d*[0-9])?))$/; //验证是不是实数 不是，原内容直接返回
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
function deepClone(obj) {
    var _obj = JSON.stringify(obj), objClone = JSON.parse(_obj);
    return objClone;
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
    if (window.performance && typeof window.performance.now === "function") {
        d += performance.now(); //use high-precision timer if available
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
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
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null;
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
    var source = value.split("."); // 截取小数点前后，小数点前的，千位符分割
    value = (source[0].replace(/,/g, '') + '').replace(reg, '$&,'); // 开始分割
    return value + (source[1] ? "." + source[1] : ""); // 返回处理好的数据，并将小数点后的内容拼接回去
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
    if (((Year % 4) == 0) && ((Year % 100) != 0) || ((Year % 400) == 0)) {
        return (true);
    }
    else {
        return (false);
    }
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
