import dva from 'dva';
import './index.css';
import { createBrowserHistory as createHistory } from 'history';
import { createLogger } from 'redux-logger';


const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};


// 1. Initialize
const app = dva({
  //去掉 url 中的 # 号
  history: createHistory(),
  //打印redux 的store 的变化插件
  //onAction: createLogger()
  onAction: logger
});
// 2. Plugins
 //app.use({});

// 3. Model
app.model(require('./models/user').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
