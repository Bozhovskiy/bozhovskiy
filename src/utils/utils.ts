export const toggleBodyOverflow = (condition: boolean) => {
  const body = document.querySelector('body');
  if (body !== null) {
    body.style.overflow = condition ? 'auto' : 'hidden';
  }
};

export const errorToasterStyles = {
  style: {
    padding: '16px',
    color: '#191C21',
    fontFamily: 'Raleway',
    background: '#FFFFFF',
  },
  iconTheme: {
    primary: '#FC4242',
    secondary: '#FFFFFF',
  },
  duration: 1500,
};

export const successToasterStyles = {
  style: {
    padding: '16px',
    color: '#191C21',
    fontFamily: 'Raleway',
    background: '#FFFFFF',
  },
  iconTheme: {
    primary: '#009277',
    secondary: '#FFFFFF',
  },
  duration: 1500,
};
