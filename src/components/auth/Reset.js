import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../../assets/avatar.png';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { resetPasswordValidation } from '../helper/validate';
import styles from '../../styles/Username.module.css';
import {passwordVerify} from '../helper/validate';

export default function Reset() {

  const navigate = useNavigate()
  
  
  const formik = useFormik({
    initialValues : {
      password : 'admin123@',
      confirm_pwd : 'admin123@'
    },
    validate : resetPasswordValidation,
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
        <div className={styles.glass} style={{ width: "40%", height:"90%"}}>

          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Reset</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
             Enter new password
            </span>
          </div>

          <form className='py-20' onSubmit={formik.handleSubmit}>
              

              <div className="textbox flex flex-col items-center gap-6">
                  <input {...formik.getFieldProps('password')} className={styles.textbox} type="text" placeholder='New Password' />
                  <input {...formik.getFieldProps('Confirm_pwd')} className={styles.textbox} type="text" placeholder=' Repeat Password' />
                  <button className={styles.btn} type='submit'>Reset</button>
              </div>
              

              

          </form>

        </div>
      </div>
    </div>
  )
}