import axios from 'axios';
import { delay } from 'dva/saga';

export default {

    namespace: 'user',
  
    state: [],
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line


      },
    },
  
    effects: {
      *adds({ payload }, { call, put }) {  // eslint-disable-line

        console.log('请求中！！');

        yield call(delay, 2000);

        try {
            const data = yield call(axios.get, "https://5b1e22a14d4fc00014b07d60.mockapi.io/demo");
            yield put({ type: "add", data });
          } catch(e) {
             yield put({ type: "err", e });
          }

      },
    },
  
    reducers: {
      'add'(state, action) {
        return  action
      },
      'err'(state, action) {
        return  action.message
      }
    },
}