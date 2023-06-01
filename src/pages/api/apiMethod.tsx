import axios from '../config/endpoint';

const findAll = () => {
  return axios.get('users/usercus');
};

const Create = (data:any) => {
  console.log(data);
  return axios.post('users/userCsSp', data);
};

const getByid =(id:any) =>{
    return axios.get(`/users/get/${id}`);
    // console.log(object)
}

const Updatecs=(data:any)=>{
  // console.log(data)
  return axios.patch(`/usercsdto/${data.id}` , data)
}

const Delete=(id:any)=>{
  // console.log(id)
  return axios.delete(`/usercsdto/${id}`)
}

const getAllProduct=()=>{
  return axios.get('product-pc/all')
}

const createProduct=(data:any)=>{
  return axios.post('product-dto', data)
}

const updateProduct=(data:any)=>{
  console.log(data)
  return axios.put(`product-dto/${data.id}`, data)
}

const deleteProduct=(id:any)=>{
  console.log(id)
  return axios.delete(`product-dto/${id}`)
}
const login=(data :any)=>{
  console.log(data)
  return axios.post('login-odt/login', data)
}

const pagnation=(data :any)=>{
  console.log(data)
  return axios.post('users/userCsPag', data)
}
export default {
  findAll,
  Create,
  getByid,
  Updatecs,
  Delete,
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  login,
  pagnation
};
