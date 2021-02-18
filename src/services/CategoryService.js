import axios from 'axios';



const   CATEGORY_API_BASE_URL ="http://localhost:8085/store-management/api/categories"
class CategoryService  {

    getCategories(){
        return axios.get(CATEGORY_API_BASE_URL);
    }

    createCategory(category){
        return axios.post(CATEGORY_API_BASE_URL,category);
    }
  
}
export default new CategoryService()
