// import React, { useState } from 'react';
// import axios from 'axios';
// import './CreateAccount.css';

// const CreateAccount = ({ history }) => {
//   const [formData, setFormData] = useState({
//     email: '',
//     number: '',
//     password: '',
//     industrySegment: '',
//     userCategory: '',
//     firstName: '',
//     lastName: '',
//     organization: '',
//   });

//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     let errors = {};

//     if (!formData.firstName) {
//       errors.firstName = 'First name is required';
//     }

//     if (!formData.lastName) {
//       errors.lastName = 'Last name is required';
//     }

//     if (!formData.organization) {
//       errors.organization = 'Organization is required';
//     }

//     if (!formData.industrySegment) {
//       errors.industrySegment = 'Industry segment is required';
//     }

//     if (!formData.userCategory) {
//       errors.userCategory = 'User category is required';
//     }

//     if (!formData.email) {
//       errors.email = 'Email is required';
//     }

//     if (!formData.number) {
//       errors.number = 'Number is required';
//     }

//     if (!formData.password) {
//       errors.password = 'Password is required';
//     }

//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validate()) {
//       try {
//         await axios.post('http://localhost:5000/api/create-account', formData);
//         alert('Account created successfully');
//         history.push('/sign-in');
//       } catch (error) {
//         console.error('There was an error creating the account!', error);
//       }
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="container">
//       <div className="content">
//         <h1 className="logo">X<span>periento</span></h1>
//         <p className="tagline">Complete Your Profile for the right insights.</p>
//         <form onSubmit={handleSubmit} className="form">
//           {/* Form inputs for first name, last name, etc. */}
//           <button type="submit" className="create-account-button">Create Account</button>
//         </form>
//         <div className="icon-container">
//           <div className="icon food-icon">
//             <img src='food-icon.png' alt='' />
//           </div>
//           <div className="icon shop-icon">

//           <img src='shop-icon.png' alt='' />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateAccount;
// import React, { useState } from 'react';
// import React, {  useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './CreateAccount.css';



// const CreateAccount = () => {

//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: '',
//     number: '',
//     password: '',
//     industrySegment: '',
//     userCategory: '',
//     firstName: '',
//     lastName: '',
//     organization: '',
//   });
//   const [errors, setErrors] = useState({});

//   const [isCreatingAccount, setIsCreatingAccount] = useState(false);
// const [businessType, setBusinessType] = useState("Restaurant");
// const [user, setUser] = useState(undefined);
// const toggleForm = () => {
//   setIsCreatingAccount(pre => !pre);
// };
// if (user) {
//   return <div style={{ color: "var(--textColor)" }}>Already LoggedIn. Redirecting...</div>
// }


//   const validate = () => {
//     let errors = {};

//     if (!formData.firstName) {
//       errors.firstName = 'First name is required';
//     }

//     if (!formData.lastName) {
//       errors.lastName = 'Last name is required';
//     }

//     if (!formData.organization) {
//       errors.organization = 'Organization is required';
//     }

//     if (!formData.industrySegment) {
//       errors.industrySegment = 'Industry segment is required';
//     }

//     if (!formData.userCategory) {
//       errors.userCategory = 'User category is required';
//     }

//     if (!formData.email) {
//       errors.email = 'Email is required';
//     }

//     if (!formData.number) {
//       errors.number = 'Number is required';
//     }

//     if (!formData.password) {
//       errors.password = 'Password is required';
//     }

