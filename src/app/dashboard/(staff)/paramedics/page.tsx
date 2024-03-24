import styles from "./page.module.css";

// Components
import Topbar from "@/components/dashboard/Topbar/Topbar";

const DashboardParamedics = () => {
  return (
    <div className={styles.app__paramedics}>
      <Topbar mainTitle="Paramedics" />
      <section className={styles.paramedics__center}></section>
    </div>
  )
}

export default DashboardParamedics;