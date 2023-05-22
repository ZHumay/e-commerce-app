import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const loginValidationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().required('Email is required').email('Enter a valid email address'),
  password: Yup.string().required('Password is required'),
});

function LoginPage() {
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      const storedUsers = JSON.parse(localStorage.getItem('registeredUsers'));
      const loggedInUsers = JSON.parse(localStorage.getItem('loggedInUsers')) || [];

      const existingUser = storedUsers.find(
        (user) => user.name === values.name && user.email === values.email && user.password === values.password
      );

      if (existingUser) {
        window.alert('You have successfully logged in!');
        loggedInUsers.push(existingUser);
        localStorage.setItem('loggedInUsers', JSON.stringify(loggedInUsers));

        navigate('/');
      } else {
        window.alert('Invalid name, email, or password');
      }
    },
  });

  return (
    <div
      style={{
        background: 'linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)',
        height: '900px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form
        onSubmit={formik.handleSubmit}
        style={{
          maxWidth: '400px',
          margin: ' auto',
          background: 'white',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>
            Name:
          </label>
          <input
            style={{ width: '300px', padding: '5px' }}
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{formik.errors.name}</p>
          )}
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
            E-mail:
          </label>
          <input
            style={{ width: '300px', padding: '5px' }}
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{formik.errors.email}</p>
          )}
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>
            Password:
          </label>
          <input
            style={{ width: '300px', padding: '5px' }}
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{formik.errors.password}</p>
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
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
