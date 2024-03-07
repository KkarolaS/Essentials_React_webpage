const TabButton = ({ children, handleTabBtn, isSelected }) => {
  return (
    <li>
      <button className={isSelected ? "active" : null} onClick={handleTabBtn}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