//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validate()) {
//       try {
//         await axios.post('http://localhost:5000/api/create-account', formData);
//         alert('Account created successfully');
//       } catch (error) {
//         console.error('There was an error creating the account!', error);
//       }
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="container">
//       <div className="content">
//         <h1 className="logo">X<span>periento</span></h1>
//         <p className="tagline">Complete Your Profile for the right insights.</p>
//         <form onSubmit={handleSubmit} className="form">
//           <div className="form-group">
//             <label htmlFor="firstName">First Name</label>
//             <input
//               type="text"
//               id="firstName"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//             />
//             {errors.firstName && <p className="error">{errors.firstName}</p>}
//           </div>
//           <div className="form-group">
//             <label htmlFor="lastName">Last Name</label>
//             <input
//               type="text"
//               id="lastName"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//             />
//             {errors.lastName && <p className="error">{errors.lastName}</p>}
//           </div>
//           <div className="form-group">
//             <label htmlFor="organization">Organization</label>
//             <input
//               type="text"
//               id="organization"
//               name="organization"
//               value={formData.organization}
//               onChange={handleChange}
//             />
//             {errors.organization && <p className="error">{errors.organization}</p>}
//           </div>
//           <div className="form-group">
//             <label htmlFor="industrySegment">Industry Segment</label>
//             <input
//               type="text"
//               id="industrySegment"
//               name="industrySegment"
//               value={formData.industrySegment}
//               onChange={handleChange}
//             />
//             {errors.industrySegment && <p className="error">{errors.industrySegment}</p>}
//           </div>
//           <div className="form-group">
//             <label htmlFor="userCategory">User Category</label>
//             <input
//               type="text"
//               id="userCategory"
//               name="userCategory"
//               value={formData.userCategory}
//               onChange={handleChange}
//             />
//             {errors.userCategory && <p className="error">{errors.userCategory}</p>}
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             {errors.email && <p className="error">{errors.email}</p>}
//           </div>
//           <div className="form-group">
//             <label htmlFor="number">Number</label>
//             <input
//               type="text"
//               id="number"
//               name="number"
//               value={formData.number}
//               onChange={handleChange}
//             />
//             {errors.number && <p className="error">{errors.number}</p>}
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
//             {errors.password && <p className="error">{errors.password}</p>}
//           </div>
//           {/* <div className="icon-container">
//           <div className="icon food-icon"></div>
//           <div className="icon shop-icon"></div>
//         </div> */}
//         {isCreatingAccount && <div className="radio-btn">
//                 <svg onClick={() => { setBusinessType("Restaurant") }} className="icon food-icon  " width="70" height="70" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M23.8439 21.7568L64.964 62.877C65.7443 63.6572 66.1826 64.7155 66.1826 65.819C66.1826 66.9224 65.7443 67.9807 64.964 68.761C64.1836 69.5409 63.1254 69.9791 62.022 69.9791C60.9186 69.9791 59.8604 69.5409 59.08 68.761L49.0352 58.5432C48.3778 57.8757 48.0091 56.9766 48.0084 56.0398V55.4226C48.0085 54.9496 47.9146 54.4812 47.7322 54.0448C47.5498 53.6083 47.2825 53.2124 46.9459 52.8801L45.649 51.6826C45.2087 51.2763 44.6733 50.9874 44.0921 50.8423C43.5109 50.6972 42.9025 50.7006 42.323 50.8522C41.4091 51.0907 40.4487 51.0861 39.5372 50.8388C38.6256 50.5916 37.7946 50.1102 37.1265 49.4426L27.5917 39.9067C21.9354 34.2504 19.8539 25.7089 23.8439 21.7568Z" stroke={businessType == "Restaurant" ? "var(--star-color)" : "#DCDCDC"} strokeWidth="3" strokeLinejoin="round" />
//                     <path d="M62.0715 20L53.4497 28.6218C52.7862 29.2851 52.26 30.0726 51.9009 30.9393C51.5418 31.8061 51.357 32.7351 51.357 33.6732V35.3317C51.3571 35.5664 51.3109 35.7987 51.221 36.0155C51.1312 36.2323 50.9996 36.4293 50.8336 36.5951L49.5713 37.8574" stroke={businessType == "Restaurant" ? "var(--star-color)" : "#DCDCDC"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
//                     <path d="M53.1426 41.4289L54.4049 40.1666C54.5707 40.0006 54.7677 39.869 54.9845 39.7792C55.2013 39.6893 55.4336 39.6431 55.6683 39.6432H57.3268C58.265 39.6432 59.1939 39.4584 60.0607 39.0993C60.9274 38.7402 61.7149 38.214 62.3782 37.5505L71 28.9287" stroke={businessType == "Restaurant" ? "var(--star-color)" : "#DCDCDC"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
//                     <path d="M66.5352 24.4644L57.6064 33.3931" stroke={businessType == "Restaurant" ? "var(--star-color)" : "#DCDCDC"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
//                     <path d="M39.7494 57.501L28.6197 68.6931C27.7825 69.5301 26.6472 70.0002 25.4634 70.0002C24.2796 70.0002 23.1443 69.5301 22.3071 68.6931C21.4702 67.8559 21 66.7206 21 65.5368C21 64.353 21.4702 63.2177 22.3071 62.3805L31.7135 53.0366" stroke={businessType == "Restaurant" ? "var(--star-color)" : "#DCDCDC"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//                 <svg onClick={() => { setBusinessType("Shopping") }} className="icon " width="70" height="70" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M32.7676 32.962V31.6695C32.7676 25.2478 37.7154 20 43.8779 20C50.0404 20 54.9882 25.2478 54.9882 31.6695V32.9657H62.5728C63.0315 32.9662 63.4738 33.1369 63.8138 33.4448C64.1539 33.7527 64.3675 34.1758 64.4134 34.6322L67.7465 67.9631C67.7723 68.2205 67.744 68.4804 67.6633 68.7261C67.5826 68.9718 67.4513 69.1979 67.2779 69.3898C67.1045 69.5817 66.8929 69.7351 66.6565 69.8402C66.4202 69.9453 66.1645 69.9997 65.9059 70H21.8499C21.5913 69.9997 21.3355 69.9453 21.0992 69.8402C20.8629 69.7351 20.6512 69.5817 20.4778 69.3898C20.3044 69.1979 20.1732 68.9718 20.0925 68.7261C20.0118 68.4804 19.9834 68.2205 20.0093 67.9631L23.3424 34.6322C23.3882 34.1758 23.6019 33.7527 23.942 33.4448C24.282 33.1369 24.7242 32.9662 25.183 32.9657H32.7676V32.962ZM36.471 32.962H51.2847V31.6695C51.2847 27.2476 47.9443 23.7034 43.8779 23.7034C39.8115 23.7034 36.471 27.2476 36.471 31.6695V32.9657V32.962ZM32.7676 36.6654H26.8606L23.8979 66.2929H63.8579L60.8914 36.6654H54.9882V42.2206C54.9882 42.7117 54.7931 43.1827 54.4458 43.5299C54.0986 43.8772 53.6276 44.0723 53.1365 44.0723C52.6454 44.0723 52.1744 43.8772 51.8271 43.5299C51.4798 43.1827 51.2847 42.7117 51.2847 42.2206V36.6654H36.471V42.2206C36.471 42.7117 36.2759 43.1827 35.9287 43.5299C35.5814 43.8772 35.1104 44.0723 34.6193 44.0723C34.1282 44.0723 33.6572 43.8772 33.31 43.5299C32.9627 43.1827 32.7676 42.7117 32.7676 42.2206V36.6654Z" fill={businessType !== "Restaurant" ? "var(--star-color)" : "#DCDCDC"} />
//                 </svg>

