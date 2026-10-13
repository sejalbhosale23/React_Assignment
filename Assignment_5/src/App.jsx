
import { useState } from "react";
import "./App.css";

function App() {
  // Stores the values currently entered in the form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  // Stores the submitted data for the preview
  const [submittedData, setSubmittedData] = useState(null);

  // Updates form values when the user types
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  // Runs when the Submit button is clicked
  function handleSubmit(e) {
    e.preventDefault();

    setSubmittedData({ ...formData });
  }

  return (
    <div className="app">
      <h1>Student Registration Form</h1>
      <p className="subtitle">Enter your details below</p>

      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="course">Select Course</label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">Choose a course</option>
              <option value="React JS">React JS</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
            </select>
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>

        {submittedData && (
          <div className="preview">
            <h2>Submitted Details</h2>

            <p>
              <strong>Name:</strong> {submittedData.name}
            </p>
            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p>
              <strong>Phone:</strong> {submittedData.phone}
            </p>
            <p>
              <strong>Course:</strong> {submittedData.course}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;