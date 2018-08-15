var s2=0;
function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  // 箭头函数
  setInterval(() => this.s1++, 1000);//而这里是绑定Timer下的变量
  // 普通函数
  setInterval(function () {
    s2++;//指向全局变量
  }, 1000);
}

var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', s2), 3100);
