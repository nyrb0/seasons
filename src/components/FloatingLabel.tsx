import { AnimatePresence, motion } from 'framer-motion';

type Props = {
    label: string | null;
    className?: string;
    keyId?: string;
};

const FloatingLabel: React.FC<Props> = ({ label, className = '', keyId }) => {
    return (
        <AnimatePresence mode='wait'>
            {label && (
                <motion.h2
                    key={keyId ?? label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    style={{ position: 'absolute' }}
                    className={`${className} text-white`}
                >
                    {label}
                </motion.h2>
            )}
        </AnimatePresence>
    );
};

export default FloatingLabel;
