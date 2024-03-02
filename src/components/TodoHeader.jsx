import '../App.css'

const TodoHeader = () => {
    const styles = {
        topHeader: {
            display: 'flex',
            justifyContent: 'flex-start',
            backgroundColor: "#3556AB",
            alignItems: 'center',
            padding: '20px',
            color: "white"
        },
        profile: {
            paddingLeft: "18px"
        },
        para: {
            paddingTop: "10px",
            fontStyle: "italic"
        },
        bottomHeader: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px',
            color: "#071D55",
            backgroundColor: "#9eb031"
        },
        price: {
            padding: '10px',
            backgroundColor: "#071d55",
            color: "#f2c94c",
            marginTop: "-48px"
        },
    }
  return (
      <div>
          <div style={styles.topHeader}>
              <div>
                  <img src="images/avatar.png" alt="profile-avatar" />
              </div>
              <div style={styles.profile}>
                  <h4>Hello, John</h4>
                  <p style={styles.para}>What are your plans for today?</p>
              </div>
          </div>

          <div style={styles.bottomHeader}>
              <div>
                  <img src="images/reward.png" alt="upgrade-icon" />
              </div>
              <div>
                  <p>Go Pro Upgrade Now</p>
              </div>
              <div style={styles.price}>
                  <p>$1</p>
              </div>
          </div>
    </div>
  )
}

export default TodoHeader