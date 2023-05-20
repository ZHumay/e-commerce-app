import React from 'react';
import { useFormik,backgroundColor,transform} from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Translate } from '@mui/icons-material';


const addProductValidationSchema = Yup.object({
  name: Yup.string().required(' Name is important'),

  email: Yup.string().required('Email is important')
    .email('Düzgün bir e-mail ünvanı daxil edin')
,

  password: Yup.string()
    .min(8, 'min 8 symbol')
    .required('Password is important'),


});

function LoginPage() {

    
    let navigate=useNavigate()

  const formik = useFormik({
    initialValues: {
      name: '',
      surname:'',
      email: '',
      password: '',
    },
    validationSchema: addProductValidationSchema,
    onSubmit: (values) => {
    navigate("/")
    },
  });

  return (
    <div style={{ background: 'linear-gradient(#e66465, #9198e5)',height:"900px"}}>
    <form onSubmit={formik.handleSubmit} style={{ maxWidth: '400px', margin: ' auto ',transform: 'translateY(70px)' }}>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
        <input
        style={{width:"300px"}}
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
        <label htmlFor="surname" style={{ display: 'block', marginBottom: '5px' }}>Surname:</label>
        <input
        style={{width:"300px"}}
          type="text"
          id="surname"
          surname="surname"
          onChange={formik.handleChange}
          value={formik.values.surname}
        />
        {formik.touched.surname && formik.errors.surname && (
          
          <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{formik.errors.surname}</p>
        )}
        
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>E-mail:</label>
        <input
          type="email"
          style={{width:"300px"}}

          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{formik.errors.email}</p>
        )}
      </div>


      <div>
        <label style={{ display: 'block', marginBottom: '5px' }} htmlFor="password">Password:</label>
        <input
          type="password"
          style={{width:"300px"}}

          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password &&
        (
          <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{formik.errors.password}</p>
          )}
          </div>
          <div>
    <label style={{ display: 'block', marginBottom: '5px' }} htmlFor="acceptPassword"> Confirm Password:</label>
    <input
      type="password"
      id="acceptPassword"
      style={{width:"300px"}}

      name="acceptPassword"
      onChange={formik.handleChange}
      value={formik.values.acceptPassword}
    />
    {formik.touched.acceptPassword && formik.errors.acceptPassword && (
      <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{formik.errors.acceptPassword}</p>
    )}
  </div>

  <div>
    <button style={{
        background: '#4caf50',
        color: 'white',
        border: 'none',
        marginTop:"20px",
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
      }} type="submit">Login</button>
  </div>
</form> 

  </div>

   
);
}

export default LoginPage;