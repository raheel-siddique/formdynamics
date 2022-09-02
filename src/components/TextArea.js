import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextareaAutosize from '@mui/material/TextareaAutosize';

function Textarea (props) {
  const { label, name, formik, ...rest } = props
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field style={{width:400, height:100}}  as={TextareaAutosize} id={name} name={name} {...rest} />
      <ErrorMessage name={name} />
    </div>
  )
}

export default Textarea