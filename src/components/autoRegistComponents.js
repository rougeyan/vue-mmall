import Vue from 'vue'

// 允许便利文件子目录
function spliteFileNameFromPath(path){
  let arr = path.split("/");
  return arr[arr.length-1]
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

// 遍历注册到Vue组件中
function registerToVue(requireComponent){
  requireComponent.keys().forEach(fileName => {
    // console.log(fileName);
    const componentConfig = requireComponent(fileName)
   
    const componentName = spliteFileNameFromPath(
      capitalizeFirstLetter(
        fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
        //因为得到的filename格式是: './baseButton.vue', 所以这里我们去掉头和尾，只保留真正的文件名
        )
    )
    // console.log(componentName)
    Vue.component(componentName, componentConfig.default || componentConfig)
  })

}

// API: require.context函数接受三个参数
// directory {String} -读取文件的路径
// useSubdirectories {Boolean} -是否遍历文件的子目录
// regExp {RegExp} -匹配文件的正则

const REQUIRE_PATH = require.context(
  './common', true, /.vue$/
   //找到components文件夹下以.vue命名的文件
)
const REQUIRE_PATH2 = require.context(
  './global', true, /.vue$/
   //找到components文件夹下以.vue命名的文件
)

registerToVue(REQUIRE_PATH);
registerToVue(REQUIRE_PATH2);