import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { axiosInstance } from '../network/axiosInstance';
import { DataGrid } from '@mui/x-data-grid';
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

function Products() {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [editedProduct, setEditedProduct] = useState({});
  const [selectedRowId, setSelectedRowId] = useState(null);

  const { data, error, isLoading, isSuccess, refetch } = useQuery(
    'productsData',
    () => {
      return axiosInstance.get('products');
    }
  );

  const deleteProductsMutation = useMutation(
    async (ProductsId) => {
      await axiosInstance.delete(`products/${ProductsId}`);
    },
    {
      onSuccess: () => {
        refetch();
      },
      onError: (error) => {
        console.log('Delete error:', error);
      },
    }
  );

  const updateProductMutation = useMutation(
    async (updatedProduct) => {
      await axiosInstance.put(`products/${selectedRowId}`, updatedProduct);
    },
    {
      onSuccess: () => {
        refetch();
        setEditOpen(false);
        setEditedProduct({});
        setSelectedRowId(null);
      },
      onError: (error) => {
        console.log('Update error:', error);
      },
    }
  );

  const deleteProducts = (params) => {
    setOpen(false);
    deleteProductsMutation.mutate(params.id);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleEditOpen = (params) => {
    setEditedProduct(params.row);
    setSelectedRowId(params.id);
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
    setEditedProduct({});
    setSelectedRowId(null);
  };

  const handleEditSave = () => {
    updateProductMutation.mutate(editedProduct);
  };

  const columns = [
    { field: 'title', headerName: 'Title', width: 150 },
    { field: 'price', headerName: 'Price', width: 150 },
    { field: 'description', headerName: 'Description', width: 150 },
    { field: 'image', headerName: 'Image', width: 150 },
    { field: 'category', headerName: 'Category', width: 150 },
    {
      field: 'delete',
      headerName: 'Delete',
      renderCell: (params) => (
        <div>
          <Button variant="outlined" color="error" onClick={handleOpen}>
            Delete
          </Button>
          <Dialog
            style={{ backgroundColor: 'white' }}
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete?"}</DialogTitle>
            <DialogContent></DialogContent>
            <DialogActions>
              <Button onClick={() => setOpen(false)}>Disagree</Button>
              <Button onClick={() => deleteProducts(params)} autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      ),
    },
    {
      field: 'edit',
      headerName: 'Edit',
      width: 120,
      renderCell: (params) => (
        <Button variant="outlined" onClick={() => handleEditOpen(params)}>
          Edit
        </Button>
      ),
    },
  ];

  return (
    <>
      {isLoading && <CircularProgress />}
      {deleteProductsMutation.isLoading && <CircularProgress />}
      {isSuccess && (
        <div style={{ height: 600, width: '100%' }}>
          <DataGrid rows={data?.data} columns={columns} />
        </div>
      )}

      <Dialog
         style={{margin:"30"}}

        open={editOpen}
        onClose={handleEditClose}
        aria-labelledby="edit-dialog-title"
        aria-describedby="edit-dialog-description"
      >
        <DialogTitle id="edit-dialog-title">Edit Product</DialogTitle>
        <DialogContent
                 style={{margin:"30px",padding:"20px"}}
                 >
          <TextField
            label="Title"
            value={editedProduct.title || ''}
            onChange={(e) => setEditedProduct({ ...editedProduct, title: e.target.value })}
          />
          <TextField
            label="Price"
            value={editedProduct.price || ''}
            onChange={(e) => setEditedProduct({ ...editedProduct, price: e.target.value })}
          />
          <TextField
             style={{marginTop:"30px"}}
            label="Image URL"
            value={editedProduct.image || ''}
            onChange={(e) => setEditedProduct({ ...editedProduct, image: e.target.value })}
          />
          <TextField
             style={{marginTop:"30px"}}
            label="Description"
            value={editedProduct.description || ''}
            onChange={(e) => setEditedProduct({ ...editedProduct, description: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose}>Cancel</Button>
          <Button onClick={handleEditSave} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Products;
