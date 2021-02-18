import React, { Component } from 'react'
import CategoryService from '../services/CategoryService';

class AddCategory extends Component {
    constructor(props){
        super(props)

        this.state={
            id: null,
            name: '',
            medicaments: [] 
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.saveCategory = this.saveCategory.bind(this);

    }
    saveCategory=(e)=>{
        e.preventDefault();
        let category ={id: null,name: this.state.name,medicaments: [] };
        CategoryService.createCategory(category).then(res =>{
            this.props.history.push('/category');
        });
    }
    
    changeNameHandler=(event) =>{
        this.setState({name: event.target.value})
    }
    cancel(){
        this.props.history.push('/category');
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <input placeholder="Name" name="name" className="form-control"
                                        value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveCategory}>Save</button>
                                    <button className="btn btn-danger ml-10" onClick={this.cancel.bind(this)}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default AddCategory