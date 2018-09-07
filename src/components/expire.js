import React, { Component } from 'react';
import Example from './Example';
import axios from 'axios';
import './expire.less';
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

        console.log(this.props)

        return(
                <div className="tan">

                    这是底部内容1
                    <div className="tan1" style={this.state.none}>
                        <div className="tan2">
                            <p className="tan3" onClick={ () => this.close() }></p>
                        </div>
                    </div>

                </div>

        )


    }

}


export default connect(( { user }) => ({
    user
}))(Notyetdue);
