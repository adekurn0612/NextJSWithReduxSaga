// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useForm } from 'react-hook-form';
// import { CreateProduct } from '../redux/action/actionReduce';

// const AddProduct = () => {
//   const dispatch = useDispatch();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const handleUpload = (data) => {
//     const formData = new FormData();
//     formData.append('file', data.file[0]);
//     formData.append('name', data.name);
//     formData.append('description', data.description);
//     formData.append('categoryid', data.categoryid);
//     formData.append('price', data.price);
//     console.log(formData)
//     dispatch(CreateProduct(formData));
//   };

//   return (
//     <form onSubmit={handleSubmit(handleUpload)}>
//       <div className="mb-4">
//         <label htmlFor="file" className="block text-gray-700 font-bold mb-2">
//           Choose File
//         </label>
//         <div className="flex items-center">
//           <label
//             htmlFor="file"
//             className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-3 rounded-md cursor-pointer transition duration-300"
//           >
//             <svg
//               className="w-4 h-4 mr-2"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V7.414a1 1 0 00-.293-.707l-5-5A1 1 0 0012.414 1H7a1 1 0 00-1 1v1H4a1 1 0 00-1 1v2zm14 2v10H3V6.414L7.586 2H12v3a1 1 0 001 1h3v2h-3a1 1 0 00-1 1zm-4 1a1 1 0 100 2 1 1 0 000-2zm-7 4h10a1 1 0 010 2H6a1 1 0 010-2zm0 4h8a1 1 0 010 2H6a1 1 0 010-2z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             <span>Select File</span>
//             <input
//               type="file"
//               name='file'
//               id="file"
//               {...register('file')}
//               className="hidden"
//             />
//           </label>
//           {errors.file && <span className="ml-3 text-red-500">File is required</span>}
//         </div>
//       </div>
//       <div className="mb-4">
//         <label htmlFor="productName" className="block text-gray-700 font-bold mb-2">
//           Product Name
//         </label>
//         <input
//           type="text"
//           name='name'
//           id="name"
//           {...register('name', { required: true })}
//           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
//         />
//         {errors.name && <span className="text-red-500">Product name is required</span>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
//           Description
//         </label>
//         <textarea
//           id="description"
//           name='description'
//           {...register('description', { required: true })}
//           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
//         ></textarea>
//         {errors.description && <span className="text-red-500">Description is required</span>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="categoryId" className="block text-gray-700 font-bold mb-2">
//           Category ID
//         </label>
//         <input
//           type="text"
//           id="categoryId"
//           name='categoryid'
//           {...register('categoryid', { required: true })}
//           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
//         />
//         {errors.categoryId && <span className="text-red-500">Category ID is required</span>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
//           Price
//         </label>
//         <input
//           type="text"
//           id="price"
//           name='price'
//           {...register('price', { required: true })}
//           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
//         />
//         {errors.price && <span className="text-red-500">Price is required</span>}
//       </div>
//       <button
//         type="submit"
//         className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition duration-300"
//       >
//         Upload
//       </button>
//     </form>
//   );
// };

// export default AddProduct;
