import { useState } from 'react';

function useContactWindow() {
  const [isContactWindowVisible, setIsContactWindowVisible] = useState(false);
  const [isContactTaskVisible, setIsContactTaskVisible] = useState(false);

  const openContactWindow = () => {
    setIsContactWindowVisible(true);
    setIsContactTaskVisible(true);
  };
  
  const closeContactWindow = () => {
    setIsContactWindowVisible(false);
    setIsContactTaskVisible(false);
  };
  
  const toggleContactWindow = () => {
    setIsContactWindowVisible((prevState) => !prevState);
    console.log("toggle Contact window");
  };
  
  return {
    isContactWindowVisible,
    isContactTaskVisible,
    openContactWindow,
    closeContactWindow,
    toggleContactWindow,
  };
}

export default useContactWindow;
