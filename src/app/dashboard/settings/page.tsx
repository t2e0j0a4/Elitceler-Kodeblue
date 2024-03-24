import styles from "./page.module.css";

// Components
import Topbar from "@/components/dashboard/Topbar/Topbar";

const DashboardSettings = () => {
  return (
    <div className={styles.app__settings}>
      <Topbar mainTitle="Settings" />
      <section className={styles.settings__center}></section>
    </div>
  )
}

export default DashboardSettings;