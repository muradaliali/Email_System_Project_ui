import React from 'react';
import { FaFile } from 'react-icons/fa';
import { MdOutlineDehaze } from 'react-icons/md';

 const CAlltemplate = ({ data }) => {
  return (
    <div className="d-flex justify-content-between mb-3 shadow-sm">
      <div className="d-flex flex-row align-items-center gap-2">
        <FaFile />
        <div>{data}</div>
      </div>
      <div className="d-flex flex-row align-items-center">
        <div className="d-flex justify-content-end align-items-center gap-2">
          <MdOutlineDehaze />
        </div>
      </div>
    </div>
  );
};
export default CAlltemplate;
