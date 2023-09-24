import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1 className="text-3xl text-center font-bold text-red-500">Opps!! no no no!!</h1>
           
              <NavLink to="/">
                <button className="btn btn-success">Go back to home</button>
              </NavLink>
            
            
        </div>
    );
};

export default ErrorPage;