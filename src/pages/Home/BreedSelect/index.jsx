import React, { useContext } from 'react';

import { Context } from '../../../context/default';

import CustomSelect from './styles';

export default function BreedSelect() {
  const { breedList, setSelectBreed } = useContext(Context);

  const handleSetSelectBreed = (e) => {
    setSelectBreed(e.target.value);
  };

  const selectOptions = breedList?.map((breed) => (
    <option value={breed.id} key={breed.id}>
      {breed.name}
    </option>
  ));

  return (
    <CustomSelect onChange={handleSetSelectBreed}>
      <option defaultValue value="">
        Select a breed
      </option>
      {selectOptions}
    </CustomSelect>
  );
}
