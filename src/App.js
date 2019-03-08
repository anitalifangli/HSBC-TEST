import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store'
import {GlobalStyle} from './style'

import Home from './pages/home'

// import { createStore, applyMiddleware } from 'redux'
// import reducer from './reducers/reducer.js'

// import DataTableContainer from './components/DataTableContainer.js';
// import ColumnSelectorContainer from './components/ColumnSelectorContainer.js';



// const store = createStore(reducer);

class App extends Component {
  render() {
    return (       
        <Provider store={store}>
        <GlobalStyle/>
        <Home/>
        {/* <div className="Content">
            <ColumnSelectorContainer/>
            <DataTableContainer/>
        </div> */}
        </Provider>
    );
  }
}

export default App;
