"use strict";
exports.__esModule = true;
exports.stringPrototype = void 0;
/**
 * @Description:重写string原型链方法
 * @author GyYU
 * @Date 2021-12-1 5:02:54 ?F10: PM?
 */
var stringPrototype = function () {
    /*
     * @Author GyYu
     * @Description 字符串内容中全部替换
     * @Date 2021-12-2 9:58:13 ?F10: AM?
     * @Param
     * s1 待替换内容  s2 替换内容
     * @return
     * 替换后的字符串
     */
    String.prototype['ReplaceAll'] = function (s1, s2) {
        return this.replace(new RegExp(s1, 'gm'), s2);
    };
    /*
     * @Author GyYu
     * @Description
     * @Date 2021-12-2 9:59:36 ?F10: AM?
     * @use str.ChineseLength()
     * @return 字符串长度，中文2个字符
     */
    String.prototype['ChineseLength'] = function () {
        return this.replace(/[^\x00-\xff]/g, '**').length;
    };
    /*
     * @Author GyYu
     * @Description 去掉字符串中空格
     * @Date 2021-12-2 9:59:36 ?F10: AM?
     * @use str.Trim()
     * @return 替换空格后的内容
     */
    String.prototype['Trim'] = function () {
        return this.replace(/\s+/g, '');
    };
    /*
     * @Author GyYu
     * @Description 忽略大小写比较字符串是否相等
     * @Date 2021-12-2 9:59:36 ?F10: AM?
     * @use str.IgnoreCaseEquals(str1)
     * @return true/false
     */
    String.prototype['IgnoreCaseEquals'] = function (str) {
        return this.toLowerCase() == str.toLowerCase();
    };
    /*
     * @Author GyYu
     * @Description 不忽略大小写比较字符串是否相等
     * @Date 2021-12-2 9:59:36 ?F10: AM?
     * @use str.Equals(str1)
     * @return true/false
     */
    String.prototype['Equals'] = function (str) {
        return this == str;
    };
    /*
     * @Author GyYu
     * @Description  检查是否以特定的字符串开始
     * @Date 2021-12-2 9:59:36 ?F10: AM?
     * @use str.startsWith(str1)
     * @return true/false
     */
    String.prototype['startsWith'] = function (str) {
        return this.substr(0, str.length) == str;
    };
    /*
     * @Author GyYu
     * @Description  检查是否以特定的字符串结束
     * @Date 2021-12-2 9:59:36 ?F10: AM?
     * @use str.endsWith(str1)
     * @return true/false
     */
    String.prototype['endsWith'] = function (str) {
        return this.substr(this.length - str.length) == str;
    };
    /*
     * @Author GyYu
     * @Description  统计指定字符出现的次数
     * @Date 2021-12-2 9:59:36 ?F10: AM?
     * @use str.Occurs(str1)
     * @return number
     */
    String.prototype['Occurs'] = function (str) {
        return this.split(str).length - 1;
    };
    /*
     * @Author GyYu
     * @Description  统计指定字符出现的次数
     * @Date 2021-12-2 9:59:36 ?F10: AM?
     * @use str.Reversal()
     * @return 反转字符串
     */
    // 字符串反转
    String.prototype['Reversal'] = function () {
        return this.split('')
            .reverse()
            .join('');
    };
    /*
     * @Author GyYu
     * @Description  统计指定字符出现的次数
     * @Date 2021-12-2 9:59:36 ?F10: AM?
     * @use
     * let a = "今天的天气很{0},大家一起去{1}！{2}"；
     * (a as any).Assembly("晴朗","郊游","去不去？")
     * @return 今天的天气很晴朗,大家一起去郊游！去不去？
     */
    // 字符串占位符替换
    // 使用方式：let a = "今天的天气很{0},大家一起去{1}！{2}"；(a as any).Assembly("晴朗","郊游","去不去？")
    String.prototype['Assembly'] = function () {
        var e = arguments;
        return this.replace(/{(\d+)}/g, function (t, n) {
            return typeof e[n] != 'undefined' ? e[n] : t;
        });
    };
    /*
     * @Author GyYu
     * @Description 密码安全级别
     * @Date 2021-12-2 9:54:36 ?F10: AM?
     * @use str.PasswordSecurityLevel()
     * @return number
     */
    String.prototype['PasswordSecurityLevel'] = function () {
        var securityLevelFlag = 0;
        var containSpecial = RegExp(/[(\ )(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\-)(\_)(\+)(\=)(\[)(\])(\{)(\})(\|)(\\)(\;)(\:)(\')(\")(\,)(\.)(\/)(\<)(\>)(\?)(\)]+/);
        if (this.length < 6) {
            return 0;
        }
        else {
            if (/[a-z]/.test(this)) {
                securityLevelFlag++; //lowercase 小写 1级
            }
            if (/[A-Z]/.test(this)) {
                securityLevelFlag++; //uppercase 大写 2级
            }
            if (/[0-9]/.test(this)) {
                securityLevelFlag++; //digital   数字 3级
            }
            if (containSpecial.test(this)) {
                securityLevelFlag++; //specialcase  特殊符号 4级
            }
            return securityLevelFlag;
        }
    };
    /*
     * @Author GyYu
     * @Description 常用正则表达式验证
     * @Date 2021-12-2 11:10:17 ?F10: AM?
     * @Param
     * @return
     */
    String.prototype['RegularVerification'] = function (type) {
        switch (type) {
            case 1: //手机号码
                return /^1[0-9]{10}$/.test(this);
            case 2: // 座机
                return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(this);
            case 3: // 邮箱
                return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(this);
            case 4: // 税号
                return /^[A-Z0-9]{15}$|^[A-Z0-9]{17}$|^[A-Z0-9]{18}$|^[A-Z0-9]{20}$/.test(this);
            case 5: // 身份证号
                return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this);
            case 6: // 邮政编码
                return /[1-9]\d{5}(?!\d)/.test(this);
            case 7: // 网址
                return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(this);
            case 8: // ip地址
                return /\d+\.\d+\.\d+\.\d+/.test(this);
            case 9: // 匹配是否是实数
                return /^(?:0|\-?(?:0\.\d*[0-9]|[0-9]\d*(?:\.\d*[0-9])?))$/.test(this);
            case 10: // 英文
                return /^[a-zA-Z]+$/.test(this);
            case 11: // 中文
                return /^[\u4E00-\u9FA5]+$/.test(this);
            case 12: // 非零的正整数
                return /^[1-9]\d*$/.test(this);
            case 13: // 非零的负整数
                return /^-[1-9]\d*$/.test(this);
            case 14: // 正浮点数
                return /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/.test(this);
            case 15: // 负浮点数
                return /^-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)$/.test(this);
            case 16: // 6-18位密码，可带“_”
                return /^(\w){6,18}$/.test(this);
            default:
                return false;
        }
    };
};
exports.stringPrototype = stringPrototype;
