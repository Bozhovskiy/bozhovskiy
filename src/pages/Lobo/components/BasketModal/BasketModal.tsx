import React, { useEffect } from 'react';
import  Button  from '../ui/Button/Button.tsx';
import { icons } from '../../constants';
import '../../Lobo.css';
import './BasketModal.css';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { Dish, Institution } from '../../InstitutionInterface.ts';
import { confirmPayment, doOrder } from '../../apiСustomer.ts';
import { customIconSelected, optionsMap } from '../../constants/constants.ts';
import uuid from 'react-uuid';
import CryptoJS from 'crypto-js';

interface BasketModalProps {
  closeModal: () => void;
  totalMeals: number;
  totalPrice: number;
  institution: Institution;
  order: number[];
  setOrder: React.Dispatch<React.SetStateAction<number[]>>;
  dishes: Dish[];
}

const BasketModal: React.FC<BasketModalProps> = ({
  closeModal,
  totalMeals,
  totalPrice,
  institution,
  order,
  setOrder,
  dishes,
}) => {
  const countDishes = (dishes: number[]): { dish_id: number; dishes_count: number }[] => {
    const counts: { [key: number]: number } = {};
    dishes.forEach((dish) => {
      counts[dish] = (counts[dish] || 0) + 1;
    });

    return Object.keys(counts).map((key) => ({
      dish_id: parseInt(key),
      dishes_count: counts[parseInt(key)],
    }));
  };
  const dishesInOrder = dishes.filter((dishes) => order.includes(dishes.id));
  const merchantAccount = 'loboeats_com';
  const merchantDomainName = 'https://loboeats.com/';
  const orderReference = uuid();
  const orderDate = '1415379863';
  const orderTimeout = '49000';
  const amount = totalPrice;
  const productName = dishesInOrder.map((dish) => dish?.name);
  const productPrice = dishesInOrder.map((dish) => dish?.actual_price);
  const productCount = countDishes(order).map((dish) => dish?.dishes_count);
  const clientFirstName = 'Name';
  const clientLastName = 'Surname';
  const clientEmail = 'email@gmail.com';
  const clientPhone = '+380951234567';
  const clientAddress = 'address';
  const secretKey = '79bbc2e9115d6edd97e70fafa9bde2c4241ce391';
  const merchantSignatureString =
    merchantAccount +
    ';' +
    merchantDomainName +
    ';' +
    orderReference +
    ';' +
    orderDate +
    ';' +
    amount +
    ';' +
    'UAH' +
    ';' +
    productName.join(';') +
    ';' +
    productCount.join(';') +
    ';' +
    productPrice.join(';');
  const merchantSignature = CryptoJS.HmacMD5(merchantSignatureString, secretKey).toString();
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://secure.wayforpay.com/server/pay-widget.js';
    script.id = 'widget-wfp-script';
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  const pay = () => {
    orderMe().then();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (window.Wayforpay) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const wayforpay = new window.Wayforpay();
      wayforpay.run(
        {
          merchantAccount,
          merchantDomainName,
          authorizationType: 'SimpleSignature',
          merchantSignature,
          orderReference,
          orderDate,
          orderTimeout,
          amount,
          currency: 'UAH',
          productName,
          productPrice,
          productCount,
          clientFirstName,
          clientLastName,
          clientEmail,
          clientPhone,
          clientAddress,
          language: 'UA',
          straightWidget: true,
          orderLifetime: 300,
        },
        async function () {
          await confirmPayment(
            orderReference,
            CryptoJS.HmacMD5(merchantAccount + ';' + orderReference, secretKey).toString(),
          );
        },
        function () {
          console.log('Payment declined:');
        },
        function () {
          console.log('Payment pending or processing:');
        },
        wayforpay.closeit(),
      );
    } else {
      console.error('Wayforpay is not defined. Script might not be loaded correctly.');
    }
  };

  useEffect(() => {
    if (order.length === 0) {
      closeModal();
    }
  }, [order]);
  const center = { lat: institution.lat, lng: institution.lon };
  const orderMe = async () => {
    const dishData = countDishes(order);
    await doOrder(
      dishData,
      orderReference,
      CryptoJS.HmacMD5(merchantAccount + ';' + orderReference, secretKey).toString(),
    );
  };
  return (
    <div className="blur__container">
      <div className="basketmodal">
        <div className="basketmodal-closeicon" onClick={closeModal}>
          {icons.closeModalSVG}
        </div>
        <div className="basketmodal__left">
          <h3>Address and time of receipt </h3>
          <div className="basketmodal__left-map">
            <GoogleMap
              mapContainerStyle={{
                width: '100%',
                height: '100%',
                maxWidth: '100%',
                maxHeight: '100%',
              }}
              center={center}
              zoom={15}
              options={optionsMap}
            >
              <Marker
                position={{ lat: institution.lat, lng: institution.lon }}
                icon={customIconSelected}
                label={{
                  text:
                    institution.rating !== null
                      ? String(institution.rating).length < 2
                        ? String(institution.rating) + '.0'
                        : String(institution.rating)
                      : '---',
                  className: 'institutions-marker-label',
                }}
              />
            </GoogleMap>
          </div>
          <div className="basketmodal__left-info">
            <div>{icons.placeSvg}</div>
            <p>{institution.address_line}</p>
          </div>
          <div className="basketmodal__left-info">
            <div>{icons.timeSvg}</div>
            <p>
              Pick up the dish from {institution.pickup_start_hours.substring(0, 5)} to
              {' ' + institution.pickup_end_hours.substring(0, 5)}
            </p>
          </div>
        </div>
        <div className="basketmodal__right">
          <h3>Details</h3>
          <div className="basketmodal__right-cards">
            {dishesInOrder.map((dish, index) => (
              <div className="basketmodal__right-card" key={index}>
                <div className="basketmodal__right-card_image">
                  {dish.is_lobobox ? (
                    <div className="basketmodal__right-card_image-lobo">
                      {icons.loboBagSmallSvg}
                      <h1>Lobo</h1>
                    </div>
                  ) : (
                    <img src={dish.photo} alt="Meal Image" />
                  )}
                </div>
                <div className="basketmodal__right-card_info">
                  <div className="basketmodal__right-card_info-top">
                    <p>{dish.name}</p>
                    <h4>{order.reduce((acc, id) => (id === dish.id ? acc + 1 : acc), 0)}x</h4>
                  </div>
                  <div className="basketmodal__right-card_info-bottom">
                    <span>{dish.actual_price} $</span>
                    <div
                      className="basketmodal__right-card_info-bottom_button"
                      onClick={() => {
                        const index = order.indexOf(dish.id);
                        if (index !== -1) {
                          setOrder([...order.slice(0, index), ...order.slice(index + 1)]);
                        }
                      }}
                    >
                      {icons.minusSVG}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h3 style={{ marginTop: '16px' }}>Total payable</h3>
          <div className="basketmodal__right-price">
            <p className="basketmodal__right-price_count">{totalMeals} dishes from the menu</p>
            <h4 className="basketmodal__right-price_price">{totalPrice} $</h4>
          </div>
          <Button label="Pay" btnStyle={{ marginTop: '16px' }} onClick={pay} />
        </div>
      </div>
    </div>
  );
};

export default BasketModal;
