export const User = ({ firstName, lastName, age }) => {
  return (
    <div className="user-card">
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{age}</p>
    </div>
  );
};
