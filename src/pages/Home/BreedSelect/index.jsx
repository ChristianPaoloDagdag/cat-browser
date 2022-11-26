import React from 'react';

import CustomSelect from './styles';

export default function BreedSelect() {
  return (
    <CustomSelect>
      <option defaultValue value="" disabled>
        Select a breed
      </option>
    </CustomSelect>
  );
}
