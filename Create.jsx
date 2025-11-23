import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createUser } from '../Service/Api';

const Create = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  const handleSubmit = async(e)=>{
     e.preventDefault();

      try{
        await createUser(user);
        console.log("User Created Successfully");

        setUser({name: "", email: "", password: ""})
        navigate("/");
      } catch(error){
        console.log("Error:", error);
      }
  };

  // Inline Style Section
  const pageStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #f0f7ff 0%, #e8ecff 100%)",
    padding: "40px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#0b1220"
  };

  const cardStyle = {
    width: "80%",            // Requested 80%
    maxWidth: "900px",
    background: "#ffffff",
    borderRadius: "12px",
    padding: "28px",
    boxShadow: "0 10px 28px rgba(15, 23, 42, 0.07)",
    transition: "transform 160ms ease, box-shadow 160ms ease",
    boxSizing: "border-box"
  };

  const headingStyle = {
    textAlign: "center",
    margin: 0,
    marginBottom: "14px",
    fontSize: "24px",
    fontWeight: 600,
    color: "#04103a"
  };

  const formStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    alignItems: "center"
  };

  const labelStyle = {
    alignSelf: "flex-start",
    fontSize: "15px",
    fontWeight: 600,
    color: "#0f172a"
  };

  const inputStyle = {
    width: "100%",
    padding: "10px 12px",
    borderRadius: "8px",
    border: "1px solid rgba(11,17,32,0.15)",
    fontSize: "14px",
    outline: "none",
    transition: "box-shadow 140ms ease",
    boxSizing: "border-box"
  };

  const fieldContainer = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "6px"
  };

  const actionsStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    gap: "14px",
    marginTop: "10px"
  };

  const submitBtn = {
    padding: "10px 16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    background: "linear-gradient(90deg, #4f46e5, #06b6d4)",
    color: "#fff",
    fontWeight: "bold",
    boxShadow: "0 8px 20px rgba(79,70,229,0.18)",
    transition: "transform 120ms ease"
  };

  const cancelBtn = {
    padding: "10px 14px",
    border: "1px solid rgba(11,17,32,0.1)",
    borderRadius: "8px",
    cursor: "pointer",
    background: "#fff",
    fontWeight: "bold",
    color: "#0b1220",
    transition: "transform 120ms ease"
  };

  return (
    <>
      <div style={pageStyle}>
        <div style={cardStyle}>
          
          <h2 style={headingStyle}>Create User Here</h2>

          <form onSubmit={handleSubmit} style={formStyle}>

            <div style={fieldContainer}>
              <label style={labelStyle}>Name:</label>
              <input 
                type="text" 
                name="name" 
                value={user.name} 
                placeholder="Enter Name Here" 
                onChange={handleChange} 
                required
                style={inputStyle}
              />
            </div>

            <div style={fieldContainer}>
              <label style={labelStyle}>Email:</label>
              <input 
                type="email" 
                name="email" 
                value={user.email} 
                placeholder="Enter Email Here" 
                onChange={handleChange} 
                required
                style={inputStyle}
              />
            </div>

            <div style={fieldContainer}>
              <label style={labelStyle}>Password:</label>
              <input 
                type="password" 
                name="password" 
                value={user.password} 
                placeholder="Enter Strong Password Here" 
                onChange={handleChange} 
                required
                style={inputStyle}
              />
            </div>

            <div style={actionsStyle}>
              <button 
                type='submit' 
                style={submitBtn}
                onMouseDown={(e)=> e.currentTarget.style.transform='translateY(1px) scale(0.98)'}
                onMouseUp={(e)=> e.currentTarget.style.transform='none'}
              >
                Submit
              </button>

              <button 
                type="button" 
                onClick={()=>navigate('/')} 
                style={cancelBtn}
                onMouseDown={(e)=> e.currentTarget.style.transform='translateY(1px) scale(0.98)'}
                onMouseUp={(e)=> e.currentTarget.style.transform='none'}
              >
                Cancel
              </button>
            </div>

          </form>

        </div>
      </div>
    </>
  )
}

export default Create
