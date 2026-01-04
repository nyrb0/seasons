import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { seasons as seasonsConst } from './constants';

const SeasonDisplay: React.FC = () => {
    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(true);

    useEffect(() => {
        if (index < seasonsConst.length - 1) {
            const t = window.setTimeout(() => setIndex(p => p + 1), 2000);
            return () => clearTimeout(t);
        } else {
            const t = window.setTimeout(() => setShow(false), 2000);
            return () => clearTimeout(t);
        }
    }, [index]);

    return (
        <div className='flex justify-center'>
            <AnimatePresence mode='wait'>
                {show && (
                    <motion.h2
                        key={seasonsConst[index].name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        style={{ position: 'absolute' }}
                        className='text-white'
                    >
                        {seasonsConst[index].season}
                    </motion.h2>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SeasonDisplay;
