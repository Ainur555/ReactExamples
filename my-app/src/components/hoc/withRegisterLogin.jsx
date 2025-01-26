import React, { useState, useEffect } from 'react';
import '../Registration-card.css'
import { addUser, getByEmail } from '../../slices/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import  '../../styles/error-message.css';

const withRegisterLogin = ((props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.usersStore.error);
  const [isSubmitted, setIsSubmitted] = useState(false); 
  
  useEffect(() => {
    if (isSubmitted && !error) {
      if (props.isLogin) {
        navigate('/home'); 
      }
    }
  }, [isSubmitted, error, props.isLogin, navigate]);

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    if (error) {
      dispatch(clearError()); 
    }
  };
  
  const handleSubmit = (event) => {
      event.preventDefault();
      console.log(props.title, (name !== null)?{ name, email, password }:{ email, password }); 
      

      if (props.isLogin) {
        dispatch(getByEmail({ email, password}));
        setIsSubmitted(true);
      }
      else {
        dispatch(addUser({ name, email, password }));
        navigate('/login');
      }
  };

  return (
    <div className="register" >      
      <h1>{props.title}</h1>
      <div className='registration-card'>
        <form onSubmit={handleSubmit}>
          {(!props.isLogin) && <div>
            <label>Имя:</label>
            <input
              type="text"
              value={name}
              onChange={handleInputChange(setName)}
              required
            />
          </div>}
          <div>
            <label>Электронная почта:</label>
            <input
              type="email"
              value={email}
              onChange={handleInputChange(setEmail)}
              required
            />
          </div>
          <div>
            <label>Пароль:</label>
            <input
              type="password"
              value={password}
              onChange={handleInputChange(setPassword)}
              required
            />
          </div>
          {error && (
            <div className="error-message">
              <p>{error}</p>
            </div>
          )}
          <button type="submit">{props.buttonTitle}</button>
        </form>
      </div>      
    </div>
  );
});

export default withRegisterLogin;