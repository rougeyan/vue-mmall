export const isArray = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
}
export const isObj = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Object'
}