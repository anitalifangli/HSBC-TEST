import React, { PureComponent } from "react";
import {connect} from 'react-redux'

import {HomeWrapper, HomeTitle} from './style'
import DataList from './components/DataList'
import SelectorList from './components/SelectorList'

//用immutable.js 和purecomponent结合，提高性能，如果不用，则会因为使用了import {connect} from 'react-redux'导致每次一有状态更新，所有的组件都更新

class Home extends PureComponent {
    render() {
        return (
            <HomeWrapper> 
                <HomeTitle>Select data you need</HomeTitle>              
                <SelectorList/>
                <DataList/>
            </HomeWrapper>
        );
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps,mapDispatchToProps)(Home);