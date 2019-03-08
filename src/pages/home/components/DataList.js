import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {NoDataWrapper, DataListWrapper} from '../style'


class DataList extends PureComponent {

    render() {
        const {SelectedColumns, data} = this.props
        const data1 = data.toJS()
        let isEmpty=SelectedColumns.size===0?true:false
        return (
            <div>
                {isEmpty?<NoDataWrapper>no data</NoDataWrapper>:
                <DataListWrapper>
                    <thead>
                        <tr>
                        {SelectedColumns.map(selectedColumn => (
                            <th key={selectedColumn}>{selectedColumn}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                        {data1.map((row,index) => (
                        <tr key={index}>
                            {SelectedColumns.map((selectedColumn) => (
                                <td key={selectedColumn}>{row[selectedColumn]}</td>
                                ))}
                        </tr>
                        ))}
                    </tbody>                
                </DataListWrapper>
                }
                
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    SelectedColumns: state.getIn(['home', 'SelectedColumns']),
    data: state.getIn(['home', 'data'])
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps,mapDispatchToProps)(DataList);