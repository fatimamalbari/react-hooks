import React from "react";
import styles from './dashboard.module.css';
import {
  useAuthDispatch,
  logout,
  useAuthState
} from "../../context";

const Dashboard = (props) => {
  const dispatch = useAuthDispatch();
  const userDetails = useAuthState();
  console.log('user details ====', userDetails);
  console.log('userjahsd')

  const handleLogout = () => {
    logout(dispatch)
    props.history.push('/login')
  }

  return (
    <div style={{ padding: 10 }}>
      <div className={styles.dashboardPage}>
        <h1>Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <p>Welcome {userDetails?.user?.email}</p>
    </div>
  )
}

export default Dashboard;