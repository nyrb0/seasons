import { useState } from 'react';
import styles from './Sun.module.css';
import SeasonDisplay from './SeasonDisplay';
import FloatingLabel from './FloatingLabel';
import SeasonsLayer from './SeasonsLayer';
import MonthLines from './MonthLines';
import OrbitEarth from './OrbitEarth';
import useMonthReveal from './useMonthReveal';

const Sun: React.FC = () => {
    const [rounds, setRounds] = useState(0);
    const [animationDone, setAnimationDone] = useState(false);
    const [monthCardDone, setMonthCardDone] = useState(false);

   
    const { monthTitles, floating } = useMonthReveal(monthCardDone);

    const handleIteration = () => {
        setRounds(r => r + 1);
    };

    return (
        <div className={styles.space}>
            <img src='/img/sun.png' className={styles.sun} />

            {/* орбита и земля */}
            <OrbitEarth rounds={rounds} onAnimationIteration={handleIteration} />
            {rounds === 1 && (
                <>
                    <SeasonDisplay />

                    <FloatingLabel
                        label={floating ? floating.name : null}
                        keyId={floating ? `month-floating-${floating.index}` : undefined}
                        className={styles.floatingLabel}
                    />

                    {/* слой с картинками сезонов  */}
                    <SeasonsLayer onComplete={() => setAnimationDone(true)} />
                </>
            )}

            {/* показываем после завершения анимации сезонов */}
            {animationDone && <MonthLines monthTitles={monthTitles} onComplete={() => setMonthCardDone(true)} />}
        </div>
    );
};

export default Sun;
