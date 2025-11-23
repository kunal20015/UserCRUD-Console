import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getUserById, updateUser } from '../Service/Api';

const Update = () => {

  const [user, setUser] = useState({
    name:"",
    email:"",
    password:"",
  })

  const {id} = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  
  useEffect(() => {
    fetchUser(id)
  }, [id]);

  const fetchUser= async (id)=>{
    try{
      const res = await getUserById(id);
      setUser(res.data);
    } catch (error) {
      console.log("Error fetching user: ", error);
    }
  };

  const handleSubmit= async (e)=>{
    e.preventDefault();
    await updateUser(id, user);
    console.log('User Updated');
    navigate('/');
  }

  // Inline styles (kept inside component)
  const pageStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg,#f8fafc 0%,#eef2ff 100%)',
    padding: '40px 20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#0b1220'
  };

  const cardStyle = {
    width: '80%',               // requested: form width 80%
    maxWidth: '900px',
    background: '#ffffff',
    borderRadius: '12px',
    padding: '28px',
    boxSizing: 'border-box',
    boxShadow: '0 10px 30px rgba(2,6,23,0.06)',
    transition: 'transform 160ms ease, box-shadow 160ms ease'
  };

  const headingStyle = {
    textAlign: 'center',
    margin: 0,
    marginBottom: '12px',
    fontSize: '22px',
    fontWeight: 600,
    color: '#071033'
  };

  const formStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    alignItems: 'center'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 12px',
    borderRadius: '8px',
    border: '1px solid rgba(11,17,32,0.08)',
    outline: 'none',
    fontSize: '14px',
    boxSizing: 'border-box',
    transition: 'box-shadow 120ms ease, transform 120ms ease',
  };

  const labelStyle = {
    alignSelf: 'flex-start',
    fontSize: '15px',
    color: '#0f172a',
    fontWeight: 600,
  };

  const actionsStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '10px',
    marginTop: '6px'
  };

  const primaryBtn = {
    padding: '10px 16px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    background: 'linear-gradient(90deg,#4f46e5,#06b6d4)',
    color: '#fff',
    fontWeight: 600,
    boxShadow: '0 8px 18px rgba(79,70,229,0.14)',
    transition: 'transform 120ms ease, box-shadow 120ms ease'
  };

  const cancelBtn = {
    padding: '10px 14px',
    borderRadius: '8px',
    border: '1px solid rgba(11,17,32,0.08)',
    background: '#fff',
    cursor: 'pointer',
    fontWeight: 600,
    transition: 'transform 120ms ease, box-shadow 120ms ease'
  };

  const fieldContainer = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  };

  return (
    <>

      <div style={pageStyle}>
        <div style={cardStyle}>
          <h2 style={headingStyle}>Update User Here</h2>

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
                onFocus={(e)=> e.currentTarget.style.boxShadow = '0 6px 18px rgba(79,70,229,0.08)'}
                onBlur={(e)=> e.currentTarget.style.boxShadow = 'none'}
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
                onFocus={(e)=> e.currentTarget.style.boxShadow = '0 6px 18px rgba(6,182,212,0.08)'}
                onBlur={(e)=> e.currentTarget.style.boxShadow = 'none'}
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
                onFocus={(e)=> e.currentTarget.style.boxShadow = '0 6px 18px rgba(15,23,42,0.06)'}
                onBlur={(e)=> e.currentTarget.style.boxShadow = 'none'}
              />
            </div>

            <div style={actionsStyle}>
              <button type="submit" style={primaryBtn}
                onMouseDown={(e) => e.currentTarget.style.transform = 'translateY(1px) scale(0.997)'}
                onMouseUp={(e) => e.currentTarget.style.transform = 'none'}
              >
                Submit
              </button>

              <button type='button' onClick={() => navigate('/')} style={cancelBtn}
                onMouseDown={(e) => e.currentTarget.style.transform = 'translateY(1px) scale(0.997)'}
                onMouseUp={(e) => e.currentTarget.style.transform = 'none'}
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

export default Update
