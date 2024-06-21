
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './SignIn.css';

// const SignIn = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ number: '', password: '' });
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/sign-in', formData);
//       if (response.data.success) {
//         alert('Signed in successfully');
//         navigate('/next-page');
//       } else {
//         setError('Invalid credentials');
//       }
//     } catch (error) {
//       setError('There was an error signing in!');
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="sign-in-container">
//       <div className="sign-in-content">
//         <h1 className="sign-in-logo">X<span>periento</span></h1>
//         <form onSubmit={handleSubmit} className="sign-in-form">
//           <div className="form-group">
//             <label htmlFor="number">Mobile Number</label>
//             <input
//               type="text"
//               id="number"
//               name="number"
//               value={formData.number}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//           </div>
//           {error && <p className="error">{error}</p>}
//           <button type="submit" className="sign-in-button">Sign In</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignIn;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  const [formData, setFormData] = useState({ number: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/sign-in', formData);
      if (response.data.success) {
        alert('Signed in successfully');
        navigate('/next-page');
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      setError('There was an error signing in!');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <div className="sign-in-content">
        <h1 className="sign-in-logo">X<span>periento</span></h1>
        <form onSubmit={handleSubmit} className="sign-in-form">
          <div className="form-group">
            <label htmlFor="number">Mobile Number</label>
            <input
              type="text"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
