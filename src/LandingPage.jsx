import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LandingPage = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event registration:', formData);
    setSubmitted(true);
  };

  const goToQuizPage = () => {
    navigate('/quiz');
  };

  return (
    <div>
      <h1>You have landed</h1>
      <p>Welcome Potential Hackers</p>

      {/* Event Registration Form */}
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>

          <div>
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>

          <div>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>

          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>

          <button type="submit">Register for Event</button>
        </form>
      ) : (
        <p>Thank you for registering! Event details will be sent to {formData.email}.</p>
      )}

      {/* Button to go to the Quiz page */}
      <button onClick={goToQuizPage}>Go to Quiz Page</button>
    </div>
  );
};

export default LandingPage;
