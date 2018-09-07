import React, { Component } from 'react';
import axios from 'axios';
import './expire.less';
import { connect } from 'dva';
import PropTypes from 'prop-types';




class Demo extends Component {

      constructor(props) {
        super(props);



        this.state = {
             none: ''
         }
      }


      add() {

        console.log(this.props.user);

      }

      componentWillMount() {
         console.log(0);
      }

    render() {
      console.log(1)
        return(
                <div>
                    <button onClick={ () => this.props.dispatch({ type: 'user/adds' }) }>请求</button>
                    <button onClick={ () => this.add() }>{ this.props.user.name }</button>
                    <button onClick={ () => this.add() }> </button>
                </div>

        )


    }

}


export default connect(( { user }) => ({
    user
}))(Demo);
