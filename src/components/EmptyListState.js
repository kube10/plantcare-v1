import Button from "./Button";
const EmptyListState = ({ onBtnClick, showAddForm }) => {
  return (
    <div className="empty-list">
      {!showAddForm && (
        <>
          <h2>Add your first plant</h2>
          <p>PlantCare will notify you when your plants need watering.</p>
          <Button
            text="Add your first plant"
            action={onBtnClick}
            type="primary"
          />
        </>
      )}
    </div>
  );
};

export default EmptyListState;
