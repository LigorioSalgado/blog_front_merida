import { useState } from 'react';

const useForm = (callback) => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback(inputs);
  };
  const handleInputChange = (event) => {
    event.persist();
    setInputs(fields => ({ ...fields, [event.target.name]: event.target.value }));
  };
  
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};

export default useForm;
