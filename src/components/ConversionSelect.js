import React from 'react'
import {connect} from 'react-redux'
import {selectCurrency} from '../actions/selectCurrency'
import {selectBase} from '../actions/selectBase'
import {selectAmount} from '../actions/selectAmount'
import Currency from '../components/Currency'
import data from '../../countryCodes.json'

class SelectConversion extends React.Component {
    render(){
      let BimgUrl = this.props.currency.Bicon_url;
      let imgUrl = this.props.currency.icon_url;
      let BdivStyle = {
        backgroundImage: 'url(' + BimgUrl + ')',
        backgroundSize: 'cover',
        height: '300px',
        width: '300px',
        backgroundPosition: "center"
      }
      let divStyle = {
        backgroundImage: 'url(' + imgUrl + ')',
        backgroundSize: 'cover',
        height: '300px',
        width: '300px',
        backgroundPosition: "center"
      }
      let arrowDivStyle = {
        backgroundImage: 'url(https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_404-512.png)',
        backgroundSize: 'cover',
        height: '300px',
        width: '300px',
        backgroundPosition: "center"
      }
        return (
            <main role="main" className="inner cover text-center">
                <div className="d-flex flex-row p-2 justify-content-between">
                    <div style={BdivStyle} className="div-bg row d-flex justify-content-center">
                      <div className="d-flex flex-column justify-content-around text-center">
                        <select name="bCurrency" id="bcurrency" className="rounded" onChange={
                            (e) => {
                                const co = e.target.value
                                const cur = data.find((item) => item.code == co)
                                this.props.selectBase(cur.code, cur.currency, cur.icon_url)
                            }
                        }>
                            {data.map((item) => <Currency key={item.currency} {...item}/>)}
                        </select>
                      </div>
                    </div>
                      <div style={arrowDivStyle} className="div-bg row d-flex justify-content-center text-center">
                        <div className="d-flex flex-column justify-content-center row text-center">
                          <input type="number" id="amount" name="amount" defaultValue='1.00' className="rounded" step="0.01" onChange={
                            (e) => {
                                const amount = e.target.value
                                this.props.selectAmount(amount)
                            }
                          }/>
                        </div>
                      </div>
                    <div style={divStyle} className="div-bg row d-flex justify-content-center">
                      <div className="d-flex flex-column justify-content-around text-center">
                        <select name="currency" id="currency" className="rounded" onChange={
                            (e) => {
                                const co = e.target.value
                                const cur = data.find((item) => item.code == co)
                                this.props.selectCurrency(cur.code, cur.currency, cur.icon_url)
                            }
                        }>
                            {data.map((item) => <Currency key={item.currency} {...item}/>)}
                        </select>
                      </div>
                    </div>
                </div>
            </main>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    selectCurrency : (code, currency, icon_url) => dispatch(selectCurrency(code, currency, icon_url)),
    selectAmount : (amount) => dispatch(selectAmount(amount)),
    selectBase : (code, currency, icon_url) => dispatch(selectBase(code, currency, icon_url))
})

const mapStateToProps = (state) => ({
  currency : state.currency
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectConversion)