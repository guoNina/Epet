import Mock from 'mockjs'
import data from './data.json'

Mock.mock('/api2/menus',{
  code:0,
  data:data.menus
})
Mock.mock('/api2/datas',{
  code:0,
  data:data.datas
})
