import React, { useContext } from 'react';
import DefaultItemListCount from '../../../constants/DefaultItemListCount';

import { Context } from '../../../context/default';

import CustomSelect from './styles';

export default function BreedSelect(props) {
  const { setItemLimit } = props;

  const {
    breedList,
    selectBreed,
    setSelectBreed,
    setAlertBannerOpen,
  } = useContext(Context);

  /* Save the selected breed for rendering */
  const handleSetSelectBreed = (e) => {
    setAlertBannerOpen(false);
    setSelectBreed(e.target.value);
    setItemLimit(DefaultItemListCount);
  };

  /* Set the options based on the list of breeds */
  const selectOptions = breedList.map((breed) => (
    <option value={breed.id} key={breed.id}>
      {breed.name}
    </option>
  ));

  return (
    <CustomSelect onChange={handleSetSelectBreed} defaultValue={selectBreed}>
      <option defaultValue value="">
        Select a breed
      </option>
      {selectOptions}
    </CustomSelect>
  );
}
