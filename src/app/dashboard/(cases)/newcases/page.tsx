import styles from "./page.module.css";

// Components
import Topbar from "@/components/dashboard/Topbar/Topbar";

const DashboardNewCases = () => {
  return (
    <div className={styles.app__newcases}>
      <Topbar mainTitle="New Cases" />
      <section className={styles.newcases__center}></section>
    </div>
  )
}

export default DashboardNewCases;