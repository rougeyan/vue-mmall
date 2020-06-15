import eventbus from './eventbus.js'

const SAVE_COMPONENT_IN_CACHE= "saveComponentInCache"
const REMOVE_COMPONENT_FROM_CACHE= "removeComponentFromCache";

let componentsCache = [] // 由于name组成;

function componentRemove(componentName){
  if(componentsCache.includes(componentName)){
    
  }
}
export function componentSave(componentName){
  if(componentsCache.includes(componentName)){
    return 
  }
  componentsCache.push(componentName)
}


export function emitSearchResult(){
  eventbus.$emit(saveComponentInCache, ...arguments)
}
export function listenSearchResult(cb){
  eventbus.$on(saveComponentInCache,(target)=>{
    cb(target)
  })
}