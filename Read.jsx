import { useState, useEffect } from "react";
import { deleteUser }  from '../Service/Api';
import { useNavigate } from "react-router-dom";
import readUser from "../Service/Api";

const Read = () => {
    const[user, setUser] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        fetchUser();
    }, [])

    const fetchUser = () => {
         readUser()
        .then(result=>setUser(result.data))
    }

    const handleDelete = async (id) =>{
      await deleteUser(id);
      fetchUser();
      navigate('/');
    }

    // Inline style objects (kept inside component)
    const pageStyle = {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e9eff8 100%)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#222',
    };

    const cardStyle = {
      width: '80%',              // requested: form / card width 80%
      maxWidth: '1100px',
      background: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 8px 30px rgba(18, 38, 63, 0.08)',
      padding: '28px',
      boxSizing: 'border-box',
      transition: 'transform 160ms ease, box-shadow 160ms ease',
    };

    const headerStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '18px',
      gap: '12px',
    };

    const titleStyle = {
      margin: 0,
      padding:'0px 0px 0px 60px',
      fontSize: '30px',
      fontWeight: 600,
      letterSpacing: '-0.2px',
      color: '#0f172a',
      textAlign: 'center',
      flex: 1
    };

    const addBtnStyle = {
      padding: '8px 14px',
      borderRadius: '8px',
      border: 'none',
      background: 'linear-gradient(90deg,#4f46e5,#06b6d4)',
      color: '#fff',
      cursor: 'pointer',
      boxShadow: '0 6px 18px rgba(79, 70, 229, 0.18)',
      transition: 'transform 140ms ease, box-shadow 140ms ease, opacity 140ms ease',
      alignSelf: 'center'
    };

    const tableWrapStyle = {
      overflowX: 'auto',
      marginTop: '8px'
    };

    const tableStyle = {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: '14px',
    };

    const thStyle = {
      fontSize: '15px',
      textAlign: 'center',
      padding: '12px 14px',
      background: 'linear-gradient(90deg, rgba(15,23,42,0.03), rgba(15,23,42,0.03))',
      color: '#0b1220',
      fontWeight: 600,
      borderBottom: '1px solid rgba(15,23,42,0.06)'
    };

    const tdStyle = {
      textAlign: 'center',
      padding: '12px 14px',
      borderBottom: '1px solid rgba(15,23,42,0.06)',
      verticalAlign: 'middle'
    };

    const actionBtn = {
      padding: '6px 10px',
      marginRight: '8px',
      borderRadius: '8px',
      border: '1px solid rgba(15,23,42,0.08)',
      background: '#fff',
      cursor: 'pointer',
      transition: 'transform 120ms ease, box-shadow 120ms ease'
    };

    const deleteBtn = {
      ...actionBtn,
      border: '1px solid rgba(244,63,94,0.14)',
      color: '#ef4444',
    };

  return (
    <>
    <div style={pageStyle}>
      <div style={cardStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>All User Details</h2>
          <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
            <button
              style={addBtnStyle}
              onClick={() => navigate("/create")}
              onMouseDown={(e) => e.currentTarget.style.transform = 'translateY(1px) scale(0.997)'}
              onMouseUp={(e) => e.currentTarget.style.transform = 'none'}
            >
              Add User
            </button>
          </div>
        </div>

        <div style={tableWrapStyle}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Id</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Email</th>
                <th style={thStyle}>Password</th>
                <th style={thStyle}>Action</th>
              </tr>
            </thead>

            <tbody>
              {
                user.map((item) => (
                  <tr key={item.id} style={{transition: 'background 120ms ease'}}>
                    <td style={tdStyle}>{item.id}</td>
                    <td style={tdStyle}>{item.name}</td>
                    <td style={tdStyle}>{item.email}</td>
                    <td style={tdStyle}>{item.password}</td>
                    <td style={tdStyle}>
                      <button
                        style={actionBtn}
                        onClick={() => navigate(`/update/${item.id}`)}
                        onMouseDown={(e) => e.currentTarget.style.transform = 'translateY(1px) scale(0.995)'}
                        onMouseUp={(e) => e.currentTarget.style.transform = 'none'}
                      >
                        Edit
                      </button>
                      <button
                        style={deleteBtn}
                        onClick={() => handleDelete(item.id)}
                        onMouseDown={(e) => e.currentTarget.style.transform = 'translateY(1px) scale(0.995)'}
                        onMouseUp={(e) => e.currentTarget.style.transform = 'none'}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )) 
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  )
}

export default Read
