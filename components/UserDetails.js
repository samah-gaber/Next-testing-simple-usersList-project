import { useState } from "react";
import styles from "../styles/UserDetails.module.css";

const UserDetails = ({ singleUser }) => {
  const { email, name, phone, company, id } = singleUser;
  const [isActive, setIsActive] = useState(true);
  return (
    <div className={styles.user_details}>
      <div className={styles.single_user_header}>
        <h3 className="mb-4" data-testid="user-details-header">
          Users details
        </h3>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
            data-testid="status-switch"
          />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
      </div>
      <div className="row">
        <div className="col-6">
          <p className={styles.data_ine}>
            <span className={styles.label} data-testid="id-label">
              Id:{" "}
            </span>
            <span className={styles.value} data-testid="id-value">
              {id}
            </span>
          </p>
        </div>
        <div className="col-6">
          <p className={styles.data_ine}>
            <span className={styles.label} data-testid="status-label">
              Status:{" "}
            </span>
            <span className={styles.value} data-testid="status-value">
              {isActive ? "Active" : "Inactive"}
            </span>
          </p>
        </div>
        <div className="col-6">
          <p className={styles.data_ine}>
            <span className={styles.label} data-testid="email-label">
              Email:{" "}
            </span>
            <span className={styles.value} data-testid="email-value">
              {email}
            </span>
          </p>
        </div>
        <div className="col-6">
          <p className={styles.data_ine}>
            <span className={styles.label} data-testid="name-label">
              Name:{" "}
            </span>
            <span className={styles.value} data-testid="name-value">
              {name}
            </span>
          </p>
        </div>
        <div className="col-6">
          <p className={styles.data_ine}>
            <span className={styles.label} data-testid="phone-label">
              Phone:{" "}
            </span>
            <span className={styles.value} data-testid="phone-value">
              {phone}
            </span>
          </p>
        </div>
        <div className="col-6">
          <p className={styles.data_ine}>
            <span className={styles.label} data-testid="company-label">
              Company:{" "}
            </span>
            <span className={styles.value} data-testid="company-value">
              {company && company.name}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
