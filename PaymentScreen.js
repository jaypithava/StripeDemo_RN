import {CardField, createToken} from '@stripe/stripe-react-native';
import {useState} from 'react';
import {SafeAreaView, View, Button} from 'react-native';

export default function PaymentScreen() {
  const [cardInfo, setCardInfo] = useState(null);

  const handlePayment = async () => {
    if (cardInfo) {
      const cardToken = await createToken({cardInfo, type: 'Card'});
      console.log('Payment method created:', cardToken);
    } else {
      console.log('error creating card');
    }
  };

  const fetchCardDetails = cardDetails => {
    if (cardDetails.complete) {
      setCardInfo(cardDetails);
    } else {
      setCardInfo(null);
    }
  };

  console.log('Card INFO', cardInfo);

  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <CardField
          postalCodeEnabled={false}
          placeholders={{
            number: '4242 4242 4242 4242',
          }}
          cardStyle={{
            backgroundColor: '#000000',
            textColor: '#FFFFFF',
          }}
          style={{
            width: '100%',
            height: 50,
            marginVertical: 30,
          }}
          onCardChange={cardDetails => {
            fetchCardDetails(cardDetails);
          }}
        />
        <Button onPress={handlePayment} title="Make Payment" />
      </SafeAreaView>
    </View>
  );
}
