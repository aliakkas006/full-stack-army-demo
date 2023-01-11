import { Controller, useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const App = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      age: 0,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <h2>React Hook Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              id="standard-basic"
              label="Name: "
              variant="standard"
              {...field}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              id="standard-basic"
              label="Email: "
              variant="standard"
              {...field}
            />
          )}
        />

        <Controller
          name="age"
          control={control}
          render={({ field }) => (
            <TextField
              id="standard-basic"
              label="Age: "
              variant="standard"
              {...field}
            />
          )}
        />

        <Button type="submit" variant="outlined">Submit</Button>
      </form>
    </div>
  );
};

export default App;
