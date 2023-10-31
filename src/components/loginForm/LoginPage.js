import React from 'react'
import Footer from '../footer'
import LoginForm from './LoginForm'

function LoginPage() {
    return (
        <div className='w-screen h-[calc(100%-105px)] bg-yellow-200 overflow-y-scroll'>

            <div className='h-[calc(100%)] lg:h-[calc(100%-5px)] flex items-center justify-center lg:space-x-10'>
                <img src="https://media.mktg.workday.com/is/image/workday/illustration-people-login?fmt=png-alpha&wid=1000" alt="" className='h-[200px] 2xl:h-[500px] hidden xl:inline' />
                <LoginForm />
            </div>

            <Footer />
        </div>
    )
}

export default LoginPage