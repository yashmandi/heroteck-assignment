import React from 'react'
import logo from './logo.png'

function Form() {
    return (
        <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-50'>
            <h1 className="text-4xl font-bold items-center justify-center">Welcome to Heroteck!</h1>
            <p className='font-medium text-lg text-gray-500 mt-2 items-center justify-center'>Please enter your details below</p>
            <div className="mt-8">
                <div >
                    <label className='text-lg font-medium'>Name</label>
                    <input
                        type="text"
                        className='w-full border border-gray-300 p-3 rounded-xl bg-transparent mt-1'
                        placeholder='Enter your name'
                    />
                </div>
                <div className='mt-1'>
                    <label className='text-lg font-medium'>Email</label>
                    <input
                        type="email"
                        className='w-full border border-gray-300 p-3 rounded-xl bg-transparent mt-1'
                        placeholder='Enter your email'
                    />
                </div>
                <div className='mt-1'>
                    <label className='text-lg font-medium'>Phone Number</label>
                    <input
                        type="text"
                        className='w-full border border-gray-300 p-3 rounded-xl bg-transparent mt-1'
                        placeholder='Enter your Phone Number'
                    />
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out bg-violet-500 text-white p-3 rounded-xl font-bold py-3'>Sign in</button>
                    <button className='flex border-2 p-3 rounded-xl font-bold py-3 border-gray-200 justify-center items-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out'>
                        <img src={logo} className='w-6 h-6' />
                        Sign in with Google
                    </button>
                </div>
                <div className='mt-8 flex justify-center items-center'>
                    <p className='text-base font-medium'>Don't have an account?</p>
                    <button className='active:scale-[.98]    text-violet-500 font-medium ml-2'>Sign up</button>
                </div>
            </div>
        </div >
    )
}

export default Form
