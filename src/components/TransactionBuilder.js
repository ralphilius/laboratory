import React from 'react';
import {EndpointPicker} from './EndpointPicker';
import {EndpointSetup} from './EndpointSetup';
import {EndpointResult} from './EndpointResult';
import {PubKeyPicker} from './FormComponents/PubKeyPicker';
import ImportXDR from './ImportXDR';
import TxBuilderAttributes from './TxBuilderAttributes';
import TxBuilderOperations from './TxBuilderOperations';
import TxBuilderResult from './TxBuilderResult';
import TxBuilderStore from '../stores/TxBuilderStore';

export default class TransactionBuilder extends React.Component {
  constructor() {
    super()
  }
  onUpdate() {
    this.forceUpdate();
  }
  componentDidMount() {
    TxBuilderStore.addUpdateListener(this.onUpdate.bind(this));
  }
  componentWillUnmount() {
    TxBuilderStore.removeUpdateListener(this.onUpdate);
  }
  render() {
    return <div className="TransactionBuilder">
      <div className="so-back">
        <div className="so-chunk">
          <TxBuilderAttributes />
          <TxBuilderOperations />
        </div>
      </div>
      <div className="so-back TransactionBuilder__result">
        <div className="so-chunk">
          <TxBuilderResult />
        </div>
      </div>
    </div>
  }
};
