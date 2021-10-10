import React from 'react';
import { useHistory } from 'react-router';
import chair from '../../../assets/chair.png';

const HeaderMain = () => {
    const history = useHistory()

    const handleChange = () => {
        history.push('/appointment')
    }
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Your New Smile <br/> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <button onClick={handleChange} style={{backgroundColor:'#1CC7C1'}} className="btn btn-primary btn-brand">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;