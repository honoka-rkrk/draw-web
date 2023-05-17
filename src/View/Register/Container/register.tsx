import React, { useState } from 'react';
import { PagePath } from '../../../Other/Commons/Page';
import { useLocation, useNavigate } from 'react-router-dom';
import CompRegister from '../Component/register';
const Register: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');

    const doRegister = async () => {
        try {
        //   await register(email, password, passwordConfirmation);
          // eslint-disable-next-line no-alert
          alert('登録完了しました。\nログインしてください。');
          navigate(PagePath.Login);
        } catch (e) {
          // eslint-disable-next-line no-alert
          alert('error');
          // eslint-disable-next-line no-console
          console.log(e);
        }
      };


    return <CompRegister doRegister = {doRegister} email={email} password={password} passwordConfirmation={passwordConfirmation} setEmail={setEmail}
    setPassword={setPassword} setPasswordConfirmation={setPasswordConfirmation}/>;
}

export default Register;