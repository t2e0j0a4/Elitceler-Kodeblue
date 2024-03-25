import { Metadata } from "next";
import styles from "./page.module.css";

// Components
import Topbar from "@/components/dashboard/Topbar/Topbar";

// UI Components
import Beds from "./ui/Beds/Beds";
import Stats from "./ui/Stats/Stats";

// React Icons
import { GiStethoscope } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { TbReportMedical } from "react-icons/tb";
import { LiaAmbulanceSolid } from "react-icons/lia";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaBriefcaseMedical } from "react-icons/fa6";

export const metadata: Metadata = {
  title: 'Stats - Dashboard | Kodeblue',
  description: 'Welcome to Admin Dashboard of Kodeblue Hospital Management',
}

const DashboardHome = () => {
  return (
    <div className={styles.app__home}>
      <Topbar mainTitle="Dashboard" />
      <section className={styles.home__center}>
        
        {/* Stats Cards */}

        <div className={styles.home__stats}>
          <Stats title="Total Case Requests" stat={0} dayTitle="Today's Case Requests" dayStat={0} bgColor="#FFF4DF" iconColor="#DC9D2B" MainIcon={FaBriefcaseMedical} ShowIcon={IoStatsChartSharp} />
          <Stats title="Registered Paramedics" stat={0} dayTitle="Today's Available Paramedics" dayStat={0} bgColor="#FBF2F5" iconColor="#E3759D" MainIcon={LiaAmbulanceSolid} ShowIcon={TbReportMedical} />
          <Stats title="Registeres Doctors" stat={0} dayTitle="Today's Available Doctors" dayStat={0} bgColor="#F2FDFA" iconColor="#25B190" MainIcon={GiStethoscope} ShowIcon={FaUserDoctor} />
          <Beds/>
        </div>

        {/* Stats Cards */}

      </section>
    </div>
  )
}

export default DashboardHome;