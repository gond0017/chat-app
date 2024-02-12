import  { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {loading, login} = useLogin()
    const handleLoginSubmit = async (e) => {
        e.preventDefault()
        await login(username,password)
    }
  return (
    <div className='flex justify-center items-center'>
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>Login
                <span className='text-green-500'> ChatApp</span></h1>
                <form onSubmit={handleLoginSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input
                        type='password'
                        placeholder='Enter Password'
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        className='w-full input input-bordered h-10'
                        />
                    </div>
                    <div className='text-left'>
                        <Link to="/signup" className='text-sm text-left  hover:underline hover:text-blue-600 mt-2 inline-block'>
                        {`Don't have an account?`}
                        </Link>
                    </div>

                    <div>
                        <button className='btn btn-block btn-sm mt-2'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login