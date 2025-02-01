import React, { useState } from 'react';
import { useEffect } from 'react';
import FileUploader from '../../shared/FileUploader/FileUploader'
import catalogService from '../../services/catalogService';
import './Catalogs.scss'

// make context api for all functions and services here to trim logic and establish dependency injection
const Catalogs = () => {
  const [catalogs, setCatalogs] = useState([]);

  useEffect(() => {
      const data = catalogService.listCatalog();
      setCatalogs(data);
  }, [catalogs, catalogService]);

  const _addMockCatalog = () => {
    catalogService.addToCatalog();
  };

  console.count("helloo");

  return (
    <div className='page__catalogs'>
      <div className='file-uploader'>
        <span>Want to add more beats to the catalog?</span>
        <FileUploader />
        <input type='button' value='add mock catalog item' onClick={_addMockCatalog} />
      </div>
      {catalogs && <div className='catalogs'>
        {catalogs.map(catalog => (
          <div className='catalog' key={catalog.id}>
            <div className='catalog__header'>
              <div className='catalog__header__name'>
                <span className='catalog__name'>{catalog.name}</span>
              </div>
              <div className='catalog__header__artist'>
                <span className='catalog__artist'>by {catalog.artist}</span>
              </div>
            </div>
            <div className='catalog-items'>
              {catalog.beats.map(beat => (
                <div className="catalog-item__information" key={beat.id}>
                  {/* <span className='catalog-item__information__contributors'>{beat.contributors?.toString()}</span> */}
                  <span className='catalog-item__information__name'>{beat.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>}
    </div>
  )
};

export default Catalogs