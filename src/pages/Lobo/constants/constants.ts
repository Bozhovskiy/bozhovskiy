import { images } from './index.ts';
export const optionsMap = {
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
  streetViewControl: false,
  mapTypeControl: false,
  language: 'uk',
  componentRestrictions: { country: 'ua' },
  draggable: false,
  zoomControl: false,
};

export const customIconSelected = {
  url: images.UnionPurple,
  scaledSize: new window.google.maps.Size(62, 40),
};
