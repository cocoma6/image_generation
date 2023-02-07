import React from 'react';

const ImageButton = ({ generateImage }) => {
  
    return (
      <div>
        <div className='tc'>
        <button 
            className='f4 pa2 ba b--white br3 white bg-light-purple grow shadow-3' 
            onClick={generateImage}>
            Generate an Image</button>
        </div>
      </div>
    );

}


export default ImageButton;