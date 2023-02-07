import React from 'react';

const ImagePromptBar = ({ inputChange }) => {
  
    return (
      <div>

        <h2 className='f2 tc'>Generate an Image with Prompts</h2>
        
        <div className='cf ph2-ns pa2'>
          <div className='fl w-25 pa2'></div>

          <div className='fl w-50 pa2'>
            <input
            className='f5 w-100 h2 pa2 ba b--white-70 br3 shadow-3'
            placeholder='Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh...'
            onChange={inputChange}
            />
          </div>
          
          <div className='fl w-25 pa2'></div>
        </div>  

      </div>
    );

}


export default ImagePromptBar;