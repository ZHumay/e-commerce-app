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

  acceptPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match ')
        .required('Password confirmation is important'),
});

function Register() {

    
    let navigate=useNavigate()

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      surname:'',
      gender: 'female',
      password: '',
      acceptPassword: '',
    },
    validationSchema: addProductValidationSchema,
    onSubmit: (values) => {
    navigate("/login")
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
              //checked özelliği, bir <input> elementinin durumunu belirlemek için kullanılır.
              // Bu özellik, özellikle type="radio" veya type="checkbox" input tipleri için kullanılır.
              //checked özelliğine true değeri atanırsa, ilgili <input> öğesi seçili veya işaretlenmiş olarak görüntülenir.
              //checked özelliğine false değeri atanırsa veya özelliğin hiçbir değeri belirtilmezse, 
              //ilgili <input> öğesi seçili veya işaretlenmemiş olarak görüntülenir.
            />
           Male
          </label>
        </div>
        {formik.touched.gender && formik.errors.gender && (
          <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{formik.errors.gender}</p>
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
      }} type="submit">Registration</button>
  </div>
</form> 

  </div>

   
);
}

export default Register;