//             </div>}
//           <button  onClick={toggleForm} type="submit" className="create-account-button">Create Account</button>
//         </form>
       
//       </div>
//     </div>
//   );
// };

// export default CreateAccount;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CreateAccount.css';

const CreateAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    number: '',
    password: '',
    industrySegment: '',
    userCategory: '',
    firstName: '',
    lastName: '',
    organization: '',
  });
  const [errors, setErrors] = useState({});


    const [isCreatingAccount, setIsCreatingAccount] = useState(false);
const [businessType, setBusinessType] = useState("Restaurant");
const [user, setUser] = useState(undefined);

const toggleForm = () => {
  setIsCreatingAccount(pre => !pre);
};
if (user) {
  return <div style={{ color: "var(--textColor)" }}>Already LoggedIn. Redirecting...</div>
}
  const validate = () => {
    let errors = {};

    if (!formData.firstName) {
      errors.firstName = 'First name is required';
    }

    if (!formData.lastName) {
      errors.lastName = 'Last name is required';
    }

    if (!formData.organization) {
      errors.organization = 'Organization is required';
    }

    if (!formData.industrySegment) {
      errors.industrySegment = 'Industry segment is required';
    }

    if (!formData.userCategory) {
      errors.userCategory = 'User category is required';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    }

    if (!formData.number) {
      errors.number = 'Number is required';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        await axios.post('http://localhost:5000/api/create-account', formData);
        alert('Account created successfully');
        navigate('/sign-in');
      } catch (error) {
        console.error('There was an error creating the account!', error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container">
      <div className="content">
        <h1 className="logo">X<span>periento</span></h1>
        <p className="tagline">Complete Your Profile for the right insights.</p>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="organization">Organization</label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
            />
            {errors.organization && <p className="error">{errors.organization}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="industrySegment">Industry Segment</label>
            <input
              type="text"
              id="industrySegment"
              name="industrySegment"
              value={formData.industrySegment}
              onChange={handleChange}
            />
            {errors.industrySegment && <p className="error">{errors.industrySegment}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="userCategory">User Category</label>
            <input
              type="text"
              id="userCategory"
              name="userCategory"
              value={formData.userCategory}
              onChange={handleChange}
            />
            {errors.userCategory && <p className="error">{errors.userCategory}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="number">Mobile Number</label>
            <input
              type="text"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
            />
            {errors.number && <p className="error">{errors.number}</p>}
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
            {errors.password && <p className="error">{errors.password}</p>}
          </div>


          {isCreatingAccount && <div className="radio-btn">
                <svg onClick={() => { setBusinessType("Restaurant") }} className="icon food-icon  " width="70" height="70" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M23.8439 21.7568L64.964 62.877C65.7443 63.6572 66.1826 64.7155 66.1826 65.819C66.1826 66.9224 65.7443 67.9807 64.964 68.761C64.1836 69.5409 63.1254 69.9791 62.022 69.9791C60.9186 69.9791 59.8604 69.5409 59.08 68.761L49.0352 58.5432C48.3778 57.8757 48.0091 56.9766 48.0084 56.0398V55.4226C48.0085 54.9496 47.9146 54.4812 47.7322 54.0448C47.5498 53.6083 47.2825 53.2124 46.9459 52.8801L45.649 51.6826C45.2087 51.2763 44.6733 50.9874 44.0921 50.8423C43.5109 50.6972 42.9025 50.7006 42.323 50.8522C41.4091 51.0907 40.4487 51.0861 39.5372 50.8388C38.6256 50.5916 37.7946 50.1102 37.1265 49.4426L27.5917 39.9067C21.9354 34.2504 19.8539 25.7089 23.8439 21.7568Z" stroke={businessType == "Restaurant" ? "var(--star-color)" : "#DCDCDC"} strokeWidth="3" strokeLinejoin="round" />
                     <path d="M62.0715 20L53.4497 28.6218C52.7862 29.2851 52.26 30.0726 51.9009 30.9393C51.5418 31.8061 51.357 32.7351 51.357 33.6732V35.3317C51.3571 35.5664 51.3109 35.7987 51.221 36.0155C51.1312 36.2323 50.9996 36.4293 50.8336 36.5951L49.5713 37.8574" stroke={businessType == "Restaurant" ? "var(--star-color)" : "#DCDCDC"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                     <path d="M53.1426 41.4289L54.4049 40.1666C54.5707 40.0006 54.7677 39.869 54.9845 39.7792C55.2013 39.6893 55.4336 39.6431 55.6683 39.6432H57.3268C58.265 39.6432 59.1939 39.4584 60.0607 39.0993C60.9274 38.7402 61.7149 38.214 62.3782 37.5505L71 28.9287" stroke={businessType == "Restaurant" ? "var(--star-color)" : "#DCDCDC"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M66.5352 24.4644L57.6064 33.3931" stroke={businessType == "Restaurant" ? "var(--star-color)" : "#DCDCDC"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M39.7494 57.501L28.6197 68.6931C27.7825 69.5301 26.6472 70.0002 25.4634 70.0002C24.2796 70.0002 23.1443 69.5301 22.3071 68.6931C21.4702 67.8559 21 66.7206 21 65.5368C21 64.353 21.4702 63.2177 22.3071 62.3805L31.7135 53.0366" stroke={businessType == "Restaurant" ? "var(--star-color)" : "#DCDCDC"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                 </svg>
                 <svg onClick={() => { setBusinessType("Shopping") }} className="icon " width="70" height="70" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M32.7676 32.962V31.6695C32.7676 25.2478 37.7154 20 43.8779 20C50.0404 20 54.9882 25.2478 54.9882 31.6695V32.9657H62.5728C63.0315 32.9662 63.4738 33.1369 63.8138 33.4448C64.1539 33.7527 64.3675 34.1758 64.4134 34.6322L67.7465 67.9631C67.7723 68.2205 67.744 68.4804 67.6633 68.7261C67.5826 68.9718 67.4513 69.1979 67.2779 69.3898C67.1045 69.5817 66.8929 69.7351 66.6565 69.8402C66.4202 69.9453 66.1645 69.9997 65.9059 70H21.8499C21.5913 69.9997 21.3355 69.9453 21.0992 69.8402C20.8629 69.7351 20.6512 69.5817 20.4778 69.3898C20.3044 69.1979 20.1732 68.9718 20.0925 68.7261C20.0118 68.4804 19.9834 68.2205 20.0093 67.9631L23.3424 34.6322C23.3882 34.1758 23.6019 33.7527 23.942 33.4448C24.282 33.1369 24.7242 32.9662 25.183 32.9657H32.7676V32.962ZM36.471 32.962H51.2847V31.6695C51.2847 27.2476 47.9443 23.7034 43.8779 23.7034C39.8115 23.7034 36.471 27.2476 36.471 31.6695V32.9657V32.962ZM32.7676 36.6654H26.8606L23.8979 66.2929H63.8579L60.8914 36.6654H54.9882V42.2206C54.9882 42.7117 54.7931 43.1827 54.4458 43.5299C54.0986 43.8772 53.6276 44.0723 53.1365 44.0723C52.6454 44.0723 52.1744 43.8772 51.8271 43.5299C51.4798 43.1827 51.2847 42.7117 51.2847 42.2206V36.6654H36.471V42.2206C36.471 42.7117 36.2759 43.1827 35.9287 43.5299C35.5814 43.8772 35.1104 44.0723 34.6193 44.0723C34.1282 44.0723 33.6572 43.8772 33.31 43.5299C32.9627 43.1827 32.7676 42.7117 32.7676 42.2206V36.6654Z" fill={businessType !== "Restaurant" ? "var(--star-color)" : "#DCDCDC"} />
                 </svg>

             </div>}   
             <button type='submit' >{isCreatingAccount ? 'Create Account' : 'SignIn '}</button>      
          <button    onClick={toggleForm} type="submit" className="create-account-button">Create Account</button>
        </form>
        
      </div>
    </div>
  );
};

export default CreateAccount;
