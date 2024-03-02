import PropTypes from "prop-types";
const TodoItem = ({ item, editFunc, toggleFunc }) => {
  const { text, completed } = item;
  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "91px",
      padding: "0 20px",
      marginBottom: "16px",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    check: {
      width: "32px",
      height: "32px",
      border: "1.5px solid black",
      borderRadius: "51px",
      cursor: "pointer",
    },
    checked: {
      width: "32px",
      height: "32px",
      borderRadius: "51px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#53da64",
      color: "lightgray",
      cursor: "pointer",
    },
    editBtn: {
      width: "51px",
      height: "45px",
      borderRadius: "4px",
      border: "1px solid black",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      {completed ? (
        <div style={styles.checked} onClick={toggleFunc}>
          <i className="fa-solid fa-check"></i>
        </div>
      ) : (
        <div style={styles.check} onClick={toggleFunc}></div>
      )}

      <div>
        <p style={{ textDecoration: completed ? "line-through" : "none" }}>
          {text}
        </p>
      </div>
      <div>
        <button style={styles.editBtn} onClick={editFunc}>
          Edit
        </button>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  item: PropTypes.object,
  editFunc: PropTypes.func,
  toggleFunc: PropTypes.func,
};

export default TodoItem;
