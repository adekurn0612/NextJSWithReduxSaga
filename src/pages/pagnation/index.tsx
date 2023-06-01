import { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { reqGetPage } from '../redux/action/actionReduce';
import { useDispatch, useSelector } from 'react-redux';

export default function Example() {
  const dispatch =useDispatch();
  let {user , message , refresh}= useSelector((state:any)=>state.pagReducer);
  const [currentPage, setCurrentPage] = useState(1);
  console.log(user)


  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const data:any =[
    {jumlah : 1,
      awal:currentPage + 1
      // * 10 - 10
      
      // 10
    }
  ]



  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(( )=>{
    dispatch(reqGetPage(data))
}, [])
  return (
    <>
    <a></a>
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{(currentPage)*parseInt(data[0].jumlah)-parseInt(data[0].jumlah)}</span> to <span className="font-medium">{(currentPage)*parseInt(data[0].jumlah)}</span> of{' '}
            <span className="font-medium"></span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={handlePrevPage}
            >
              <BsChevronCompactLeft className="h-5 w-10" aria-hidden="true" />Prev
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              {currentPage + -1}
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 bg-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              {currentPage}
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              {currentPage + 1}
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              ...
            </a>
            
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={handleNextPage}
            >Next
              <BsChevronCompactRight className="h-5 w-10" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
    </>
  )
}