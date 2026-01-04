import { useEffect, useRef, useState } from 'react';
import { monthNames } from './constants';

type Floating = { index: number; name: string } | null;

export default function useMonthReveal(trigger: boolean) {
    const [monthTitles, setMonthTitles] = useState<string[]>(Array.from({ length: 12 }, (_, i) => (i + 1).toString()));
    const [floating, setFloating] = useState<Floating>(null);
    const startedRef = useRef(false);

    useEffect(() => {
        if (!trigger || startedRef.current) return;
        startedRef.current = true;

        let cancelled = false;
        const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

        (async () => {
            for (let i = 0; i < 12; i++) {
                if (cancelled) break;

                // очистить карточку
                setMonthTitles(prev => {
                    const copy = [...prev];
                    copy[i] = '';
                    return copy;
                });

                // показать плавающий заголовок
                setFloating({ index: i, name: monthNames[i] });

                // показать 750ms
                await sleep(750);
                if (cancelled) break;

                // убрать плавающий заголовок
                setFloating(null);

                // записать название в карточку
                setMonthTitles(prev => {
                    const copy = [...prev];
                    copy[i] = monthNames[i];
                    return copy;
                });

                // короткая пауза перед следующим
                await sleep(300);
            }
        })();

        return () => {
            cancelled = true;
        };
    }, [trigger]);

    return { monthTitles, floating };
}
