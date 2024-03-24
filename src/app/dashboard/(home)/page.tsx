import styles from "./page.module.css";

// Components
import Topbar from "@/components/dashboard/Topbar/Topbar";

const DashboardHome = () => {
  return (
    <div className={styles.app__home}>
      <Topbar mainTitle="Dashboard" />
      <section className={styles.home__center}></section>
    </div>
  )
}

export default DashboardHome;