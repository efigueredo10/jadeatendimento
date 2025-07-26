import { useEffect, useState } from 'react';

const useFloatingEffect = (isActive = true): string => {
  const [className, setClassName] = useState('');

  useEffect(() => {
    if (isActive) {
      setClassName('floating-animation');
    } else {
      setClassName('');
    }
  }, [isActive]);

  return className;
};

export default useFloatingEffect;
