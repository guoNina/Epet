import {
  RECEIVE_MENUS,
  RECEIVE_DATAS,

} from './mutations-types'

export default {
  [RECEIVE_MENUS] (state, {menus}){
    /*debugger*/
    state.menus = menus


  },
  [RECEIVE_DATAS] (state, {datas}){
    state.datas = datas
  },

}
