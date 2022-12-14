import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import routes from './constants/routes';
import { Context } from './context/default';
import Home from './pages/Home';
import SingleCat from './pages/SingleCat';
import PageNotFound from './pages/PageNotFound';

export default function App() {
  const { setBreedList, setAlertBannerOpen } = useContext(Context);

  /* Get the list of breeds */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_ROUTE}breeds`,
          {
            headers: {
              'x-api-key': process.env.REACT_APP_API_KEY,
            },
          },
        );
        /* Set the list of breeds to the select */
        setBreedList(response.data);
      } catch (e) {
        setAlertBannerOpen(true);
      }
    };
    fetchData();
  }, [setBreedList]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.SINGLE_CAT} element={<SingleCat />} />
        <Route path={routes.PAGE_NOT_FOUND} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
