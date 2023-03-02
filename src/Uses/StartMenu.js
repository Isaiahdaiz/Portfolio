import { useState } from 'react';

function useStartMenuWindow() {
  const [isStartMenuVisible, setIsStartMenuVisible] = useState(false);

  const toggleStartMenu = () => {
    setIsStartMenuVisible((prevState) => !prevState);
    console.log("toggle StartMenu window");
  };
  
  return {
    isStartMenuVisible: isStartMenuVisible,
    toggleStartMenu: toggleStartMenu,
  };
}

export default useStartMenuWindow;
