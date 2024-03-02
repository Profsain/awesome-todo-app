import PropTypes from "prop-types"
const TaskHeader = ({ title = "Add Todo" }) => {
    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        color: "#fff",
        fontSize: "18px",
        backgroundColor: "#3556ab"
    }
  return (
    <div style={style}>
      <p>{title}</p>
    </div>
  );
};

TaskHeader.propTypes = {
  title: PropTypes.string
}

export default TaskHeader;
