import { useState } from 'react';

const useHexToRgb = () => {
  const [state, setState] = useState({
    input: '',
    rgb: 'rgb(255, 255, 255)',
    isError: false,
  });

  const hexToRGB = (hex: string) => {
    if (!hex) return { rgb: 'rgb(255, 255, 255)', isError: false };
    
    if (hex.length === 7) {
      if (!/^#[0-9A-Fa-f]{6}$/i.test(hex)) {
        return { rgb: 'Ошибка!', isError: true };
      }
      
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      
      return { rgb: `rgb(${r}, ${g}, ${b})`, isError: false };
    }
    
    return { rgb: 'rgb(255, 255, 255)', isError: false };
  };

  const updateInput = (value: string) => {
    const result = hexToRGB(value);
    setState({
      input: value,
      rgb: result.rgb,
      isError: result.isError,
    });
  };

  return { ...state, updateInput };
};

export default useHexToRgb;