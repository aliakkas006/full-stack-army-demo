import React, { useState } from 'react';

const formFields = {
  name: {
    label: 'What is your name?',
    type: 'text',
    placeholder: 'Enter your name',
  },
  email: {
    label: 'What is your email?',
    type: 'email',
    placeholder: 'Enter your email',
  },
  phone: {
    label: 'What is your phone?',
    type: 'tel',
    placeholder: 'Enter your phone',
  },
  password: {
    label: 'What is your password?',
    type: 'password',
    placeholder: 'Enter your password',
  },
  confirmPassword: {
    label: 'Confirm your password',
    type: 'password',
    placeholder: 'confirm password',
  },
  color: {
    label: 'What is your favourite color?',
    type: 'color',
    placeholder: 'Enter your color',
  },
  birthDate:{
    label: 'What is your birth date?',
    type: 'date',
    placeholder: 'Enter your birth date'
  }
};

// transform the object as our need :
const transformObject = (obj) => {
  return Object.keys(obj).reduce((acc, curr) => {
    acc[curr] = {
      ...obj[curr],
      value: '',
    };
    return acc;
  }, {});
};

const mapObjectToArray = (obj) => {
  return Object.keys(obj).map((key) => ({ name: key, ...obj[key] }));
};

export default function DynamicForm() {
  const [formState, setFormState] = useState(transformObject(formFields));
  const formData = mapObjectToArray(formState);

  const handleSubmit = (e) => {
    e.preventDefault();

    const values = Object.keys(formState).reduce((acc, curr) => {
      acc[curr] = formState[curr].value;
      return acc;
    }, {});
    console.log(values);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: {
        ...formState[e.target.name],
        value: e.target.value,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {formData.map((item, index) => (
        <div key={index}>
          <label>{item.label}</label>
          <input
            type={item.type}
            name={item.name}
            placeholder={item.placeholder}
            value={item.value}
            onChange={handleChange}
          />
        </div>
      ))}
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
