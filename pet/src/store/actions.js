import {
  requestMenus,
  requestDatas,
  requestDatas2
} from '../api'

import {
  RECEIVE_MENUS,
  RECEIVE_DATAS,
  RECEIVE_DATAS2
} from './mutations-types'

export default {
  requestMenus({commit}){
    requestMenus().then(response => {
      const result = response.data
      /*debugger*/
      if(result.code===0){
        const menus = result.data
        commit(RECEIVE_MENUS,{menus})

        // cb && cb()
      }
    })
  },
  requestDatas({commit}){
    requestDatas().then(response => {
      const result = response.data
      console.log(result);
      if(result.code===0){
        const datas = result.data
        console.log(datas);
        commit(RECEIVE_DATAS,{datas})
      }
    })
  },
  // requestDatas2({commit}){
  //   requestDatas2().then(response => {
  //     const result = response.data
  //     console.log(result);
  //     if(result.code===0){
  //       const datas2 = result.datas2
  //       console.log(datas);
  //       commit(RECEIVE_DATAS2,{datas2})
  //     }
  //   })
  // },
}
