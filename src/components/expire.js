import React, { Component } from 'react';
import Example from './Example';
import axios from 'axios';
import styles from './expire.less';
import { connect } from 'dva';
import PropTypes from 'prop-types';




class Notyetdue extends Component {

    constructor(props) {

        super(props);

        this.state = { 
             none: {}
         }

    }

    componentWillMount() {
        console.log(1111)
    }

    close() {

        this.setState({
            none: {
                display: 'none'
            }
        })


    }



    render() {

        return(
                <div className={styles.tan}>

                    这是底部内容
                    <div className={styles.tan1} style={this.state.none}>
                        <div className={styles.tan2}>
                            <p className={styles.tan3} onClick={ () => this.close() }></p>
                        </div>
                    </div>

                </div>
        
        )


    }

}


export default connect(( { user }) => ({
    user
}))(Notyetdue);

