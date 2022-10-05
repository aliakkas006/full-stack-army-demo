import useForm from '../hooks/useForm';
import InputGroup from '../components/shared/forms/InputGroup';
import Button from '../components/UI/buttons/Button';
import Task from '../components/task/Task';

const init = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const validate = (values) => {
  const errors = {};

  if (!values.firstName) errors.firstName = 'First name is required';
  if (!values.lastName) errors.lastName = 'Last name is required';
  if (!values.email) errors.email = 'Email is required';
  if (!values.password) errors.password = 'Password is required';

  return errors;
};

const App = () => {
  const {
    formState: state,
    handleChange,
    handleFocus,
    handleBlur,
    handleSubmit,
    clear,
  } = useForm({ init, validate });

  const cb = ({ hasError, values, errors }) => {
    if (hasError) alert('[ERROR]' + JSON.stringify(errors));
    else alert('[SUCCESS]' + JSON.stringify(values));
  };

  return (
    <div className="root">
      <h2>My Custom Hook Form</h2>
      <form onSubmit={(e) => handleSubmit(e, cb)}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <InputGroup
            value={state.firstName.value}
            label={'First Name:'}
            name={'firstName'}
            placeholder={'Enter your first name'}
            error={state.firstName.error}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          <InputGroup
            value={state.lastName.value}
            label={'Last Name:'}
            name={'lastName'}
            placeholder={'Enter your last name'}
            error={state.lastName.error}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          <InputGroup
            value={state.email.value}
            label={'Email:'}
            name={'email'}
            placeholder={'Enter your email'}
            error={state.email.error}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          <InputGroup
            value={state.password.value}
            label={'Password:'}
            name={'password'}
            placeholder={'Enter your password'}
            error={state.password.error}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          <Button type="reset" onClick={clear}>
            Clear
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
      <hr />

      <Task />
    </div>
  );
};

export default App;
