import React from 'react';
import { useEffect } from 'react';
import { useAuth } from '../context/AuthProvider';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Home(props) {
    const {register, handleSubmit} = useForm();
    const {logout, isAuthenticated, user} = useAuth();

    const navigate = useNavigate();

    const onSubmit = handleSubmit(async () => {
        logout(user);
    });

    useEffect(() => {
        if(!isAuthenticated){
            navigate('/login')
        }
    }, [isAuthenticated])

    return (
        <div>
            Home
            <form onSubmit={onSubmit}>
                <button type='submit'>Logout</button>
            </form>
        </div>
    );
}

export default Home;