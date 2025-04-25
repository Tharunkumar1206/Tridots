import React from 'react';

const ImageDisplay = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="m-6">
        <img 
          src="/images/p8.png" 
          alt="Guess the word puzzle"
          className="max-w-[1000px] h-auto"
        />
      </div>
    </div>
  );
};

export default ImageDisplay;
