import './Lobo.css';
import { GoogleMap, Marker } from '@react-google-maps/api';
import React, { useEffect, useState } from 'react';
import { images } from './constants';
import InstitutionsModal from './components/InstitutionsModal/InstitutionsModal';
import useMobile from '../../hooks/useMobile';
import { Dish, Institution } from './InstitutionInterface.ts';
import icons from './constants/icons.tsx';
import { customIconSelected } from './constants/constants.ts';
import MealModal from './components/MealModal/MealModal.tsx';
import { toggleBodyOverflow } from '../../utils/utils.ts';
import BasketModal from './components/BasketModal/BasketModal.tsx';
import Cozy from "./assets/Cozy.jpg"
import Coffee from "./assets/Coffee.jpg"
import Bakers from "./assets/Bakers.jpg"
import Gourmet from "./assets/Gourmet.jpg"
import Parkside from "./assets/Parkside.png"
import Pasta from "./assets/Pasta.png"
import Caesar from "./assets/Pasta.png"
import Tiramisu from "./assets/Tiramisu.png"
import Cappucino from "./assets/Cappucino.png"
import Muffin from "./assets/Muffin.png"
import Croissant from "./assets/Croissant.png"
import Sourdough from "./assets/Sourdough.png"
import Butter from "./assets/Butter.png"
import Cinnamon from "./assets/Cinnamon.png"
import Lobster from "./assets/Lobster.png"
import Wagyu from "./assets/Wagyu.png"
import Truffle from "./assets/Truffle.png"
import Burger from "./assets/Burger.png"
import Fries from "./assets/Fries.png"
import Milkshake from "./assets/Milkshake.png"
import Navbar from "./components/Navbar/Navbar.tsx";


