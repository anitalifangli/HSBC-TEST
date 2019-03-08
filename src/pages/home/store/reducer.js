import {fromJS} from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
    ColumnsSelectorList:['base_id', 'mo_id', 'dyna_id', 'who_id', 'clo_id', 'company', 'country', 'address', 'sr_ranking', 'pp_ranking'],
    SelectedColumns:['base_id'],
    data:getRandomData(5000)
})

function getRandomData(rows) {
    var randomData = []
    for(var i=0; i<rows; i++) {
        randomData.push({
            base_id: 'BID'+getRandomInt(1000000,9999999),
            mo_id: 'S'+getRandomInt(100000000,999999999),
            dyna_id: 'SA'+getRandomInt(10000000,99999999),
            who_id: 'WH'+getRandomInt(10000000,99999999),
            clo_id: 'cl'+getRandomInt(100000,999999),
            company: getRandomLengthString(),
            country: getRandomLengthString(),
            address: getRandomInt(1,1500) + ' ' + getRandomLengthString() + ' ' + getRandomLengthString() + ' ' + getRandomLengthString().toUpperCase(),
            sr_ranking: i+5,
            pp_ranking: i+30
        })
    }
    return randomData
}

function getRandomLengthString() {
    let result="";
    let stringLength = getRandomInt(5,15)
    for(let i=0; i<stringLength; i++) {
        result=result+'x';
    }
    return result;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max-min)+min);
}



export default (state=defaultState, action) => {
    switch (action.type) {
        case constants.ADD_TO_SELECTED_COLUMNS:
            return state.set('SelectedColumns', state.get('SelectedColumns').push(action.value))
        case constants.REMOVE_SELECTED_COLUMNS:
            let colIndex = state.get('SelectedColumns').indexOf(action.value)
            return state.set('SelectedColumns', state.get('SelectedColumns').splice(colIndex,1))
        case constants.ALL_COLUMN_SELECTED:
            return state.set('SelectedColumns', action.value)
        case constants.NONE_COLUMN_SELECTED:
            return state.set('SelectedColumns', action.value)    
        default:
            return state
    }
}