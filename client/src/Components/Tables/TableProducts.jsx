import React, { Fragment , useState, useEffect, useMemo, forwardRef } from 'react'
import { TextField, CircularProgress, Chip } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import MaterialTable, { MTableToolbar, Paper } from 'material-table';

import api from '../../api/api'


const TableProducts = props => {
  const [products, setProducts] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const { title } = props


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

  const columns = useMemo(
    () => [
      {
        title: 'Nome',
        field: 'nomeproduto',
        with: '400',
      },
      {
        title: 'Código',
        field: 'codproduto',
        render: rowData => (
          <Chip
            label={rowData.codproduto}
            size="small"
            variant="outlined"
          />
        ),
      },
      {
        title: 'Vl. Custo',
        field: 'valorcusto',
        width: 200,
        maxWidth: 300,
        type: 'currency',
        currencySetting:{ currencyCode:'BRL', minimumFractionDigits:2, maximumFractionDigits:2}
      },
      {
        title: 'Vl. Venda',
        field: 'valorvenda',
        width: 200,
        maxWidth: 300,
        type: 'currency',
        currencySetting:{ currencyCode:'BRL', minimumFractionDigits:2, maximumFractionDigits:2}
      },
      {
        title: 'Estoque',
        field: 'qtdestoque',
        type: 'numeric'
      },
      {
        title: 'Nome Grupo',
        field: 'nomegrupo',
      },
      {
        title: 'Dt. Entrada',
        field: 'dataentrada',
        filtering: false,
        sorting: false,
        type: 'date',
        render: rowData => new Date(rowData.dataentrada).toLocaleDateString('pt-BR'),
    },
      // {
      //   title: 'B. Custódia',
      //   field: 'characteristics.custody_provider',
      // },
      // {
      //   title: 'CNPJ',
      //   field: 'characteristics.id_register',
      //   sorting: false,
      //   filtering: false,
      //   hidden: true,
      // },
      // {
      //   title: 'Dt. de Início',
      //   field: 'characteristics.start_date',
      //   // render: rowData => new Date(rowData.characteristics.start_date).toLocaleDateString('pt-BR'),
      //   type: 'date',
      //   filtering: false,
      //   sorting: false,
      //   hidden: true,
      // },
      // {
      //   title: 'Risco',
      //   field: 'characteristics.risk',
      //   render: rowData => <ChipRisk label={rowData.characteristics.risk} color='primary' size="small" />,
      // },
      // {
      //   title: 'Tx. Admin.',
      //   field: 'taxes.administration',
      //   type: 'numeric',
      //   render: rowData => (rowData.taxes.administration / 100).toLocaleString('pt-BR', {style: 'percent', maximumFractionDigits: 2}),
      //   hidden: true,
      // },
      // {
      //   title: 'Tx. Performance',
      //   field: 'taxes.performance',
      //   type: 'numeric',
      //   render: rowData => (rowData.taxes.performance / 100).toLocaleString('pt-BR', {style: 'percent', maximumFractionDigits: 2}),
      //   hidden: true,
      // },
      // {
      //   title: 'Quotização',
      //   field: 'redeem.quota',
      //   type: 'numeric',
      //   hidden: true,
      // },
      // {
      //   title: 'Liquidação',
      //   field: 'redeem.liquidation',
      //   type: 'numeric',
      //   hidden: true,
      // },
      // {

      // },
    ],
    []
  )


  let exibe = ""

  if ( isLoading ) {
    exibe = <CircularProgress />
  }
  else {
    exibe = 
    <MaterialTable
      title={title}
      data={products}
      isLoading={isLoading}
      columns={columns}
      options={{
        search: true
      }}
    />
}


  return (exibe)
}

export default TableProducts;