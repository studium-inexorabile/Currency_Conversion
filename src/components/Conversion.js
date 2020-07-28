import React from 'react'
import {connect} from 'react-redux'
import getSymbolFromCurrency from 'currency-symbol-map'

const Conversion = (props) => {
    return <main role="main" className="inner cover p-5">
        <div className="text-dark">
            {props.data && 
            <div className="text-center">
                <p className="big-text"> 
                    {getSymbolFromCurrency(props.cur.bCode)}{props.cur.amount} in {props.cur.bCurrency}s would be {getSymbolFromCurrency(props.cur.code)}
                    {(props.data[props.cur.code] / props.data[props.cur.bCode]) * props.cur.amount} in {props.cur.currency}s
                </p>
            </div>
            }
        </div>
    </main>
}

const mapStateToProps = (state) => ({
    cur : state.currency,
    data: state.data
})

export default connect(mapStateToProps)(Conversion)