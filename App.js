import './App.css';
// import Counter from './Hooks/counter';
// import Form from './Hooks/form';
// import LoginForm from './Hooks/login';
import UserTable from './Table/userTable';
import SimpleForm from './Hooks/simpleForm';
import {ToastContainer} from 'react-toastify';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Form /> */}
      {/* <LoginForm /> */}
      <SimpleForm />
      <UserTable />
      <ToastContainer />
    </div>
  );
}

export default App;
