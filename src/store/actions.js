// 异步的moudile.js
import {api_global_search} from '@/api/productApi.js'
const SEARCH_RESULT = 'SEARCH_RESULT'
const actions = {
    [SEARCH_RESULT](context,payload){
        return api_global_search(payload).then(res=>{
            // 更新结果
            context.commit('SEARCH_RESULT',res.data);
            return res
        })
    },
}
export default actions;