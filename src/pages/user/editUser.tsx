import { Transition, Dialog } from '@headlessui/react';
import { Fragment , useState , useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { reqUpdateUser } from '../redux/action/actionReduce';



const EditUser = (props :any) => {
  const dispatch =useDispatch();
  type FormValues = {
    id: number;
    user_name: string;
    password: string;
    firstname: string;
    lastname: string;
  };

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormValues>();

      

    const handleRegistration = async (data :any) => {


    //   console.log(data)
        dispatch(reqUpdateUser(data))
    };


  return (
    <>
    <div>
      <Transition appear show={props.show} as={Fragment}>
        <Dialog as="div" className="relative z-10" static onClose={() => null}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Edit
                  </Dialog.Title>
                  <div className="w-full max-w-xs">
                    <div className="w-full max-w-xs">
                      <form
                        onSubmit={handleSubmit(handleRegistration)}
                        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                      >
                       <input
                          defaultValue={props.data.id}
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="hidden"
                          // name="id"
                          {...register('id')}
                        />

                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            // for="username"
                          >
                            Username
                          </label>
                          <input defaultValue={props.data.user_name }
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            // name="user_name"
                            {...register('user_name')}
                          />
                          {errors?.user_name && errors.user_name.message}
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            // for="password"
                          >
                            Password
                          </label>
                          <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="password"
                            // name="password"
                            {...register('password')}
                          />
                          {errors?.password && errors.password.message}
                        </div>
                        <div className="col-span-1">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            // for="firstname"
                          >
                            First Name
                          </label>
                          <input defaultValue={props.data.firstname}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            // name="firstname"
                            {...register('firstname')}
                          />
                          {errors?.firstname && errors.firstname.message}
                        </div>
                        <div className="col-span-1">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            // for="lastname"
                          >
                            Last Name
                          </label>
                          <input defaultValue={props.data.lastname}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            // name="lastname"
                            {...register('lastname')}
                          />
                          {errors?.lastname && errors.lastname.message}
                        </div>
                        <div className="flex-row space-x-4 text-right">
                          <button
                            type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 pt-2 text-sm font-medium"
                          >
                            Submit
                          </button>
                          <button
                            onClick={() => props.closeModal()}
                            className="text-blue-500 hover:text-blue-800"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
    </>
  );
};

export default EditUser;
