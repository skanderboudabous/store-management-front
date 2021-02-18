import React, {useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

function AddMedicament()  {

        const[selectedDate,setSelectedDate]=useState(null)
        return (
            <div className="row justify-content-center ">
                <form className="col-md-6 mt-3">
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg" placeholder="Medicament ID" name="id"  disabled />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg " placeholder="Medicament Name" name="name"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg " placeholder="Price" name="price"/>
                            </div>
                            <div className="form-group row col">
                                <DatePicker className="form-control form-control-lg"  
                                            selected={selectedDate} 
                                            onChange={date => setSelectedDate(date)}
                                            dateFormat="dd/MM/yyyy"/>
                                <input type="text" className="form-control form-control-lg col-md-6 ml-3" placeholder="Dosage" name="dosage"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg " placeholder="Category Name" name="category"/>
                            </div>
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
            </div>
        )
    }

export default AddMedicament