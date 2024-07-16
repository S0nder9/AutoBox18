import { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

const useAnim = (animationOptions) => {
    const elementsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const elementWidth = entry.target.getBoundingClientRect().width;
                        anime({
                            targets: entry.target,
                            translateX: [elementWidth, 0], // Перемещение вправо, затем обратно
                            ...animationOptions
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        elementsRef.current.forEach(element => observer.observe(element));

        return () => {
            elementsRef.current.forEach(element => observer.unobserve(element));
        };
    }, [animationOptions]);

    const refCallback = (element) => {
        if (element) {
            elementsRef.current.push(element);
        }
    };

    return refCallback;
};

export default useAnim;
