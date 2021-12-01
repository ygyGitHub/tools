/*
 * @Author GyYu
 * @Description //TODO 日期格式化
 * @Date 17:30 2021/11/23
 * @Param date 00000000
 * dateSeparator  连接符  单元格属性过来的
 * @return
 **/
function formatDate(date: string, dateSeparator: string = '-'): string {
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
function verifyRealNumbers(str: string): boolean {
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
function deepClone(obj: object,newObj?:object): object {
	var newObj = newObj || {};
	for(let key in obj){
		if(typeof obj[key] == 'object'){
			newObj[key] = (obj[key].constructor === Array)?[]:{}
			deepClone(obj[key],newObj[key]);
		}else{
			newObj[key] = obj[key]
		}
	}
	return newObj;
}
/*
 * @Author GyYu
 * @Description 给数字补零
 * @Date 2021-11-23 1:08:37 ?F10: PM?
 * @param num： 需要补零的数值
 * @param len： 补零后的总位数
 */
function supplement(num: string, len: number): string {
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
function getBrowserKernel(): string {
	let explorer = window.navigator.userAgent,
		compare = function(s: string) {
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
	return '';
}
/*
 * @Author GyYu
 * @Description 获取地址栏参数
 * @Date 2021-12-1 10:40:02 ?F10: AM?
 * name：key名称
 * @Param
 * @return
 */
function getQueryString(): any {
	let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
	let r = window.location.search.substr(1).match(reg);
	if (r != null) return decodeURIComponent(r[2]);
	return null;
}
/*
 * @Author GyYu
 * @Description 获取uuid(多组随机数思想)
 * @Date 2021-11-23 1:15:41 ?F10: PM?
 * @Param
 * @return
 */
function generateUUID(): string {
	let d = new Date().getTime(); // 获取当前时间，毫秒
	if (window.performance && typeof window.performance.now === 'function') {
		d += performance.now(); //use high-precision timer if available
	}
	var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		let r = (d + Math.random() * 16) % 16 | 0;
		d = Math.floor(d / 16);
		return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
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
function getUrlKey(name: string): any {
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ''])[1].replace(/\+/g, '%20')) || null;
}

/*
 * @Author GyYu
 * @Description 千位符分割
 * @Date 2021-11-23 1:31:28 ?F10: PM?
 * @Param
 * @return
 */
function thousandCharacter(value: string): string {
	let Sreg = /^(?:0|\-?(?:0\.\d*[0-9]|[0-9]\d*(?:\.\d*[0-9])?))$/; //验证是不是实数 不是，原内容直接返回
	if (!Sreg.test(value)) {
		return value;
	}
	let reg = /\d{1,3}(?=(\d{3})+$)/g; // 三位三位
	let source = value.split('.'); // 截取小数点前后，小数点前的，千位符分割
	value = (source[0].replace(/,/g, '') + '').replace(reg, '$&,'); // 开始分割
	return value + (source[1] ? '.' + source[1] : ''); // 返回处理好的数据，并将小数点后的内容拼接回去
}
/*
 * @Author GyYu
 * @Description 一般日期转时间戳
 * @Date 2021-11-23 2:45:24 ?F10: PM?
 * @Param
 * @return
 */
function dataToTimestamp(date: string): number {
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
function isLeapYear(Year: number): boolean {
	return 0 == Year % 4 && (Year % 100 != 0 || Year % 400 == 0);
}
/*
 * @Author GyYu
 * @Description 验证是否是数组
 * @Date 2021-11-23 2:52:48 ?F10: PM?
 * @Param o 待验证内容
 * @return
 */
function isArrayFn(o: any): boolean {
	return Object.prototype.toString.call(o) === '[object Array]';
}
/*
 * @Author GyYu
 * @Description 获取元素中所有的样式属性，包含通过class设置的
 * @Date 2021-11-24 5:22:34 ?F10: PM?
 * @Param
 * @return
 */
function getStyle(element): object {
	if (element.currentStyle) {
		return element.currentStyle;
	} else {
		return document.defaultView.getComputedStyle(element, null);
	}
	return {};
}
/*
 * @Author GyYu
 * @Description 分页方法
 * @Date 2021-11-26 1:51:20 ?F10: PM?
 * @Param
 * allData：全量数据
 * pageSize：每页多少条 默认10条
 * @return
 */
function pageingData(allData: any, pageSize: number = 10): any {
	if (allData.length == 0) {
		return [];
	}
	let page = Math.ceil(allData.length / pageSize); // 计算页码
	let arr = [];
	for (let i = 1; i <= page; i++) {
		let start, end;
		if (i == 1) {
			start = 0;
			end = i * pageSize - 1;
		} else {
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
 * @return
 */
function trim(str: string): string {
	console.log(str);
	let reExtraSpace = /\s+/g;
	return str.replace(reExtraSpace, '');
}
/*
 * @Author GyYu
 * @Description 转义html标签
 * @Date 2021-12-1 9:01:45 ?F10: AM?
 * @Param
 * @return
 */
function htmlEncode(text: any): string {
	return text
		.replace(/&/g, '&')
		.replace(/\"/g, '"')
		.replace(/</g, '<')
		.replace(/>/g, '>');
}
/*
 * @Author GyYu
 * @Description 还原html标签
 * @Date 2021-12-1 9:02:06 ?F10: AM?
 * @Param
 * @return
 */
function htmlDecode(text: any): string {
	return text
		.replace(/&/g, '&')
		.replace(/"/g, '"')
		.replace(/</g, '<')
		.replace(/>/g, '>');
}
/*
 * @Author GyYu
 * @Description 防抖函数--在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时
 * @Date 2021-12-1 9:26:26 ?F10: AM?
 * @Param
 * @return
 */
function debounce(fun: any, delay: any) {
	return function(args) {
		let that = this;
		clearTimeout(fun['id']);
		fun['id'] = setTimeout(function() {
			fun.call(that, args);
		}, delay);
	};
}
/*
 * @Author GyYu
 * @Description 连字符转驼峰
 * @Date 2021-12-1 9:31:27 ?F10: AM?
 * @Param
 * @return
 */
function toCamelCase(str: string = '', separator: string = '-'): string {
	if (typeof str !== 'string') {
		throw new Error('Argument must be a string');
	}
	if (str === '') {
		return str;
	}
	const newExp = new RegExp('\\-(\\w)', 'g');
	return str.replace(newExp, (matched, $1) => {
		return $1.toUpperCase();
	});
}
/*
 * @Author GyYu
 * @Description 驼峰转连字符
 * @Date 2021-12-1 9:31:27 ?F10: AM?
 * @Param
 * @return
 */
function fromCamelCase(str: string = '', separator: string = '-'): string {
	if (typeof str !== 'string') {
		throw new Error('Argument must be a string');
	}
	if (str === '') {
		return str;
	}
	return str.replace(/([A-Z])/g, `${separator}$1`).toLowerCase();
}
/*
 * @Author GyYu
 * @Description 表单提交方式下载文件
 * @Date 2021-12-1 10:43:22 ?F10: AM?
 * @Param
 * @return
 */
function downLoad(url: string, type: string = 'GET', params?: object) {
	let form = document.createElement('form');
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
/*
 * @Author GyYu
 * @Description 判断是否移动设备访问
 * @Date 2021-12-1 11:18:26 ?F10: AM?
 * @Param
 * @return
 */
/* const isMobileUserAgent = () => {
	return /iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(window.navigator.userAgent.toLowerCase());
}; */
/*
 * @Author GyYu
 * @Description 判断是否苹果移动设备访问
 * @Date 2021-12-1 11:18:26 ?F10: AM?
 * @Param
 * @return
 */
/* const isAppleMobileDevice = () => {
	return /iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase());
}; */
/*
 * @Author GyYu
 * @Description 判断是否安卓移动设备访问
 * @Date 2021-12-1 11:18:26 ?F10: AM?
 * @Param
 * @return
 */
/* const isAndroidMobileDevice = () => {
	return /android/i.test(navigator.userAgent.toLowerCase());
}; */
/*
 * @Author GyYu
 * @Description 一个中文俩字符
 * @Date 2021-12-1 11:37:59 ?F10: AM?
 * @Param
 * @return
 */
const chineseLength = (str) => {
	return str.replace(/[^\x00-\xff]/g, '**').length;
};
export {
	generateUUID,
	getBrowserKernel,
	getQueryString,
	supplement,
	deepClone,
	formatDate,
	verifyRealNumbers,
	getUrlKey,
	thousandCharacter,
	dataToTimestamp,
	isLeapYear,
	isArrayFn,
	getStyle,
	trim,
	htmlEncode,
	htmlDecode,
	debounce,
	toCamelCase,
	fromCamelCase,
	downLoad,
/* 	isMobileUserAgent,
	isAppleMobileDevice,
	isAndroidMobileDevice, */
	chineseLength
};
