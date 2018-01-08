import Mock from 'mockjs'
import data from './data.json'

console.log('mockServer');
Mock.mock('/api2/menus',{
  code:0,
  data:data.menus
})
Mock.mock('/api2/datas',{
  code:0,
  data:data.datas[0].value
})
// Mock.mock('/api2/datas2',{
//   code:0,
//   data:data.datas2[2].menus
// })
