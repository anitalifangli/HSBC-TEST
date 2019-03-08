import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width:100%;
    margin:0px auto;
    height:600px;
`
export const HomeTitle = styled.p`
    width:100%;
    margin:30px auto;
    font-size:30px;
    color:#333;
    font-weight:700;
    text-align:center;
`
export const SelectorListWrapper = styled.div`
    width:1200px;
    margin:0 auto;
    font-size:16px;
    color:#343434;
    box-shadow:0px 0px 10px #ccc;
    display:flex;
`
export const SelectorTitle = styled.div`
    width:20%;
    height:50px;
    line-height:50px;
    padding:0 10px; 
`
export const SelectorListItem = styled.div`
    display:flex; 
    flex-wrap:wrap;
    div{
        margin-right:20px;
        height:50px;
        line-height:50px;
    }
`
export const CheckAllOrNot = styled.div`
    display:flex; 
    flex-wrap:wrap;
    height:50px;
    line-height:50px;
    div{
        margin-right:20px;
    }
`
export const NoDataWrapper = styled.div`
    box-sizing:border-box;
    padding:20px;
    text-align:center;
    width:1200px;
    margin:0 auto;
    margin-top:10px;
    font-size:16px;
    color:#999;
    box-shadow:0px 0px 10px #ccc;
`

export const DataListWrapper = styled.table`
    display:block;
    box-sizing:border-box;
    padding:20px;
    width:1200px;
    height:500px;
    overflow-y:auto;
    margin:0 auto;
    margin-top:10px;
    font-size:16px;
    color:#999;
    box-shadow:0px 0px 10px #ccc;
    thead{
        font-weight:bold;
        color:#333;
        background-color:#eee;
        th{
            text-align:center;
            height:40px;
            line-height:40px
        }
    }
    tr:hover { 
        background-color: #eee;
        color:#007ce4; 
    } 
    td{
        padding:5px;
        text-align: center;
    }
`

