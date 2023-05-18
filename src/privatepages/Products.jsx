import React from 'react'
import { useMutation, useQuery } from 'react-query'
import { axiosInstance } from '../network/axiosInstance'
import { DataGrid } from '@mui/x-data-grid'
import { Button, CircularProgress } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import ActionAreaCard from './ActionAreaCard'

function Products() {

    const { data, error, isLoading, isSuccess, refetch } = useQuery("productsData", () => {
        return axiosInstance.get('products')


    })
    const mutation = useMutation({
        mutationFn: async (data) => {
            let result = await axiosInstance.delete(`categories/${data}`);
            return result;
        },
        onSuccess: (data) => {
            refetch();
        },
        onError: (err) => {
            console.log('Error', err);
        }
    })
    const columns = [
        { field: 'title', headerName: 'title', width: 150 },
        { field: 'price', headerName: 'price', width: 150 },
        { field: 'description', headerName: 'Description', width: 150 },
        
        { field: "image", headerName: "image",width:150 },

        { field: "category", headerName: "category", width: 250}
    ]

  return (
  <>
  
        {
            isLoading && <CircularProgress />
        }
        {
            mutation.isLoading && <CircularProgress />
        }
        {

            isSuccess && <div style={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={data?.data}
                    columns={columns}
                  
                />
            </div>
        }
  </>
  )
}

export default Products