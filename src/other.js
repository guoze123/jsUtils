function toThousands(num) {
  return parseFloat(num)
    .toFixed(2)
    .replace(/(\d{1,3})(?=(\d{3})+(?:\.))/g, "$1,");
}

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

function isType(value) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}


function random(lower, upper){
  lower = +lower || 0
  upper = +upper || 0
  return Math.random() * (upper - lower) + lower;
}
console.log(random(9,11));
