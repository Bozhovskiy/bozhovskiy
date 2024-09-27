import React, { useEffect, useRef, useState } from 'react';
import Button from '../ui/Button/Button.tsx';
import Input from '../ui/Input/Input.tsx';
import Loader from '../Loader/Loader.tsx';

import './InstitutionsModal.css';
import InstitutionCard from '../InstitutionCard/InstitutionCard';
import { icons } from '../../constants';
import { Rating } from 'react-simple-star-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import InstitutionMealCard from '../InstitutionMealCard/InstitutionMealCard';
import { Dish, Institution } from '../../InstitutionInterface.ts';
import { toggleBodyOverflow } from '../../../../utils/utils.ts';

interface InstitutionsModalProps {
  closeModal: () => void;
  institutions: Array<Institution>;
  selectedItem: number | null;
  setSelectedItem: (index: number | null) => void;
  setCenter: (coords: { lat: number; lng: number }) => void;
  setZoom: (number: number) => void;
  setDishes: (index: number) => void;
  dishs: Array<Dish>;
  isLoadingDishs: boolean;
  totalPrice: number;
  totalMeals: number;
  isMealModalOpen: boolean;
  setIsMealModalOpen: (boolean: boolean) => void;
  setDishIndex: (number: number) => void;
  isBasketOpen: boolean;
  setIsBasketOpen: (boolean: boolean) => void;
  order: Array<number>;
  setOrder: (array: Array<number>) => void;
}

const InstitutionsModal: React.FC<InstitutionsModalProps> = ({
  closeModal,
  institutions,
  selectedItem,
  setSelectedItem,
  setZoom,
  setCenter,
  setDishes,
  dishs,
  isLoadingDishs,
  totalMeals,
  totalPrice,
  order,
  setOrder,
  setIsMealModalOpen,
  isMealModalOpen,
  setDishIndex,
  isBasketOpen,
  setIsBasketOpen,
}) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [hasSearchResults, setHasSearchResults] = useState(true);

  const handleBasketOpen = () => {
    toggleBodyOverflow(isBasketOpen);
    setIsBasketOpen(true);
  };

  const modalContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollToTop = () => {
    if (modalContainerRef.current) {
      modalContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCardClick = async (index: number) => {
    const selectedIndexInFiltered = institutions.indexOf(filteredInstitutions[index]);
    setDishes(selectedIndexInFiltered);
    setSelectedItem(selectedIndexInFiltered);
    setZoom(14);
    setCenter({
      lat: filteredInstitutions[index].lat,
      lng: filteredInstitutions[index].lon - 0.02,
    });
    scrollToTop();
  };

  useEffect(() => {
    if (selectedItem !== null) {
      scrollToTop();
    }
  }, [selectedItem]);

  const addMeal = (dish: Dish) => {
    setOrder([...order].concat(dish.id));
  };

  const removeMeal = (dish: Dish) => {
    const index = order.indexOf(dish.id);
    if (index !== -1) {
      setOrder([...order.slice(0, index), ...order.slice(index + 1)]);
    }
  };

  const openMealModal = (index: number) => {
    setDishIndex(index);
    setIsMealModalOpen(true);
    toggleBodyOverflow(isMealModalOpen);
  };

  const filteredInstitutions = institutions.filter(
    (institution) =>
      institution.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    setHasSearchResults(filteredInstitutions.length > 0);
  }, [filteredInstitutions]);

  return (
    <div className="institutionsModal" ref={modalContainerRef}>
      {selectedItem !== null ? (
        <div className="institutionsModal__inst">
          <div className="institutionsModal__inst-image">
            <img src={institutions[selectedItem].photo} alt="Institution Image" />
            <div
              className="institutionsModal__inst-image_close"
              onClick={() => setSelectedItem(null)}
            >
              {icons.goBackSvg}
            </div>
          </div>
          <div className="institutionsModal__inst-name">
            <h1>{institutions[selectedItem].name}</h1>
            {institutions[selectedItem].rating !== null && (
              <div className="institutionsModal__inst-name_rating">
                <Rating
                  size={50}
                  readonly={true}
                  initialValue={Number(institutions[selectedItem].rating)}
                  allowFraction={true}
                  fillIcon={<FaStar size={23} />}
                  emptyIcon={<FaRegStar size={23} />}
                />
                <h5>{Number(institutions[selectedItem].rating)}</h5>
              </div>
            )}
          </div>

          <div className="institutionsModal__inst-place">
            <div>{icons.placeSvg}</div>
            <p>{institutions[selectedItem].address_line}</p>
          </div>
          <div className="institutionsModal__inst-time">
            <h2>Work schedule</h2>
            <div className="institutionsModal__inst-time_table">
              <div className="institutionsModal__inst-time_table-item">
                <p>Weekdays (Mon - Fri)</p>
                <p>
                  {institutions[selectedItem].working_days_opening_hours.substring(0, 5)}-
                  {institutions[selectedItem].working_days_closing_hours.substring(0, 5)}
                </p>
              </div>
              <div className="institutionsModal__inst-time_table-item">
                <p>Weekends (Sat - Sun)</p>
                <p>
                  {institutions[selectedItem].weekends_opening_hours.substring(0, 5)}-
                  {institutions[selectedItem].weekends_closing_hours.substring(0, 5)}
                </p>
              </div>
            </div>
          </div>
          {institutions[selectedItem].tags.length > 0 && (
            <div className="institutionsModal__inst-tags">
              <h2>Waiting</h2>
              <div className="institutionsModal__inst-tags_items">
                {institutions[selectedItem].tags.map((tag: string, index: number) => (
                  <div className="institutionsModal__inst-tags_items-item" key={index}>
                    <p>{tag}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {isLoadingDishs ? (
            <div className="institutionsModal__inst-meals_loader">
              <Loader />
            </div>
          ) : dishs.length > 0 ? (
            <div className="institutionsModal__inst-meals">
              <h2>Available today</h2>
              <div className="institutionsModal__inst-meals_cards">
                {dishs.map((dish, index) => (
                  <InstitutionMealCard
                    key={index}
                    addMeal={addMeal}
                    removeMeal={removeMeal}
                    onClick={() => {
                      openMealModal(index);
                    }}
                    dish={dish}
                    order={order}
                  />
                ))}
              </div>
            </div>
          ) : (
            <>
              {' '}
              <div className="institutionsModal__inst-meals">
                <h2>No dishes available</h2>
              </div>
            </>
          )}
          {totalMeals > 0 && (
            <div className="institutionsModal__inst-basket">
              <Button
                label={`${totalMeals} for ${totalPrice} $`}
                icon={icons.basketSvg}
                onClick={handleBasketOpen}
              />
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="institutionsModal__top">
            <h1>Institutions</h1>
            <div onClick={closeModal}>{icons.closeModalSvg}</div>
          </div>
          <div className="institutionsModal__searchbar">
            <Input
              value={searchValue}
              setValue={setSearchValue}
              svg={icons.searchSvg}
              placeholder="Search institution"
            />
          </div>
          {hasSearchResults ? (
            <div className="institutionsModal-cards">
              {filteredInstitutions.map((institution: Institution, index) => (
                <InstitutionCard
                  key={index}
                  institution={institution}
                  onClick={() => handleCardClick(index)}
                />
              ))}
            </div>
          ) : (
            <div className="no-results-message">
              <h1>No institutions found.</h1>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default InstitutionsModal;
