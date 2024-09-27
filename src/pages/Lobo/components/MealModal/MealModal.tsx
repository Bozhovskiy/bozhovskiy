import { icons } from '../../constants';
import './MealModal.css';
import React from 'react';
import { Dish } from '../../InstitutionInterface.ts';
interface MealModalProps {
  onClose: () => void;
  dish: Dish;
}

const MealModal: React.FC<MealModalProps> = ({ onClose, dish }) => {
  return (
    <div className="blur__container" style={{ overflowY: 'auto' }}>
      <div className="mealmodal">
        <div className="mealmodal__wrapper">
          <div className="mealmodal__image">
            {dish.is_lobobox ? (
              <div className="mealmodal__image-lobobox">
                {icons.loboBagSvg}
                <h3>Lobo</h3>
              </div>
            ) : (
              <img src={dish.photo} alt="Meal Image" />
            )}
            <div className="mealmodal__image-close" onClick={onClose}>
              {icons.crossIconSvg}
            </div>
            <h1>{dish.is_lobobox ? 'Lobo Box' : dish.name}</h1>
            {dish.is_lobobox ? (
              <div className="mealmodal__lobobox-desc">
                {icons.infoIconSvg}
                <span>Lobo Box - Surprise Box</span>
              </div>
            ) : (
              <h2>{dish.description}</h2>
            )}
            <div className="mealmodal__info">
              <p>Available {dish.active_count}</p>
              <div className="mealmodal__info-price">
                <s>{dish.original_price} $</s>
                <h5>{dish.actual_price} $</h5>
              </div>
            </div>
            {dish.tags.length > 0 && (
              <div className="mealmodal__tags">
                <h4>Tags</h4>
                <div className="mealmodal__tags-items">
                  {dish.tags.map((tag: string) => (
                    <div className="mealmodal__tags-items_item" key={tag}>
                      <h5>{tag}</h5>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealModal;
