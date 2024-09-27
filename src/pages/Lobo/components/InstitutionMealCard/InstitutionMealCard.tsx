import React, { useEffect, useState } from 'react';
import { icons } from '../../constants';
import './InstitutionMealCard.css';
import { Dish } from '../../InstitutionInterface.ts';
import toast from 'react-hot-toast';
import { errorToasterStyles } from '../../../../utils/utils.ts';
interface InstitutionMealCardProps {
  addMeal: (dish: Dish) => void;
  removeMeal: (dish: Dish) => void;
  onClick: () => void;
  dish: Dish;
  order: number[];
}

const InstitutionMealCard: React.FC<InstitutionMealCardProps> = ({
  addMeal,
  removeMeal,
  onClick,
  dish,
  order,
}) => {
  useEffect(() => {
    setActiveCount(order.reduce((acc, id) => (id === dish.id ? acc + 1 : acc), 0));
  }, [order]);
  const [activeCount, setActiveCount] = useState(0);
  return (
    <div className="institutionMealCard" onClick={onClick}>
      <div className="institutionMealCard__image">
        {dish.is_lobobox ? (
          <div className="institutionMealCard__image-lobo">
            {icons.loboBagSvg}
            <h1>Lobo</h1>
          </div>
        ) : (
          <img src={dish.photo} alt="Meal Image" />
        )}
      </div>
      <div className="institutionMealCard__content">
        <h1>{dish.is_lobobox ? 'Lobo Box' : dish.name}</h1>
        {dish.tags.length >= 1 && (
          <div className="institutionMealCard__content-loboTags">
            <p>
              {dish.tags
                .map((tag: string) => {
                  return tag;
                })
                .join(', ')}
            </p>
          </div>
        )}
        <div className="institutionMealCard__content-wrapper">
          <div className="institutionMealCard__content-price">
            <s>{dish.original_price} $</s>
            <p>{dish.actual_price} $</p>
          </div>
          <div className="institutionMealCard__content-number">
            <p>Available {dish.active_count}</p>
            <div className="institutionMealCard__content-number_buttons">
              {activeCount > 0 && (
                <>
                  <div
                    className="institutionMealCard__content-number_buttons_btn"
                    onClick={(e) => {
                      if (activeCount !== 0) {
                        e.stopPropagation();
                        removeMeal(dish);
                      }
                    }}
                  >
                    {icons.minusSVG}
                  </div>
                  <h4>{activeCount}</h4>
                </>
              )}
              <div
                className="institutionMealCard__content-number_buttons_btn"
                onClick={(e) => {
                  e.stopPropagation();
                  if (activeCount < dish.active_count) {
                    addMeal(dish);
                  } else {
                    toast.error(`Available only ${dish.active_count} portions`, errorToasterStyles);
                  }
                }}
              >
                {icons.addSVG}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstitutionMealCard;
