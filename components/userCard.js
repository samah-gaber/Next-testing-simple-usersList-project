import styles from "../styles/Users.module.css";

const UserCard = ({ name, phone, id }) => {
  return (
    <div className={`${styles.user_card} px-4 py-4`}>
      <p className={styles.data_ine}>
        <span className={styles.label} data-testid="name_label">
          Name:{" "}
        </span>
        <span className={styles.value} data-testid="name_value">
          {name}
        </span>
      </p>
      <p className={styles.data_line}>
        <span className={styles.label} data-testid="phone_label">
          Phone:{" "}
        </span>
        <span className={styles.value} data-testid="phone_value">
          {phone}
        </span>
      </p>
    </div>
  );
};

export default UserCard;
