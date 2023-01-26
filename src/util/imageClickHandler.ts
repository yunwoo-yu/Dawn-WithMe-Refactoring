import React from 'react';

const imageClickHandler = (
  targetRef: React.MutableRefObject<HTMLInputElement | null>,
) => {
  if (targetRef.current) {
    targetRef.current.click();
  }
};

export default imageClickHandler;
