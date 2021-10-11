import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Context/useAuth';

const Register = () => {
    const {signInUsingGoogle} = useAuth()
    return (
        <div>
            <h1>Register Section</h1>
            <div>
                <form>
                    <div>
                        <label>Name:</label> <input type="text" name="" id="" />
                    </div>
                    <div>
                        <label>Email:</label> <input type="email" name="" id="" />
                    </div>
                    <div>
                        <label>PassWord:</label> <input type="password" name="" id="" />
                    </div>
                    <div>
                        <input type="password" name="" id="" placeholder="Confirm Password" />
                    </div>
                    <div>
                        <input type="submit" value="Next" />
                    </div>
                </form>

                <div>
                    <p>Already Register <Link to="/login"><button>Login</button></Link> </p>
                </div>
                <div>
                    <button onClick={signInUsingGoogle}>Google SignIn</button>
                </div>
            </div>
        </div>
    );
};

export default Register;