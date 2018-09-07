import axios from 'axios';
import { delay } from 'dva/saga';

export default {

    namespace: 'user',

    state: {},

    //这里优先级最高   当加载的时候这里先加载    在组件生命周期的前边执行
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line

           if(history.location.pathname == '/demo') {

                console.log('我先加载了数据');

           }

       },
    },

    //  这里试处理异步  调用  dispatch（{ type: 'user/adds' }）
    effects: {
      *adds({ payload }, { call, put }) {  // eslint-disable-line

        console.log('请求中！！');

        yield call(delay, 2000);

        // sage 的判断成功与失败的写法  判断
        try {
            const data = yield call(axios.get, "/api/demo");
            yield put({ type: "add", data });
          } catch(e) {
             yield put({ type: "err", e });
          }

      },
    },

   // 这里处理返回全局的   store  转台数据 调用 dispatch（{ type: 'user/add' }） 
    reducers: {
      'add'(state, action) {
            return  { ...state, ...action.data.data }
      },
      'err'(state, action) {
        return  action.message
      },
      'home'(state, action) {
        return { name: 'home' }
      }
    },
}
