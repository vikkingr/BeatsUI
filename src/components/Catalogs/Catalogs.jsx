import React from 'react'
import FileUploader from '../../shared/FileUploader/FileUploader'
import trackService from '../../services/trackService';
import './Catalogs.scss'

const Catalogs = () => {
  return (
    <div className='page__catalogs'>
      <div className='catalogs'>
        {trackService.listCatalog().map(catalog => (
          <div className='catalog'>
            <div>
              <span className='catalog__name'>{catalog.name}</span>
            </div>
            <div>
              {catalog.beats.map(beat => (
                <div className="catalog-item__information">
                  <span className='catalog-item__information__contributors'>{beat.contributors?.toString()}</span>
                  <span className='catalog-item__information__name'>{beat.name}</span>
              </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div>
        <span>Want to add more beats to the catalog?</span>  
        <FileUploader />
      </div>
    </div>
  )
};

export default Catalogs