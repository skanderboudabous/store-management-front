import React, { Component } from 'react';
import CategoryService from '../services/CategoryService';

class Categories extends Component {
  constructor(props){
    super(props)

    this.state={
      categories: []
    }
  }
  componentDidMount(){
    CategoryService.getCategories().then((res)=>{
      this.setState({
        categories: res.data
      });
    });
  }

  render(){
  return (
    <div className='row justify-content-center'>
      <table className="table col-md-6">
          <thead className="thead-light tabhead">
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.categories.map(
                category =>
                <tr key={category.id}>
                  <td>{category.id}</td>
                  <td>{category.name}</td>
                  <td><button className="btn btn-info mr-2">Edit</button>
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

export default Categories;