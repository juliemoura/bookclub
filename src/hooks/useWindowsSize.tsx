import { useState, useEffect } from "react";

export interface IUseWindowSize {
    width: number;
    height: number;
}

export function useWindowsSize(): IUseWindowSize {
    const [windowSize, setWindowSize] = useState<IUseWindowSize>({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}
