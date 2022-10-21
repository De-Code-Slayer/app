import Header from "../components/Header"
import Login from "../components/Login"
import '../App.css';

function LoginPage() {
  return (
    <div className="App">
      <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
                />
                <Login/>
    </div>

  );
}

export default LoginPage;
