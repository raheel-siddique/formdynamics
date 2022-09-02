import React from "react";
import Input from "./Input";
import RadioButtons from "./Radio";
import SelectBox from "./Select";
import Select from "./Select";
import Textarea from "./TextArea";



const FormikControl = (props) => {
    
    const { control, ...rest } = props
    switch (control) {
      case 'input':
        return <Input {...rest} />
      case 'textarea': return <Textarea {...rest}  />
      case 'select': return <SelectBox {...rest} />
      case 'radio':return <RadioButtons {...rest} />
    }
}
export default FormikControl