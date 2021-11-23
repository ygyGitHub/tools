/*
 * @Author GyYu
 * @Description //TODO 日期格式化
 * @Date 17:30 2021/11/23
 * @Param date 00000000
 * dateSeparator  连接符  单元格属性过来的
 * @return
 **/
function formatDate(date:string, dateSeparator: string = '-'): string {
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
/*
 * @Author GyYu
 * @Description //TODO 验证字符串是不是实数
 * @Date 17:40 2021/11/23
 * @Param
 * @return
 **/
function verifyRealNumbers(str:string): boolean {
	let Sreg = /^(?:0|\-?(?:0\.\d*[0-9]|[0-9]\d*(?:\.\d*[0-9])?))$/; //验证是不是实数 不是，原内容直接返回
	if (Sreg.test(str)) {
		return true;
	}
	return false;
}
/*
 * @Author GyYu
 * @Description 深拷贝
 * @Date 2021-11-23 1:06:23 ?F10: PM?
 */
function deepClone(obj:object): object {
	var _obj = JSON.stringify(obj),
		objClone = JSON.parse(_obj);
	return objClone;
}
/*
 * @Author GyYu
 * @Description 给数字补零
 * @Date 2021-11-23 1:08:37 ?F10: PM?
 * @param num： 需要补零的数值
 * @param len： 补零后的总位数
 */
function supplement(num:string, len:number):string {
	if (String(num).length > len) return num;
	return (Array(len).join('0') + num).slice(-len);
}
/*
 * @Author GyYu
 * @Description 获取浏览器内核
 * @Date 2021-11-23 1:11:31 ?F10: PM?
 * @Param
 * @return
 */
function getBrowserKernel():string {
	let explorer = window.navigator.userAgent,
		compare = function(s:string) {
			return explorer.indexOf(s) >= 0;
		},
		ie11 = (function() {
			return 'ActiveXObject' in window;
		})();
	if (compare('MSIE') || ie11) {
		return 'ie';
	} else if (compare('Firefox') && !ie11) {
		return 'Firefox';
	} else if (compare('Chrome') && !ie11) {
		return 'Chrome';
	} else if (compare('Opera') && !ie11) {
		return 'Opera';
	} else if (compare('Safari') && !ie11) {
		return 'Safari';
	}
	return''
}
/*
 * @Author GyYu
 * @Description 获取uuid(多组随机数思想)
 * @Date 2021-11-23 1:15:41 ?F10: PM?
 * @Param 
 * @return 
 */
function generateUUID():string {
    let d = new Date().getTime(); // 获取当前时间，毫秒
    if (window.performance && typeof window.performance.now === "function") {
        d += performance.now(); //use high-precision timer if available
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (d + Math.random() * 16)  % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}
/*
 * @Author GyYu
 * @Description 获取地址栏参数
 * @Date 2021-11-23 1:17:02 ?F10: PM?
 * @Param name key名称
 * @return 
 */
function getUrlKey(name:string):any{
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
}

/*
 * @Author GyYu
 * @Description 千位符分割
 * @Date 2021-11-23 1:31:28 ?F10: PM?
 * @Param 
 * @return 
 */
function thousandCharacter(value:string):string{
	let Sreg = /^(?:0|\-?(?:0\.\d*[0-9]|[0-9]\d*(?:\.\d*[0-9])?))$/ ; //验证是不是实数 不是，原内容直接返回
	if(!Sreg.test(value)){
	    return value
	}
	let reg=/\d{1,3}(?=(\d{3})+$)/g;  // 三位三位
	let source = value.split("."); // 截取小数点前后，小数点前的，千位符分割
	value = (source[0].replace(/,/g,'') + '').replace(reg, '$&,'); // 开始分割
	return value+(source[1]?"."+source[1]:"") // 返回处理好的数据，并将小数点后的内容拼接回去
}
/*
 * @Author GyYu
 * @Description 一般日期转时间戳
 * @Date 2021-11-23 2:45:24 ?F10: PM?
 * @Param 
 * @return 
 */
function dataToTimestamp(date:string):number{
	date = formatDate(date);
	return new Date(date).getTime() / 1000;
}
/*
 * @Author GyYu
 * @Description 判断是否是闰年
 * @Date 2021-11-23 2:48:51 ?F10: PM?
 * @Param 
 * @return 
 */
function isLeapYear(Year:number):boolean{
	if (((Year % 4) == 0) && ((Year % 100) != 0) || ((Year % 400) == 0)) {
	    return (true);
	} else {
	    return (false);
	}
}
/*
 * @Author GyYu
 * @Description 验证是否是数组
 * @Date 2021-11-23 2:52:48 ?F10: PM?
 * @Param o 待验证内容
 * @return 
 */
function isArrayFn(o:any):boolean{
	return Object.prototype.toString.call(o) === '[object Array]';
}
export {
	generateUUID, getBrowserKernel, supplement, 
	deepClone, formatDate, verifyRealNumbers,
	getUrlKey,thousandCharacter,dataToTimestamp,
	isLeapYear,isArrayFn
	};
