import axios from 'axios';



const   MEDICAMENT_API_BASE_URL ="http://localhost:8085/store-management/api/medicaments"
class MedicamentService  {

    getMedicaments(){
        return axios.get(MEDICAMENT_API_BASE_URL);
    }
  
}
export default new MedicamentService()
