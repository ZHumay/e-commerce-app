import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const addProductValidationSchema = Yup.object({
  name: Yup.string().required('Name is important'),
  email: Yup.string().required('Email is important').email('Enter a valid email address'),
  surname: Yup.string().required('Surname is important'),
  password: Yup.string().min(8, 'Minimum 8 characters').required('Password is important'),
  acceptPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password confirmation is important'),
});

function Register() {
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      surname: '',
      gender: 'female',
      password: '',
      acceptPassword: '',
    },
    validationSchema: addProductValidationSchema,
    onSubmit: (values) => {
      const storedUsers = JSON.parse(localStorage.getItem('registeredUsers'));
      const existingUser = storedUsers.find(
        (user) => user.name === values.name && user.email === values.email && user.password === values.password
      );
    
      if (existingUser) {
        const loggedInUsers = JSON.parse(localStorage.getItem('loggedInUsers')) || [];
        loggedInUsers.push(existingUser);
        localStorage.setItem('loggedInUsers', JSON.stringify(loggedInUsers));
    
        window.alert('You have successfully logged in!');
        navigate('/');
      } else {
        window.alert('Invalid name, email, or password');
      }
    },
  });

  return (
    <div
      style={{
        background: 'linear-gradient(0.25turn, #E3BE7E, #F1DCB7, #f69d3c)',
        height: '900px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form
        onSubmit={formik.handleSubmit}
        style={{
          width: '400px',
          background: 'white',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Register</h2>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            style={{ width: '100%', padding: '5px' }}
          />
          {formik.touched.name && formik.errors.name && (
            <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{formik.errors.name}</p>
          )}
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="surname" style={{ display: 'block', marginBottom: '5px' }}>
            Surname:
          </label>
          <input
            type="text"
            id="surname"
            name="surname"
            onChange={formik.handleChange}
            value={formik.values.surname}
            style={{ width: '100%', padding: '5px' }}
          />
          {formik.touched.surname && formik.errors.surname && (
            <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{formik.errors.surname}</p>
          )}
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
            E-mail:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            style={{ width: '100%', padding: '5px' }}
          />
          {formik.touched.email && formik.errors.email && (
            <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{formik.errors.email}</p>
          )}
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Gender:</label>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={formik.handleChange}
                checked={formik.values.gender === 'female'}
              />
              Female
            </label>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={formik.handleChange}
                checked={formik.values.gender === 'male'}
              />
              Male
            </label>
          </div>
          {formik.touched.gender && formik.errors.gender && (
            <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{formik.errors.gender}</p>
          )}
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            style={{ width: '100%', padding: '5px' }}
          />
          {formik.touched.password && formik.errors.password && (
            <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{formik.errors.password}</p>
          )}
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="acceptPassword" style={{ display: 'block', marginBottom: '5px' }}>
            Confirm Password:
          </label>
          <input
            type="password"
            id="acceptPassword"
            name="acceptPassword"
            onChange={formik.handleChange}
            value={formik.values.acceptPassword}
            style={{ width: '100%', padding: '5px' }}
          />
          {formik.touched.acceptPassword && formik.errors.acceptPassword && (
            <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>
              {formik.errors.acceptPassword}
            </p>
          )}
        </div>
        <div style={{ textAlign: 'center' }}>
          <button
            style={{
              background: '#4caf50',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;