/**
 * 千位符格式化
 * @param {number} num
 */
function toThousands(num) {
  return parseFloat(num)
    .toFixed(2)
    .replace(/(\d{1,3})(?=(\d{3})+(?:\.))/g, "$1,");
}
/**
 * url获取参数
 * @param {string} param 参数名
 */
function getParameter(param) {
  var query = window.location.search; // 获取URL地址中？后的所有字符
  var iLen = param.length; // 获取你的参数名称长度
  var iStart = query.indexOf(param); // 获取你该参数名称的其实索引
  if (iStart == -1)
    // -1为没有该参数
    return "";
  iStart += iLen + 1;
  var iEnd = query.indexOf("&", iStart); // 获取第二个参数的其实索引
  if (iEnd == -1)
    // 只有一个参数
    return query.substring(iStart); // 获取单个参数的参数值
  return query.substring(iStart, iEnd); // 获取第二个参数的值
}
/**
 *判断数据类型
 * @param {*} value
 */
function isType(value) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}
/**
 * 区域之间的随机数
 * @param {number} lower
 * @param {number} upper
 */
function random(lower, upper) {
  lower = +lower || 0;
  upper = +upper || 0;
  return Math.random() * (upper - lower) + lower;
}
/**
 * 全屏 F11
 */
function isFullscreenForNoScroll() {
  let explorer = window.navigator.userAgent.toLowerCase();
  if (explorer.indexOf("chrome") > 0) {
    //webkit
    if (
      document.body.scrollHeight === window.screen.height &&
      document.body.scrollWidth === window.screen.width
    ) {
      alert("全屏");
    } else {
      alert("不全屏");
    }
  } else {
    //IE 9+  fireFox
    if (
      window.outerHeight === window.screen.height &&
      window.outerWidth === window.screen.width
    ) {
      alert("全屏");
    } else {
      alert("不全屏");
    }
  }
}
/**
 * 退出全屏
 */
function exitFullscreen() {
  let elem = parent.document;
  elem.webkitCancelFullScreen
    ? elem.webkitCancelFullScreen()
    : elem.mozCancelFullScreen
    ? elem.mozCancelFullScreen()
    : elem.cancelFullScreen
    ? elem.cancelFullScreen()
    : elem.msExitFullscreen
    ? elem.msExitFullscreen()
    : elem.exitFullscreen
    ? elem.exitFullscreen()
    : alert("切换失败,可尝试Esc退出");
}


export {
  toThousands,
  getParameter,
  isType,
  random,
  isFullscreenForNoScroll,
  exitFullscreen,
};
