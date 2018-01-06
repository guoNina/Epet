import axios from 'axios'

export function requestMenus() {
  return axios.get('./api2/menus')
}

export function requestDatas() {
  return axios.get('./api2/datas')
}
