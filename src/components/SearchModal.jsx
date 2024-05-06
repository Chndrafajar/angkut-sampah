import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';

export default function SearchModal() {
  return (
    <div className="modal fade" id="searchModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Search
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <div className="modal-search">
              <input type="text" placeholder="Searchh" />
              <IoSearchOutline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
