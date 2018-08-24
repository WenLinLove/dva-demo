import React, { Component } from 'react'
import { connect } from 'dva';
import nostyle from './notyetdue.less';



class Notyetdue extends Component {

    constructor(props) {

        super(props);

        this.state = { 
             none: {}
         }

    }

    componentWillMount() {
        console.log('生命周期')
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
            
                <div className={nostyle.ntan}>

                    这是底部内容
                    <div className={nostyle.ntan1} style={this.state.none}>
                        <div className={nostyle.ntan2}>
                            <p className={nostyle.ntan3} onClick={ () => this.close() }></p>
                        </div>
                    </div>

                </div>
     
        )


    }

}
Notyetdue.propTypes = {
    
};

export default connect(( { user }) => ({
    user
}))(Notyetdue);

