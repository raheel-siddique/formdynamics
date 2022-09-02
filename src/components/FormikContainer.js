import React from "react";
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from "./FormikControl";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const FormikContainer = () => {

    const dropdownOptions = [
        { key: 'Select an option', value: '' },
        { key: 'Option 1', value: 'option1' },
        { key: 'Option 2', value: 'option2' },
        { key: 'Option 3', value: 'option 3' }
      ]
      const rcOptions = [
        { key: 'Option 1', value: 'option1' },
        { key: 'Option 2', value: 'option2' },
        { key: 'Option 3', value: 'option 3' }
      ]

    const initialValues = {
        email: '',
        firstname: "",
        lastname: "",
        contact: "",
        description: '',
        selectOption: '',
        radioOption: ''

    }
    const validationSchema = Yup.object({
        email: Yup.string().required('Required'),
        firstname: Yup.string().required('Required'),
        lastname: Yup.string().required('Required'),
        contact: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        selectOption: Yup.string().required('Required'),
        radioOption: Yup.string().required('Required')



    })
    const onSubmit = values => {
        console.log('Form data', values)
    }

    return (
        <>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {
                    formik => (
                        <Form>

                            <FormikControl
                                control='input'
                                type='email'
                                label='Email'
                                name='email'
                                formik={formik}
                            />

                            <br />
                            <FormikControl
                                control='input'
                                type='text'
                                label='firstName'
                                name='firstname'
                                formik={formik}
                            />



                            {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}

                            < FormikControl
                                control='input'
                                type='text'
                                label='lastName'
                                name='lastname'
                                formik={formik}
                            />

                            < FormikControl
                                control='input'
                                type='number'
                                label='contact'
                                name='contact'
                                formik={formik}
                            />

<FormikControl
       
            control='textarea'
            label='Description'
            name='description'
            formik={formik}
          />

<FormikControl
            control='select'
            label='Select a topic'
            name='selectOption'
            options={dropdownOptions}
            formik={formik}
          />


<FormikControl
            control='radio'
            label='Radio topic'
            name='radioOption'
            options={rcOptions}
            formik={formik}
          />

                            <br />
                            <button type="submit">Login</button>
                        </Form>
                    )
                }
            </Formik>
        </>
    )
}
export default FormikContainer