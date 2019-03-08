import * as constants from './constants'
import {fromJS} from 'immutable'

export const addToSelectedColumns = (item) => ({
    type: constants.ADD_TO_SELECTED_COLUMNS,
    value: fromJS(item)
})

export const removeSelectedColumns = (item) => ({
    type: constants.REMOVE_SELECTED_COLUMNS,
    value: fromJS(item)
})

export const AllColumnSelected = (allItem) => ({
    type: constants.ALL_COLUMN_SELECTED,
    value: fromJS(allItem)
})

export const NoneColumnSelected = () => ({
    type: constants.NONE_COLUMN_SELECTED,
    value: fromJS([])
})
