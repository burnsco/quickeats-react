import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({price}) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_vpGSWYO2Gcy8v1FP2N7yqa0u007MEuVq3g'

  const onToken = token => {
    console.log(token)
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crn Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeButton
