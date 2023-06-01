import { forwardRef ,LegacyRef } from 'react';
import Link from "next/link";
import {  useLocation } from 'react-router-dom';
import { CiLogout } from "react-icons/ci";
import logo from "../../../public/OIP.png"
import {
  MdCottage,
  MdGroup,
  MdShopTwo,
  MdCategory,
  MdLabel,
} from 'react-icons/md';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Swal from 'sweetalert2';

const SideBar = forwardRef(({  }, ref: LegacyRef<HTMLDivElement>) => {



  const router =useRouter()
const logOut =async()=>{


  
  try {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Log Out!'
    });

    if (result.isConfirmed) {
      localStorage.removeItem('token')
        router.push('/login')
      Swal.fire(
        'Log Out!',
        'success'
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


  const listMenu = [
    { to: '/', path: '/', icon: <MdCottage />, name: 'Home' },
    { to: 'pagnation', patch: 'pagnation', icon: <MdGroup />, name: 'pagnation' },

    {
      to: 'category',
      patch: 'category',
      icon: <MdCategory />,
      name: 'Category',
    },
    {
      to: 'customer',
      patch: 'customer',
      icon: <MdShopTwo />,
      name: 'Customer',
    },
    { to: 'product', patch: 'product', icon: <MdLabel />, name: 'Product' },
  ];

  return (
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm">
      <div className="flex justify-center mt-6 mb-14">
        <picture>
          <Image
          className="w-32 h-auto transform hover:rotate-180 transition duration-500 ease-in-out"
          src={logo}
          alt="company logo"
        />
        </picture>
      </div>
      <div className="flex flex-col">
        {(listMenu || []).map((mn) => (
          <Link href={`${mn.to}`}>
            <div
              className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                router.pathname === mn.path
                  ? 'bg-orange-100 text-orange-500'
                  : 'text-gray-400 hover:bg-orange-100 hover:text-orange-500'
              }`}
            >
              <div className="mr-2">{mn.icon}</div>
              <div>
                <p>{mn.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center py-5">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      onClick={logOut}>
  <CiLogout className="inline-block w-4 h-4 mr-2 align-middle" />
  Log Out
</button>
</div>

    </div>
  );
});

SideBar.displayName = 'SideBar';

export default SideBar;
