import React from 'react'

function NewUser() {
    return (
        <div className='box flex items-center justify-center'>
            <div className="form-container">
                <h1>New User</h1>
                <form action="">
                    <div className=''>
                        <input type="text" placeholder='First name' id="name" name="Fname" required />
                        <input type="text" placeholder='Last name' id="name" name="Fname" required />
                    </div>
                    <div className=' flex space-x-3'>
                        <input type="date" id="dob" name="dob" />
                        <input type="text" placeholder='Phone number' id="mobileNumber" name="mobileNumber" />
                    </div>
                    <div>
                        <input type="email" placeholder='<your_emial_id>@gmail.com' id="email" name="email" required />
                    </div>
                    <div>
                        <input type="password" placeholder='Enter your password' id="password" name="password" required />
                    </div>
                    <div>
                        <input type="password" placeholder='Confirm your password' id="confirmPassword" name="confirmPassword" required />
                    </div>
                    <div>
                        <input type="checkbox" id="agreementChecked" name="agreementChecked" />
                        <label htmlFor="agreementChecked">I agree to the terms and conditions</label>
                    </div>
                    <div>
                        <button type="button">Create Account</button>
                    </div>
                </form>
                <div className="flex items-center justify-center">
                    <div className="w-2/3 h-px bg-black"></div>
                    <div className="mx-4 text-black">OR</div>
                    <div className="w-2/3 h-px bg-black"></div>
                </div>
                <div className="new-user-social-media">
                    <button type="button">Google</button>
                    <button type="button">Google</button>
                    <button type="button">Google</button>
                </div>
            </div>
        </div>
    )
}

export default NewUser
