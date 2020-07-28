import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import fetchConversionDetails from "../actions/pullData"
import fetchCryptoDetails from "../actions/pullCryptoData"
import Container from '../components/Container'
import { connect } from 'react-redux'
import ConversionSelect from '../components/ConversionSelect'

class AppRouter extends React.Component {
    componentDidMount(){
        this.props.fetchConversionDetails();
        this.props.fetchCryptoDetails();
    }
    render(){
        return (
            <BrowserRouter>
                {/* <Header /> */}
                <Switch>
                    <Route path="/" component={Container} exact={true} />
                    <Route path="/conversion" component={ConversionSelect} exact={true} />
                    {/* <Route component={Error} /> */}
                </Switch>
            </BrowserRouter>
        )
    }
}

export default connect(undefined,{fetchConversionDetails, fetchCryptoDetails})(AppRouter);
