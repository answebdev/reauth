import { useState, useEffect } from 'react';
import './App.css';

// Source: https://www.youtube.com/watch?v=cFgoSrOui2M

const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  return (
    <div className='App'>
      <h1>Reauth</h1>
    </div>
  );
};

export default App;
