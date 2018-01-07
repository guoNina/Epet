import {
  requestMenus,
  requestDatas
} from '../api'

import {
  RECEIVE_MENUS,
  RECEIVE_DATAS
} from './mutations-types'

export default {
  requestMenus({commit},cb){
    requestMenus().then(response => {
      const result = response.data
      /*debugger*/
      if(result.code===0){
        const menus = result.data
        commit(RECEIVE_MENUS,{menus})

        cb && cb()
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
