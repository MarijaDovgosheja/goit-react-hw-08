import { BiSolidPhone } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.card}>
      <div className={css.infoBlock}>
        <div className={css.container}>
          <IoPerson className={css.icon} size="20" />
          <p className={css.name}>{name}</p>
        </div>
        <div className={css.container}>
          <BiSolidPhone className={css.icon} size="20" />
          <p className={css.number}>{number}</p>
        </div>
      </div>
      <button className={css.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
