import React, { useContext } from 'react';

import { Context } from '../../../context/default';

import CustomSelect from './styles';

export default function BreedSelect() {
  const { breedList } = useContext(Context);

  const selectOptions = breedList?.map((breed) => (
    <option value={breed.id} key={breed.id}>
      {breed.name}
    </option>
  ));

  return (
    <CustomSelect>
      <option defaultValue value="">
        Select a breed
      </option>
      {selectOptions}
    </CustomSelect>
  );
}
