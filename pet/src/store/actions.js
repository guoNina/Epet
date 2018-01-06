import {
  requestMenus,
  requestDatas
} from '../api'

import {
  RECEIVE_MENUS,
  RECEIVE_DATAS
} from './mutations-types'

export default {
  requestMenus({commit}){
    requestMenus().then(response => {
      const result = response.data
      if(result.code===0){
        const menus = result.data
        commit(RECEIVE_MENUS,{menus})
      }
    })
  },
  requestDatas({commit}){
    requestDatas().then(response => {
      const result = response.data
      if(result.code===0){
        const datas = result.data
        commit(RECEIVE_DATAS,{datas})
      }
    })
  },
}
