import { useState } from "react";
import "./App.css";

function App() {
const [formData, setFormData] = useState({
name: "",
email: "",
phone: "",
password: "",
});

const [errors, setErrors] = useState({});
const [success, setSuccess] = useState("");

// Handle input changes
function handleChange(e) {
const { name, value } = e.target;

```
setFormData({
  ...formData,
  [name]: value,
});

setErrors({
  ...errors,
  [name]: "",
});

setSuccess("");
```

}

// Validate form inputs
function validateForm() {
const newErrors = {};

```
if (formData.name.trim() === "") {
  newErrors.name = "Name is required";
} else if (!/^[a-zA-Z ]+$/.test(formData.name.trim())) {
  newErrors.name = "Name must contain only letters";
}

if (formData.email.trim() === "") {
  newErrors.email = "Email is required";
} else if (
  !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
) {
  newErrors.email = "Please enter a valid email address";
}

if (formData.phone.trim() === "") {
  newErrors.phone = "Phone number is required";
} else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
  newErrors.phone =
    "Enter a valid 10-digit Indian mobile number";
}

if (formData.password === "") {
  newErrors.password = "Password is required";
} else if (formData.password.length < 8) {
  newErrors.password =
    "Password must contain at least 8 characters";
} else if (!/[A-Z]/.test(formData.password)) {
  newErrors.password =
    "Password must contain at least one uppercase letter";
} else if (!/[a-z]/.test(formData.password)) {
  newErrors.password =
    "Password must contain at least one lowercase letter";
} else if (!/[0-9]/.test(formData.password)) {
  newErrors.password =
    "Password must contain at least one number";
}

return newErrors;
```

}

// Handle form submission
function handleSubmit(e) {
e.preventDefault();

```
const validationErrors = validateForm();
setErrors(validationErrors);

if (Object.keys(validationErrors).length === 0) {
  setSuccess("Registration successful!");

  setFormData({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
} else {
  setSuccess("");
}
```

}

return ( <div className="registration-container"> <form className="registration-form" onSubmit={handleSubmit}> <h1>User Registration</h1> <p className="subtitle">Create your account</p>


    <div className="form-group">
      <label htmlFor="name">Full Name</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Enter your full name"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && (
        <small className="error">{errors.name}</small>
      )}
    </div>

    <div className="form-group">
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="text"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && (
        <small className="error">{errors.email}</small>
      )}
    </div>

    <div className="form-group">
      <label htmlFor="phone">Phone Number</label>
      <input
        id="phone"
        type="tel"
        name="phone"
        placeholder="Enter 10-digit mobile number"
        value={formData.phone}
        onChange={handleChange}
      />
      {errors.phone && (
        <small className="error">{errors.phone}</small>
      )}
    </div>

    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        name="password"
        placeholder="Create a password"
        value={formData.password}
        onChange={handleChange}
      />
      {errors.password && (
        <small className="error">{errors.password}</small>
      )}
    </div>

    <button type="submit" className="register-button">
      Register
    </button>

    {success && (
      <p className="success-message">{success}</p>
    )}
  </form>
</div>

);
}

export default App;
