import {
  RECEIVE_MENUS,
  RECEIVE_DATAS,
  RECEIVE_DATAS2

} from './mutations-types'

export default {
  [RECEIVE_MENUS] (state, {menus}){
    /*debugger*/
    state.menus = menus
  },
  [RECEIVE_DATAS] (state, {datas}){
    state.datas = datas
  },
  // [RECEIVE_DATAS2] (state, {datas2}){
  //   state.datas2 = datas2
  // },

}
