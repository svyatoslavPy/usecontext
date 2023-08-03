import { useContext } from "react";
import { UsersContext } from "../context/UsersContext";

import { User } from "./User";

export const Users = () => {
  const { usersData } = useContext(UsersContext);
  const users = usersData.users;

  return (
    <>
      <h1>Users: </h1>
      <section className="users">
        {users.length > 0 &&
          users
            .slice(0, 18)
            .map((user) => (
              <User firstName={user.firstName} lastName={user.lastName} age={user.age} />
            ))}
      </section>
    </>
  );
};
