import React from 'react';
import './ImageResult.css';


const ImageResult = ({ imageLink }) => {
    if (imageLink.length > 0) {
        return (
            <div className='image-box'>
            <img 
                className='ma4 ba b--white dim shadow-1'
                src={imageLink} 
                alt='result' />
            </div>
          );
    }
    else {
        return (
            <div></div>
        )
    }
}


export default ImageResult;