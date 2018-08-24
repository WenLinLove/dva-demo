import dva from 'dva';
import './index.css';
import { createBrowserHistory as createHistory } from 'history';
import { createLogger } from 'redux-logger';


// 1. Initialize
const app = dva({
  //去掉 url 中的 # 号
  // history: createHistory(),
  //打印redux 的store 的变化 
  onAction: createLogger()
});
// 2. Plugins
 //app.use({});

// 3. Model
 app.model(require('./models/user').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
