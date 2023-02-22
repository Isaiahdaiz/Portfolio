import { useState } from 'react';

function useAboutWindow() {
  const [isAboutWindowVisible, setIsAboutWindowVisible] = useState(false);
  const [isAboutTaskVisible, setIsAboutTaskVisible] = useState(false);

  const openAboutWindow = () => {
    setIsAboutWindowVisible(true);
    setIsAboutTaskVisible(true);
  };
  
  const closeAboutWindow = () => {
    setIsAboutWindowVisible(false);
    setIsAboutTaskVisible(false);
  };
  
  const toggleAboutWindow = () => {
    setIsAboutWindowVisible((prevState) => !prevState);
    console.log("toggle About window");
  };
  
  return {
    isAboutWindowVisible,
    isAboutTaskVisible,
    openAboutWindow,
    closeAboutWindow,
    toggleAboutWindow,
  };
}

export default useAboutWindow;
