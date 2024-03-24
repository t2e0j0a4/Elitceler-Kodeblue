import styles from "./page.module.css";

// Components
import Topbar from "@/components/dashboard/Topbar/Topbar";

const DashboardDoctors = () => {
  return (
    <div className={styles.app__doctors}>
      <Topbar mainTitle="Doctors" />
      <section className={styles.doctors__center}></section>
    </div>
  )
}

export default DashboardDoctors;