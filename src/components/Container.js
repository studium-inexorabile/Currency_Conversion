import React from 'react'
import ConversionSelect from './ConversionSelect'
import Conversion from './Conversion'
import {connect} from 'react-redux'

const Container = (props) => (
    <div className="row d-flex flex-column justify-content-center" id="big">
      <main role="main" className="pt-5 bg-white box container column d-flex flex-column justify-content-center border border-dark rounded">
        <ConversionSelect />
        {props.data && props.currency.code && <Conversion />}
      </main>
    </div>
)

const mapStateToProps = (state) => ({
  currency : state.currency,
  data : state.data
})

export default connect(mapStateToProps)(Container)