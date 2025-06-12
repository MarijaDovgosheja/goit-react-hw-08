import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <p>Вітаю, {user.name}!</p>
      <button onClick={() => dispatch(logOut())}>Вийти</button>
    </div>
  );
}
