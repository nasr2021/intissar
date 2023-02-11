import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidate } from '../helper/validate';
import styles from '../../styles/Username.module.css';

export default function Recovery() {

  const navigate = useNavigate()

  const formik = useFormik({
    initialValues : {
      password : 'admin123@'
    },
    validate : passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      console.log(values);
   }
  })

  return (
    <div className="container mx-auto  d-flex justify-center mt-6">

      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass} >

          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Recovery </h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Enter OTP to recover password.
            </span>
          </div>

          <form className='py-20' onSubmit={formik.handleSubmit}>
            <div className='textbox flex flex-col items-center gap-6'> 
              <div className="input text-center">
                    <span className='py-4 text-sm text-left text-gray-500'>
                      Enter 6 digit OTP sent to your email address.
                    </span>
                  <input {...formik.getFieldProps('password')} className={styles.textbox} type="text" placeholder='Password' />
              </div>

              <button className={styles.btn} type='submit'>Recover</button>
              </div>
            <div className='text-center py-4'>
            <span className='text-gray-500'>Can't get OTP? <button className='text-red-500'>Resend</button></span>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}