import React from 'react'
import { Field, ErrorMessage } from 'formik'
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
// import TextError from './TextError'

function SelectBox (props) {
  const { label, name, options, formik, ...rest } = props
  return (
    <div className='form-control' >
        
      <label htmlFor={name}>{label}</label>
      <Field style={{width:300, height:40}} as="select" id={name} name={name} {...rest}>
        {options.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          )
        })}
      </Field>
      <ErrorMessage  name={name} />
    </div>
  )
}

export default SelectBox