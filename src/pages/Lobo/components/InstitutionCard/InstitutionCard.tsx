import './InstitutionCard.css';
import React from 'react';
import { Institution } from '../../InstitutionInterface.ts';
import { icons } from '../../constants';
interface InstitutionCardProps {
  onClick: () => void;
  institution: Institution;
}

const InstitutionCard: React.FC<InstitutionCardProps> = ({ onClick, institution }) => {
  return (
    <div className="institutionalCard" onClick={onClick}>
      <div className="institutionalCard__image">
        <img src={institution.photo} alt="Institution Image" />
      </div>
      <div className="institutionalCard__top">
        <h4>{institution.name}</h4>
        {institution.rating !== null && (
          <div className="institutionalCard__top-rating">
            {icons.ratingInstSVG}
            <h5>{Number(institution.rating)}</h5>
          </div>
        )}
      </div>
      <div className="institutionalCard__bottom">
        <p>{institution.dish_count} offers</p>
        <div className="institutionalCard__bottom-time">
          {icons.bottomTimeSVG}
          <p>
            {institution.pickup_start_hours.substring(0, 5)}-
            {institution.pickup_end_hours.substring(0, 5)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstitutionCard;
