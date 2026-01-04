import styles from './Sun.module.css';

type Props = {
    rounds: number;
    onAnimationIteration?: () => void;
};

const OrbitEarth: React.FC<Props> = ({ rounds, onAnimationIteration }) => {
    return (
        <>
            {rounds !== 1 && (
                <svg className={styles.orbitSvg} viewBox='0 0 300 300'>
                    <circle className={styles.orbitPath} cx='150' cy='150' r='110' />
                </svg>
            )}

            <div className={`${styles.orbit} ${rounds === 1 ? '' : styles.earthAnimation}`} onAnimationIteration={onAnimationIteration}>
                <img src='/img/earth.png' className={`${rounds === 1 ? styles.earthScaleUp : styles.earth}`} />
            </div>
        </>
    );
};

export default OrbitEarth;
