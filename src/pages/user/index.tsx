import React, { useEffect, useState, Fragment } from 'react';
import Content from '../share/content';
import { BsThreeDotsVertical, BsPencilFill, BsTrashFill } from 'react-icons/bs';
import { Menu, Transition } from '@headlessui/react';
import { useSelector } from 'react-redux';
import { reqDelUser, reqGetUser } from '../redux/action/actionReduce';
import Swal from 'sweetalert2';

import { useDispatch } from 'react-redux';
import AddUser from './adduser';
import EditUser from './editUser';

{/* <User data={}user/> */}
const User = () => {
  const [isOpen , setIsOpen]=useState(false)


  let {user , message , refresh}= useSelector((state:any)=>state.userReducer);
  // console.log(user)
const dispatch =useDispatch();

const [dataUser , setDataUser]=useState('')
const [isEdit, setisEdit] = useState(false)

  const column = [
    { name: '#No' },
    { name: 'user' },
    { name: 'firstname' },
    { name: 'lastname' },
  ];

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
        dispatch(reqDelUser(id))
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


  
  useEffect(()=>{
    dispatch(reqGetUser())
}, [refresh])

  

  return (
    <div>
      <Content title="user" fungsi={()=>setIsOpen(true)} >
        <table className="min-w-full table-fixed">
          <thead>
            <tr className="border-t border-gray-200">
              {(column || []).map((col) => (
                <th className="pr-6 py-2 text-left border-b border-gray-200 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <span className="lg:pl-2">{col.name}</span>
                </th>
              ))}
              <th className="pr-6 py-2 text-left border-b border-gray-200 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {(user || []).map((dt :any, index :any) => (
              <tr key={dt.id}>
                <td className="px-6 py-3 text-sm text-gray-900 text-left">
                  {index + 1}
                </td>
                <td className="px-6 py-3 text-sm text-gray-900 text-left">
                  {dt.user_name}
                </td>
                <td className="px-6 py-3 text-sm text-gray-900 text-left">
                  {dt.firstname || '' }
                </td>
                <td className="px-6 py-3 text-sm text-gray-900 text-left">
                  {dt.lastname || ''}
                </td>
                <td className="px-6 py-3 text-sm text-gray-900">
                  <div className="w-full text-right">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="nline-flex w-full justiify-center rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                          <BsThreeDotsVertical
                            className="ml-2 -mr-1 text-gray-700 hover:text-gray-400 sm:flex"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="px-1 py-1 ">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={() =>{ setDataUser(dt); setisEdit(true)}}
                                  className={`${
                                    active
                                      ? 'bg-violet-500 text-white'
                                      : 'text-gray-900'
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  {active ? (
                                    <BsPencilFill
                                      className="mr-2 h-5 w-5 text-violet-400"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <BsPencilFill
                                      className="mr-2 h-5 w-5 text-violet-400"
                                      aria-hidden="true"
                                    />
                                  )}
                                  Edit
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                          <div className="px-1 py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                onClick={() =>  handleDelete(dt.id)}
                                  className={`${
                                    active
                                      ? 'bg-violet-500 text-white'
                                      : 'text-gray-900'
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  {active ? (
                                    <BsTrashFill
                                      className="mr-2 h-5 w-5 text-violet-400"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <BsTrashFill
                                      className="mr-2 h-5 w-5 text-violet-400"
                                      aria-hidden="true"
                                    />
                                  )}
                                  Delete
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content> 
       {isEdit ? (
        <EditUser show={isEdit} closeModal={() => setisEdit(false)} data={dataUser}/>
      ) : (
        ''
      )}
      {isOpen?(
        <AddUser show={isOpen} closeModal={()=>setIsOpen(false)}/>
      ):('')}
    </div>
  );
};

export default User;
