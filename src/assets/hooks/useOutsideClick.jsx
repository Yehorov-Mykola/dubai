import {useEffect, useRef} from 'react';

export default function useOutsideClick(onOutsideClick) {
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      onOutsideClick();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);
  return {ref};
}
