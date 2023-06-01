import React, { useEffect, useState } from 'react';
import {reqDelProduct, reqGetProduct } from '../redux/action/actionReduce';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { handleDelProduct, handleGetProduct } from '../redux/action/saga/productSaga';
import Content from '../share/content';
import EditProduct from './editProduct';

export default function Product() {
  const [isOpen , setIsOpen] =useState(false)
  const { products, message, refresh } = useSelector((state:any) => state.productReducer);
  const dispatch = useDispatch();
  const [id , setid]=useState('')
  const [dataProduct, setDataProduct] = useState('');
  const [isEdit, setisEdit] = useState(false);




  const handleDelete = async (id : number) => {
    // console.log(id)
    
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      });
  
      if (result.isConfirmed) {
        dispatch(reqDelProduct(id))
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      } else {
        Swal.fire(
          'Cancelled',
          'Your file is safe.',
          'info'
        );
      }
    } catch (error) {
      console.error('Error deleting data:', error);
      Swal.fire(
        'Error!',
        'Failed to delete data. Please try again.',
        'error'
      );
    }
  };

  useEffect(() => {
    dispatch(reqGetProduct());
  }, [refresh]);

  return (
    <>
      <Content title="product" entity="product" fungsi={()=>setIsOpen(true)}>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Product</h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {(products || []).map((product: any) => (
                <div key={product.product_id} className="group relative">
                  <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={`http://localhost:7000/images/${product.image}` || 'https://cdn0.iconfinder.com/data/icons/filetype-2/512/file-corrupt-1024.png'}
                      alt={product.image}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={product.href}>
                          <span aria-hidden="true" className="absolute" />
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                  </div>
                  <div className="mt-2 flex justify-between">
                    <button
                      className="text-sm text-blue-600 hover:text-blue-800"
                      onClick={() => {setDataProduct(product);setisEdit(true)}}
                    >
                      Edit
                    </button>
                    <button
                      className="text-sm text-red-600 hover:text-red-800"
                      onClick={() =>  handleDelete(product.product_id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Content>
      {isEdit && (
        <EditProduct show={isEdit} closeModal={() => setisEdit(false)} product={dataProduct} />
      )}
    </>
  );
}
