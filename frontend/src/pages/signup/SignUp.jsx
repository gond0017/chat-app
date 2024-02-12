import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignUp from "../../hooks/useSignUp";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName:'',
		username:'',
		password:'',
		confirmPassword:'',
		gender:'',
	})

	const {loading, signUp} = useSignUp()

	const handleCheckboxChange = (gender) => {
		setInputs({...inputs, gender})
	}

	const handleSignUpSubmit = async (e) => {
		e.preventDefault()
		console.log(inputs)
		await signUp(inputs)
	}

	return (
		<div className='flex justify-center items-center'>
			<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
				<div className='w-full p-6 rounded-lg shadow-md bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60'>
			<h1 className='text-3xl font-semibold text-center text-gray-300'>Sign Up
			<span className='text-green-500'> ChatApp</span>
			</h1>
					<form onSubmit={handleSignUpSubmit}>
						<div>
							<label className='label p-2'>
								<span className='text-base label-text'>Full Name</span>
							</label>
							<input type='text' placeholder='John Doe' className='w-full input input-bordered  h-10' value={inputs.fullName} onChange={(e) => setInputs({...inputs, fullName: e.target.value})} />
						</div>

						<div>
							<label className='label p-2 '>
								<span className='text-base label-text'>Username</span>
							</label>
							<input type='text' placeholder='johndoe' className='w-full input input-bordered h-10' value={inputs.username} onChange={(e) => setInputs({...inputs, username: e.target.value})} />
						</div>

						<div>
							<label className='label'>
								<span className='text-base label-text'>Password</span>
							</label>
							<input
								type='password'
								placeholder='Enter Password'
								value={inputs.password} onChange={(e) => setInputs({...inputs, password: e.target.value})}
								className='w-full input input-bordered h-10'
							/>
						</div>

						<div>
							<label className='label'>
								<span className='text-base label-text'>Confirm Password</span>
							</label>
							<input
								type='password'
								placeholder='Confirm Password'
								value={inputs.confirmPassword} onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
								className='w-full input input-bordered h-10'
							/>
						</div>

						<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

						<div className="text-left">
							<Link to='/login' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
							Already have an account?
							</Link>
						</div>

						<div>
							<button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
							{loading ? <span className="loading loading-spinner"></span> : "Sign Up" }
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default SignUp;