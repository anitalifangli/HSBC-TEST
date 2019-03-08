import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {actionCreators} from '../store'
import {is} from 'immutable'
import {SelectorListWrapper, SelectorTitle, SelectorListItem, CheckAllOrNot} from '../style'

class SelectorList extends PureComponent {
    render() {
        const {ColumnsSelectorList, SelectedColumns, handleToggleColumn, handleAllColumn, handleNoneColumn} = this.props
        return (
            <SelectorListWrapper>
                <SelectorTitle>Coloumn Selector:</SelectorTitle>
                <div>
                    <SelectorListItem>
                        {ColumnsSelectorList.map((item,index)=>{
                            return (
                                <div key={item}>                           
                                    <input onClick={()=>handleToggleColumn(SelectedColumns,item)} readOnly
                                    id={'input'+index} type="checkbox" checked={SelectedColumns.indexOf(item)!==-1}/>
                                    <label htmlFor={'input'+index}>{item}</label>
                                </div>
                            )
                        })}
                    </SelectorListItem>                   
                    <CheckAllOrNot>
                        <div>
                            <input id="check-all" type="checkbox" readOnly checked={is(ColumnsSelectorList,SelectedColumns)}
                            onClick={()=>handleAllColumn(ColumnsSelectorList)}/>
                            <label htmlFor="check-all">Check All</label>
                        </div>
                        <div>
                            <input id="check-none" type="checkbox" readOnly onClick={handleNoneColumn}
                             checked={SelectedColumns.size===0}/>
                            <label htmlFor="check-none">Check None</label>
                        </div>
                    </CheckAllOrNot>
                </div>               
            </SelectorListWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    ColumnsSelectorList: state.getIn(['home','ColumnsSelectorList']),
    SelectedColumns: state.getIn(['home', 'SelectedColumns'])
})

const mapDispatchToProps = (dispatch) => ({
    handleToggleColumn(SelectedColumns,item){
        if (SelectedColumns.indexOf(item)!==-1) {
            dispatch(actionCreators.removeSelectedColumns(item))
        }else{
            dispatch(actionCreators.addToSelectedColumns(item))
        }       
    },
    handleAllColumn(allItem){
        dispatch(actionCreators.AllColumnSelected(allItem))
    },
    handleNoneColumn(){
        dispatch(actionCreators.NoneColumnSelected())
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(SelectorList);