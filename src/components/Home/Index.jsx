
import { Fragment, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { useNavigate, Link } from 'react-router-dom'


const HomePage = () => {

    return (
        <Fragment>
            <div className="container py-4 mx-auto">
            <div className="grid h-full max-h-full grid-cols-1">
                <div className="text-2xl "><h1>Welcome to Vite & React With Tailwindcss</h1></div>
            </div>
            </div>
        </Fragment>

    );
}

export default HomePage;