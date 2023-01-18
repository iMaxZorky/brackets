module.exports = function check(str, bracketsConfig) {
  /*НЕ ДО КОНЦА УДАВШЕЕСЯ РЕШЕНИЕ*/
  // var stack = [];
  // var opened = "";
  // var closed = "";
  // const pairs = {};
  // bracketsConfig.forEach((e) => {
  //   pairs[e[1]] = e[0];
  //   opened += e[0];
  //   closed += e[1];
  // });

  // for (let i = 0; i < str.length; i++) {
    
  //   if (opened.indexOf(str[i]) != -1) {
  //     stack.push(str[i]);
  //   }
  //   if (closed.indexOf(str[i]) != -1) {
  //     if (stack.length == 0) {
  //       return false;
  //     } else if (stack.pop() != pairs[str[i]]) {
  //       return false;
  //     }
  //   }
  // }
  // if (stack.length > 0) {
  //   return false;
  // } else {
  //   return true;
  // }

  var pairs = [];
  bracketsConfig.forEach((e) => {
    pairs.push(e[0] + e[1]);
  });
  var lenBefore = str.length;
  while (lenBefore > 0) {
    pairs.forEach((pair) => {
      str = str.replaceAll(pair, "");
    });
    len = str.length;
    if (len == lenBefore) {
      return false;
    } else {
      lenBefore = len;
    }
  }
  return true
};
