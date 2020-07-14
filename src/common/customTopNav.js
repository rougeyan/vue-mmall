import routes from '@/router/routes'

function flatRoutes(arr) {
  var newArr = [];
  arr.map((item)=>{
    if (Array.isArray(item.children) && item.children instanceof Array) {
      newArr.push(item); // 父项也要存进去
      // 如果是数组，调用(递归)steamroller 将其扁平化
      // 然后再 push 到 newArr 中
      newArr.push.apply(newArr, flatRoutes(item.children));
    } else {
        // 不是数组直接 push 到 newArr 中
        newArr.push(item);
    }
  })
  return newArr;
}

// var source = [1, [2], [3, [[4]]]];
// var r = flatRoutes(source);
// console.log(r);

function sort(arr){
  return arr.sort((a,b)=> a.meta.inTopNav-b.meta.inTopNav)
}
function getTopNav(){
  let flatArr = flatRoutes(routes);
  let newArr = []
  flatArr.map((item)=>{
    if(item.meta && !!item.meta.inTopNav){
      newArr.push(item)
    }
  })
  return newArr
}
export const topNav = sort(getTopNav())