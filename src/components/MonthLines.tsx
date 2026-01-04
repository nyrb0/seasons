import { motion } from 'framer-motion';
import { monthClasses } from './constants';
import styles from './Sun.module.css';
import Line from './Line';

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.5,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

type Props = {
    monthTitles: string[];
    onComplete?: () => void;
};

const MonthLines: React.FC<Props> = ({ monthTitles, onComplete }) => {
    return (
        <motion.div className='lines-container' initial='hidden' animate='show' variants={containerVariants} onAnimationComplete={onComplete}>
            {monthClasses.map((monthClass, idx) => (
                <motion.div key={monthClass} variants={itemVariants}>
                    <Line idx={idx} title={monthTitles[idx]} className={styles[monthClass]} />
                </motion.div>
            ))}
        </motion.div>
    );
};

export default MonthLines;
