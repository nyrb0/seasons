const Line = ({ title, className, idx }: { title: string; className?: string; idx: number }) => {
    const variants = () => {
        if (idx <= 2) {
            return 'blue';
        } else if (idx <= 5) {
            return 'pink';
        } else if (idx <= 8) {
            return 'green';
        } else {
            return 'yellow';
        }
    };
    return (
        <svg className={className} width='115' height='91' viewBox='0 0 115 91' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <mask id='path-1-inside-1_3330_3346' fill='white'>
                <path d='M8.81063 0.000797505C49.0383 7.20227 86.0945 26.5544 114.991 55.4524L79.6354 90.8071C57.9627 69.1336 30.1706 54.6195 -0.000181967 49.2184L8.81063 0.000797505Z' />{' '}
            </mask>
            <path
                d='M8.81063 0.000797505C49.0383 7.20227 86.0945 26.5544 114.991 55.4524L79.6354 90.8071C57.9627 69.1336 30.1706 54.6195 -0.000181967 49.2184L8.81063 0.000797505Z'
                fill='white'
                stroke={variants()}
                strokeWidth='5'
                mask='url(#path-1-inside-1_3330_3346)'
            />{' '}
            <text
                x='50%'
                y='50%'
                fill='black'
                fontSize='12'
                fontWeight={900}
                fontFamily='Arial'
                textAnchor='middle'
                dominantBaseline='middle'
                transform={`rotate(27, ${110 / 2}, ${75 / 2})`}
            >
                {title}
            </text>
        </svg>
    );
};
export default Line;
