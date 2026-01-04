import { motion } from 'framer-motion';
import { seasons } from './constants';
import styles from './Sun.module.css';

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            delayChildren: 1,
            staggerChildren: 2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } },
};

type Props = {
    onComplete?: () => void;
};

/**
 * отвечает только за показ картинок сезонов
 */
const SeasonsLayer: React.FC<Props> = ({ onComplete }) => {
    return (
        <motion.div variants={containerVariants} initial='hidden' animate='show' onAnimationComplete={onComplete}>
            {seasons.map(s => (
                <motion.img key={s.name} src={s.src} className={styles[s.name]} variants={itemVariants} />
            ))}
        </motion.div>
    );
};

export default SeasonsLayer;
