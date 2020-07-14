// 异步的moudile.js
const ASET_DEPT = 'ASET_DEPT'
const actions = {
    [ASET_DEPT](context,payload){
        // 异步操作;
        setTimeout(()=>{
            context.commit('SET_DEPT',payload.dept);
        },2000)
    },
}
export default actions;