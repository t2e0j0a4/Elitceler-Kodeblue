import React from 'react'
import styles from './page.module.css';

// React Icons
import { FaStarOfLife } from "react-icons/fa";

// Components
import LiveCaseCard from '@/components/LiveCaseCard/LiveCaseCard';

const page = () => {

    const { dashboard__livecases, livecases__head, livecases__main } = styles;

    return (
        <main className={dashboard__livecases}>
            
            <div className={livecases__head}>
                <FaStarOfLife fontSize={21} color={'#BA1A1A'}/>
                <p>Live Cases</p>
            </div>

            <section className={livecases__main}>
                <LiveCaseCard age={28} caseID='abc123' caseType='Heart Stroke' paymentType='Credit Card' gender='Male' />
            </section>

        </main>
    )
}

export default page