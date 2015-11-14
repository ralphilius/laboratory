import React from 'react';
import {PubKeyPicker} from './FormComponents/PubKeyPicker';
import TxBuilderStore from '../stores/TxBuilderStore';

export default class TxBuilderResult extends React.Component {
  render() {
    let xdr = TxBuilderStore.getXdr();
    return <div className="TxBuilderResult">
      <h3>Resulting TransactionEnvelope XDR:</h3>
      <pre className="TransactionXDR so-code TransactionBuilderResult__code"><code>{xdr}</code></pre>
      <button className="s-button">Sign this transaction</button>
    </div>
  }
}
