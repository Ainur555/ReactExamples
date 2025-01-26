import { useSelector } from "react-redux";

const HomePage = () => {
    const login = useSelector((state) => state.usersStore.login);
    return (
      <div className="homepage">
        {(login) && <h1>Hi, {login.name}!</h1>}
        <h1>Welcome home!</h1>
      </div>
    );
  };
  
  export default HomePage;