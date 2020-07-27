import React, { Fragment , useState, useEffect } from 'react'
import { TextField, CircularProgress, Chip } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import api from '../../api/api'


export default function Form() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(function() {
    setIsLoading(true)

    async function loadRepo() {
      try {
        const response = await api.getAllProducts();
        // const response = await api.getAllFunds();
        setProducts(response.data)

        // setFundsValues(response.data.data.values);
        setIsLoading(false)
        
      } catch(error) {
        console.log('error', error);
      }
    }

    loadRepo();
  }, []);

  let exibe = ""

  if ( isLoading ) {
    exibe = <CircularProgress />
  }
  else {
    exibe = 
      <Autocomplete
        // id="combo-box-demo"
        options={products}
        getOptionLabel={(option) => ` ${option.codproduto} -- ${option.nomeproduto}`}
        style={{ width: 600 }}
        renderInput={(params) => <TextField {...params} label="Produto" />}
      />
  }


  return (exibe)
}