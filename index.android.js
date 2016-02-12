/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';


var PayPal = require('react-native-paypal');

class paypalTest extends Component {
  _onPressButton() {
    PayPal.paymentRequest({
      clientId: 'AYNRFxCFp1XHq5_wkJmpt50h5gIRCCnWhEXox-Us7ij6tWOcNBrL0n-BMP4q',
      environment: PayPal.SANDBOX,
      price: '42.00',
      currency: 'USD',
      description: 'PayPal Test'
    }).then((confirm, payment) => {console.log('test');}
      )
    .catch((error_code) => console.error('Failed to pay through PayPal'));
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButton}>
         <Text>
           Paypal check
         </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('paypalTest', () => paypalTest);
