import { Field, ErrorMessage } from 'formik'
import TextField from '@mui/material/TextField';

function Input (props) {
  const { label, name, formik, ...rest } = props
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field as={TextField}  id={name} name={name} {...rest}  />
      <ErrorMessage name={name} />
    </div>
  )
}
export default Input