import { useState } from 'react';

function useResumeWindow() {
  const [isResumeWindowVisible, setIsResumeWindowVisible] = useState(false);
  const [isResumeTaskVisible, setIsResumeTaskVisible] = useState(false);

  const openResumeWindow = () => {
    setIsResumeWindowVisible(true);
    setIsResumeTaskVisible(true);
  };
  
  const closeResumeWindow = () => {
    setIsResumeWindowVisible(false);
    setIsResumeTaskVisible(false);
  };
  
  const toggleResumeWindow = () => {
    setIsResumeWindowVisible((prevState) => !prevState);
    console.log("toggle Resume window");
  };
  
  return {
    isResumeWindowVisible,
    isResumeTaskVisible,
    openResumeWindow,
    closeResumeWindow,
    toggleResumeWindow,
  };
}

export default useResumeWindow;
