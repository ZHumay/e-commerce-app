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

function LoginPage() {
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      surname: '',
      password: '',
      acceptPassword: '',
    },
    validationSchema: addProductValidationSchema,
    onSubmit: (values) => {
      window.alert('You have successfully registered!');
      navigate('/login');
      localStorage.setItem('user', JSON.stringify(values));
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
          <label htmlFor="surname" style={{ display: 'block', marginBottom: '5px' }}>
            Surname:
          </label>
          <input
            style={{ width: '300px', padding: '5px' }}
            type="text"
            id="surname"
            name="surname"
            onChange={formik.handleChange}
            value={formik.values.surname}
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
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="acceptPassword" style={{ display: 'block', marginBottom: '5px' }}>
            Confirm Password:
          </label>
          <input
            style={{ width: '300px', padding: '5px' }}
            type="password"
            id="acceptPassword"
            name="acceptPassword"
            onChange={formik.handleChange}
            value={formik.values.acceptPassword}
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
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
