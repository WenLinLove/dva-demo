import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { withRouter, Link } from 'dva/router'; // 引入组件 




function IndexPage() {
  return (
    <div className={styles.normal}>
          首页
          <Link to='/expire'>跳转</Link>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
