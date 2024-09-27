import axios from 'axios';
const url = `https://ai90ni7olc.execute-api.us-east-1.amazonaws.com/dev/api/customer/v1/`;
export const doOrder = async (
  dish_data: object[],
  order_reference: string,
  merchant_signature: string,
) => {
  try {
    const response = await axios.post(
      url + 'order',
      { dish_data, order_reference, merchant_signature },
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const confirmPayment = async (order_key: string, merchant_signature: string) => {
  try {
    const response = await axios.post(
      url + 'confirm_payment',
      { order_key, merchant_signature },
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
