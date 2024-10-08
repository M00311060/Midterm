
import { useNavigate } from 'react-router-dom';
const WelcomePage = () => {

  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/'); // Navigate to the home page
  };
 
    return (
      <div>
        <h1>Welcome to HackerCon</h1>
        <p>Welcome SuperHacker You Are Inz</p>
        <button onClick={goToHomePage}>HOME</button>
      </div>
    );
  };
  
  export default WelcomePage;
  
  