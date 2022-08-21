import { useState } from 'react';
import DynamicForm from './components/DynamicForm';

function App() {
  const [formStates, setFormStates] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  

  const handleChange = (e) => {
    setFormStates({
      ...formStates,
      [e.target.name]: [e.target.value],
    });
  };

  // console.log(formStates);

  return (
    <div>
      <h1>Form application</h1>

      <DynamicForm />

     {/*  <form onSubmit={handleSubmit}>
        <div>
          <label>What's your name?</label>
          <input
            type="text"
            name="name"
            value={formStates.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>What's your email?</label>
          <input
            type="email"
            name="email"
            value={formStates.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>What's your phone?</label>
          <input
            type="tel"
            name="phone"
            value={formStates.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Set your password</label>
          <input
            type="password"
            name="password"
            value={formStates.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form> */}
    </div>
  );
}

export default App;

/**
 * When should we decide creating a new component?
 * *** when we need to write duplicate code
 * *** which data are different
 */

/**
 * when you see any duplicate structure just make it a component
 */
