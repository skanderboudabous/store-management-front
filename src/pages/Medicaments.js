import React, { Component } from 'react';
import MedicamentService from '../services/MedicamentService';
class Medicaments extends Component {
    constructor(props){
    super(props)

    this.state={
      medicaments: []
    }
  }
  componentDidMount(){
    MedicamentService.getMedicaments().then((res)=>{
      this.setState({
        medicaments: res.data
      });
    });

  }
  render(){
  return (
    <div className='row justify-content-center  '>
      <table class="table col-md-8">
          <thead class="thead-light">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Expired Date</th>
              <th scope="col">Dosage</th>
              <th scope="col">Category</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.medicaments.map(
                medicament =>
                <tr key={medicament.id}>
                  <td>{medicament.id}</td>
                  <td>{medicament.name}</td>
                  <td>{medicament.price}</td>
                  <td>{medicament.expiredDate}</td>
                  <td>{medicament.dosage}</td>
                  <td>{medicament.category}</td>
                  <td><button className="btn btn-info">Edit</button>
                  <button className="btn btn-danger">Delete</button></td>
                </tr>
              )
            }
          </tbody>
      </table>
    </div>
  );
}
}

export default Medicaments;