const Lobo = () => {
  const [dishs, setDishs] = useState<Dish[]>([]);
  const [isLoadingDishs, setIsLoadingDishs] = useState(false);
  const institutions = [
          {
            "address_line": "123 Main St",
            "contact_phones": "+380123456789",
            "description": "A cozy restaurant offering delicious meals.",
            "lat": 49.8387,
            "lon": 24.0297,
            "name": "Cozy Restaurant",
            "photo": Cozy,
            "institution_key": "inst1",
            "pickup_end_hours": "22:00",
            "pickup_start_hours": "10:00",
            "rating": "4.5",
            "tags": ["restaurant", "cozy"],
            "type": "restaurant",
            "weekends_closing_hours": "23:00",
            "weekends_opening_hours": "09:00",
            "working_days_closing_hours": "22:00",
            "working_days_opening_hours": "10:00",
            "dish_count": 3,
            "dishes": [{
              "is_lobobox": true,
              "id": 4,
              "tags":["Secret"],
              "actual_price": 800,
              "create_time": "2024-09-01T12:10:00",
              "description": "Traditional Italian dessert.",
              "institution_key": "inst1",
              "original_price": 1000,
              "active_count": 1,
              "name":"Lobo Box"
            },
              {
                "name": "Pasta Carbonara",
                "active_count": 5,
                "actual_price": 150,
                "create_time": "2024-09-01T12:00:00",
                "description": "Classic Italian pasta with creamy sauce.",
                "id": 1,
                "institution_key": "inst1",
                "is_lobobox": false,
                "original_price": 200,
                "photo": Pasta,
                "tags": ["pasta", "italian"]
              },
              {
                "name": "Caesar Salad",
                "active_count": 10,
                "actual_price": 100,
                "create_time": "2024-09-01T12:05:00",
                "description": "Fresh salad with chicken and Caesar dressing.",
                "id": 2,
                "institution_key": "inst1",
                "is_lobobox": false,
                "original_price": 130,
                "photo": Caesar,
                "tags": ["salad", "healthy"]
              },
              {
                "name": "Tiramisu",
                "active_count": 8,
                "actual_price": 80,
                "create_time": "2024-09-01T12:10:00",
                "description": "Traditional Italian dessert.",
                "id": 3,
                "institution_key": "inst1",
                "is_lobobox": false,
                "original_price": 100,
                "photo": Tiramisu,
                "tags": ["dessert", "italian"]
              }
            ]
          },
          {
            "address_line": "456 Market St",
            "contact_phones": "+380987654321",
            "description": "Popular cafe with a variety of coffee and snacks.",
            "lat": 49.8405,
            "lon": 24.0255,
            "name": "Coffee Corner",
            "photo": Coffee,
            "institution_key": "inst2",
            "pickup_end_hours": "20:00",
            "pickup_start_hours": "08:00",
            "rating": "4.7",
            "tags": ["cafe", "coffee"],
            "type": "cafe",
            "weekends_closing_hours": "21:00",
            "weekends_opening_hours": "08:00",
            "working_days_closing_hours": "20:00",
            "working_days_opening_hours": "08:00",
            "dish_count": 3,
            "dishes": [
              {
                "name": "Cappuccino",
                "active_count": 15,
                "actual_price": 50,
                "create_time": "2024-09-01T08:00:00",
                "description": "Hot coffee with steamed milk foam.",
                "id": 4,
                "institution_key": "inst2",
                "is_lobobox": false,
                "original_price": 60,
                "photo": Cappucino,
                "tags": ["coffee", "drink"]
              },
              {
                "name": "Chocolate Muffin",
                "active_count": 12,
                "actual_price": 40,
                "create_time": "2024-09-01T08:10:00",
                "description": "Delicious muffin with chocolate chips.",
                "id": 5,
                "institution_key": "inst2",
                "is_lobobox": false,
                "original_price": 50,
                "photo": Muffin,
                "tags": ["dessert","muffin"]
              },
              {
                "name": "Croissant",
                "active_count": 8,
                "actual_price": 35,
                "create_time": "2024-09-01T08:15:00",
                "description": "Buttery and flaky croissant.",
                "id": 6,
                "institution_key": "inst2",
                "is_lobobox": false,
                "original_price": 45,
                "photo": Croissant,
                "tags": ["pastry","breakfast"]
              }
            ]
          },
          {
            "address_line": "789 Baker St",
            "contact_phones": "+380112233445",
            "description": "Family-owned bakery offering fresh bread and pastries.",
            "lat": 49.8401,
            "lon": 24.0305,
            "name": "Baker's Delight",
            "photo": Bakers,
            "institution_key": "inst3",
            "pickup_end_hours": "18:00",
            "pickup_start_hours": "07:00",
            "rating": "4.6",
            "tags": ["bakery", "bread"],
            "type": "bakery",
            "weekends_closing_hours": "19:00",
            "weekends_opening_hours": "07:00",
            "working_days_closing_hours": "18:00",
            "working_days_opening_hours": "07:00",
            "dish_count": 3,
            "dishes": [
              {
                "name": "Sourdough Bread",
                "active_count": 20,
                "actual_price": 70,
                "create_time": "2024-09-01T07:00:00",
                "description": "Freshly baked sourdough bread.",
                "id": 7,
                "institution_key": "inst3",
                "is_lobobox": false,
                "original_price": 90,
                "photo": Sourdough,
                "tags": ["bread", "fresh"]
              },
              {
                "name": "Butter Croissant",
                "active_count": 10,
                "actual_price": 30,
                "create_time": "2024-09-01T07:10:00",
                "description": "Flaky and buttery croissant.",
                "id": 8,
                "institution_key": "inst3",
                "is_lobobox": false,
                "original_price": 40,
                "photo": Butter,
                "tags": ["pastry", "breakfast"]
              },
              {
                "name": "Cinnamon Roll",
                "active_count": 6,
                "actual_price": 50,
                "create_time": "2024-09-01T07:20:00",
                "description": "Warm and sweet cinnamon roll.",
                "id": 9,
                "institution_key": "inst3",
                "is_lobobox": false,
                "original_price": 65,
                "photo": Cinnamon,
                "tags": ["pastry", "dessert"]
              }
            ]
          },
          {
            "address_line": "101 Kingsway",
            "contact_phones": "+380998877665",
            "description": "A fine dining restaurant with gourmet dishes.",
            "lat": 49.8410,
            "lon": 24.0320,
            "name": "Gourmet Kitchen",
            "photo": Gourmet,
            "institution_key": "inst4",
            "pickup_end_hours": "23:00",
            "pickup_start_hours": "12:00",
            "rating": "4.9",
            "tags": ["fine dining", "gourmet"],
            "type": "restaurant",
            "weekends_closing_hours": "00:00",
            "weekends_opening_hours": "12:00",
            "working_days_closing_hours": "23:00",
            "working_days_opening_hours": "12:00",
            "dish_count": 3,
            "dishes": [
              {
                "name": "Lobster Bisque",
                "active_count": 3,
                "actual_price": 500,
                "create_time": "2024-09-01T12:00:00",
                "description": "Rich and creamy lobster soup.",
                "id": 10,
                "institution_key": "inst4",
                "is_lobobox": false,
                "original_price": 600,
                "photo": Lobster,
                "tags": ["soup", "seafood"]
              },
              {
                "name": "Wagyu Steak",
                "active_count": 2,
                "actual_price": 1000,
                "create_time": "2024-09-01T12:15:00",
                "description": "Tender and juicy Wagyu beef steak.",
                "id": 11,
                "institution_key": "inst4",
                "is_lobobox": false,
                "original_price": 1200,
                "photo": Wagyu,
                "tags": ["steak", "beef"]
              },
              {
                "name": "Truffle Pasta",
                "active_count": 4,
                "actual_price": 450,
                "create_time": "2024-09-01T12:30:00",
                "description": "Pasta with truffle-infused cream sauce.",
                "id": 12,
                "institution_key": "inst4",
                "is_lobobox": false,
                "original_price": 550,
                "photo": Truffle,
                "tags": ["pasta","gourmet"]
              }
            ]
          },
          {
            "address_line": "202 Park Ave",
            "contact_phones": "+380556677889",
            "description": "Casual dining with a variety of local dishes.",
            "lat": 49.8425,
            "lon": 24.0335,
            "name": "Parkside Eatery",
            "photo": Parkside,
            "institution_key": "inst5",
            "pickup_end_hours": "21:00",
            "pickup_start_hours": "11:00",
            "rating": "4.4",
            "tags": ["casual","local"],
            "type": "restaurant",
            "weekends_closing_hours": "22:00",
            "weekends_opening_hours": "11:00",
            "working_days_closing_hours": "21:00",
            "working_days_opening_hours": "11:00",
            "dish_count": 3,
            "dishes": [
              {
                "name": "Burger",
                "active_count": 7,
                "actual_price": 80,
                "create_time": "2024-09-01T11:00:00",
                "description": "Juicy beef burger with fresh vegetables.",
                "id": 13,
                "institution_key": "inst5",
                "is_lobobox": false,
                "original_price": 100,
                "photo": Burger,
                "tags": ["burger", "fastfood"]
              },
              {
                "name": "Fries",
                "active_count": 15,
                "actual_price": 30,
                "create_time": "2024-09-01T11:15:00",
                "description": "Crispy golden fries.",
                "id": 14,
                "institution_key": "inst5",
                "is_lobobox": false,
                "original_price": 40,
                "photo": Fries,
                "tags": ["side", "fastfood"]
              },
              {
                "name": "Milkshake",
                "active_count": 10,
                "actual_price": 50,
                "create_time": "2024-09-01T11:30:00",
                "description": "Creamy vanilla milkshake.",
                "id": 15,
                "institution_key": "inst5",
                "is_lobobox": false,
                "original_price": 60,
                "photo": Milkshake,
                "tags": ["drink", "dessert"]
              }
            ]
          }
        ]
  const [center, setCenter] = useState({ lat: 49.84, lng: 24.02 });
  const [zoom, setZoom] = useState(14);
  const [map, setMap] = React.useState<google.maps.Map | null>(null);
  const [isInstitutionModalOpen, setIsInstitutionModalOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [totalMeals, setTotalMeals] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const setDishes = async (index: number) => {
    setTotalMeals(0);
    setTotalPrice(0);
    setIsLoadingDishs(true);
    if(institutions[index].dish_count>0){
      setDishs(institutions[index].dishes);
    }
    else{
      setDishs([]);
    }
    setIsLoadingDishs(false);
  };
  const isMobile = useMobile(1536);
  const [centerMap, setCenterMap] = useState<string>('');
  useEffect(() => {
    if (centerMap === 'Lviv') {
      setCenter({ lat: 49.841, lng: 24.025 });
    } else if (centerMap === 'Kyiv') {
      setCenter({ lat: 50.45011, lng: 30.5234 });
    }
  }, [centerMap, zoom]);
  const openModal = () => {
    setIsInstitutionModalOpen(true);
  };

  const closeModal = () => {
    setIsInstitutionModalOpen(false);
  };

  const options = {
    styles: [
      {
        featureType: 'poi',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'transit',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'road',
        elementType: 'labels.icon',
        stylers: [{ visibility: 'off' }],
      },
    ],
    restriction: {
      latLngBounds: {
        north: 49.979189,
        south: 49.570986,
        west: 23.062743,
        east: 24.728617,
      },
      strictBounds: true,
    },
    streetViewControl: false,
    mapTypeControl: false,
    language: 'uk',
    componentRestrictions: { country: 'ua' },
  };

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const clickedLat = event.latLng.lat();
      const clickedLng = event.latLng.lng();
      setCenter({ lat: clickedLat, lng: clickedLng });
    }
  };

  const customIcon = {
    url: images.Union,
    scaledSize: new window.google.maps.Size(62, 40),
  };
  const customIconNumbers = {
    url: images.UnionNumber,
    scaledSize: new window.google.maps.Size(22, 26),
  };
  const isInLvivOblast = (lat: number, lng: number) => {
    const minLat = 49.563213;
    const minLng = 23.122222;
    const maxLat = 51.131541;
    const maxLng = 25.214583;
    return lat >= minLat && lat <= maxLat && lng >= minLng && lng <= maxLng;
  };

  const isInKyivOblast = (lat: number, lng: number) => {
    const minLat = 50.050694;
    const minLng = 28.869444;
    const maxLat = 52.423555;
    const maxLng = 32.558333;
    return lat >= minLat && lat <= maxLat && lng >= minLng && lng <= maxLng;
  };
  const handleMarkerClick = (index: number) => {
    setDishes(index).then();
    setIsInstitutionModalOpen(true);
    setSelectedItem(index);
  };
  const renderMarker = (institution: Institution, index: number) => {
    const isInLviv = isInLvivOblast(institution.lat, institution.lon);
    const isInKyiv = isInKyivOblast(institution.lat, institution.lon);
    if (zoom > 10 && (isInLviv || isInKyiv)) {
      return returnMarker(institution, index);
    } else if (!isInLviv && !isInKyiv) {
      return returnMarker(institution, index);
    }
    return null;
  };
  const [isMealModalOpen, setIsMealModalOpen] = useState(false);
  const closeMealModal = () => {
    setIsMealModalOpen(false);
    toggleBodyOverflow(isMealModalOpen);
  };
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const handleBasketClose = () => {
    setIsBasketOpen(false);
    toggleBodyOverflow(isBasketOpen);
  };

  const returnMarker = (institution: Institution, index: number) => {
    return (
      <Marker
        icon={selectedItem === index ? customIconSelected : customIcon}
        draggable={false}
        position={{ lat: institution.lat, lng: institution.lon }}
        key={index}
        title={institution.name}
        label={{
          text:
            institution.rating !== null
              ? String(institution.rating).length < 2
                ? String(institution.rating) + '.0'
                : String(institution.rating)
              : '---',
          className: 'institutions-marker-label',
        }}
        onClick={() => handleMarkerClick(index)}
      />
    );
  };
  const [order, setOrder] = useState<number[]>([]);
  const [dishIndex, setDishIndex] = useState(0);
  useEffect(() => {
    setOrder([]);
  }, [dishs]);
  useEffect(() => {
    setTotalMeals(order.length);
    const totalPrice = order.reduce((acc, dishId) => {
      const dish = dishs.find((d) => d.id === dishId);
      return acc + (dish ? dish.actual_price : 0);
    }, 0);
    setTotalPrice(totalPrice);
  }, [order]);
  return (
      <>
        <div className="bg"/>
        <Navbar/>
        {isMealModalOpen && <MealModal dish={dishs[dishIndex]} onClose={closeMealModal}/>}
        {isBasketOpen && (
            <BasketModal
                closeModal={handleBasketClose}
                totalMeals={totalMeals}
                totalPrice={totalPrice}
                institution={institutions[selectedItem ? selectedItem : 0]}
                order={order}
                setOrder={setOrder}
                dishes={dishs}
            />
        )}
        <div className="institutions">
          {isInstitutionModalOpen && (
              <InstitutionsModal
                  setDishIndex={setDishIndex}
                  isMealModalOpen={isMealModalOpen}
                  setIsMealModalOpen={setIsMealModalOpen}
                  selectedItem={selectedItem}
                  setSelectedItem={setSelectedItem}
                  institutions={institutions}
                  closeModal={closeModal}
                  setCenter={setCenter}
                  setZoom={setZoom}
                  setDishes={setDishes}
                  dishs={dishs}
                  isLoadingDishs={isLoadingDishs}
                  order={order}
                  setOrder={setOrder}
                  isBasketOpen={isBasketOpen}
                  setIsBasketOpen={setIsBasketOpen}
                  totalMeals={totalMeals}
                  totalPrice={totalPrice}
              />
          )}
          <div className="institutions__openIcon" onClick={openModal}>
            {icons.openInstSVG}
          </div>
          <GoogleMap
              mapContainerStyle={{
                width: '100vw',
                height: isMobile ? 'Calc(100vh - 80px)' : 'Calc(100vh - 100px)',
                overflow: 'auto',
                maxWidth: '100vw',
                maxHeight: isMobile ? 'Calc(100vh - 80px)' : 'Calc(100vh - 100px)',
                marginBottom: 'auto',
              }}
              center={center}
              zoom={zoom}
              onClick={handleMapClick}
              options={options}
              onLoad={(map) => {
                setMap(map);
              }}
              onZoomChanged={() => {
                if (map) {
                  setZoom(Number(map.getZoom()));
                }
              }}
          >
            {institutions.map((institution, index) => renderMarker(institution, index))}
            {zoom <= 10 && (
                <>
                  <Marker
                      position={{lat: 49.841, lng: 24.025}}
                      icon={customIconNumbers}
                      onClick={() => {
                        setZoom(11);
                        setCenterMap('Lviv');
                      }}
                      label={{
                        text: String(
                            institutions.filter((institution) =>
                                isInLvivOblast(institution.lat, institution.lon),
                            ).length,
                        ),
                        className: 'institutions-marker-label-big',
                      }}
                  />
                  <Marker
                      position={{lat: 50.45011, lng: 30.5234}}
                      icon={customIconNumbers}
                      onClick={() => {
                        setZoom(11);
                        setCenterMap('Kyiv');
                      }}
                      label={{
                        text: String(
                            institutions.filter((institution) =>
                                isInKyivOblast(institution.lat, institution.lon),
                            ).length,
                        ),
                        className: 'institutions-marker-label-big',
                      }}
                  />
                </>
            )}
          </GoogleMap>
        </div>
      </>
  );
};

export default Lobo;
