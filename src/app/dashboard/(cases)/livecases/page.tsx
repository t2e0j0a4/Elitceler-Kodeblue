import styles from "./page.module.css";

// Components
import Topbar from "@/components/dashboard/Topbar/Topbar";

const DashboardLiveCases = () => {
  return (
    <div className={styles.app__livecases}>
      <Topbar mainTitle="Live Cases" />
      <section className={styles.livecases__center}></section>
    </div>
  )
}

export default DashboardLiveCases;