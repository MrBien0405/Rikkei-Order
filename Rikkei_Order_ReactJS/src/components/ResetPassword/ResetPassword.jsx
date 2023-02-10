import "./ResetPassword.css";
import { Link } from "react-router-dom";
function ResetPassword() {
  return (
    <>
      <div className='contarner'>
        <div className='tudoliste'>
          <img
            className='imageanh'
            src='https://upload.wikimedia.org/wikipedia/commons/b/ba/Logo-Rikkei.png'
            alt=''
          />
          <p className='reset'>Reset your password</p>
          <div className='connainer'>
            <div className='milo1'>
              <input type='text' placeholder='Please enter your email' />
            </div>
            <div className='milo2'>
              <button>Reset Password</button>
            </div>
          </div>
          <div className='link'>
            <Link className='already' to='/login'>
              Already have an account? Login here
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
