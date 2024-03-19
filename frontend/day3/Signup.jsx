import { useNavigate } from 'react-router-dom'
import '../Pages/Signup.css'

const Signup = () => {
  const navigate = useNavigate()
  return (
    <>
    <div>
      <div className='s'>
        <div className='s1'>Create your account</div>
        <div className='s2'>
          <div>
          <input className='s3' type='name' placeholder='Name'/>
            <input className='s3' type='Phone number' placeholder='Phone'/>
            <input className='s3' type='Email' placeholder='Email'/>
            <input className='s3' type='password' placeholder='Password'/>
          </div>
        </div>
        <div className='s4'>Full Name</div>
        <div className='s5'>Mobile Number</div>
        <div className='s6'>Email</div>
        <button className='s7'>Register</button>
        <div className='s8'>Password</div>
        <div className='s9'>Find a Job and Grow Your Career...</div>
        <div className='s10'>Already registered?</div>
        <div className='s11' onClick={()=>navigate("/")}>Login</div>
      </div>
      
    </div>
    </>
  )
}

export default Signup
