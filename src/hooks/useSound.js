import { useEffect } from "react";

export default function useSound() {
    useEffect(() => {
        const audio = new Audio(
            "https://assets.mixkit.co/sfx/preview/mixkit-interface-click-1126.mp3"
        );
        audio.volume = 0.2;

        const play = () => {
            audio.currentTime = 0;
            audio.play().catch((err) => {
                // Silent catch for interaction policy
                console.log("Audio play blocked until user interaction.");
            });
        };

        const handleMouseEnter = (e) => {
            const target = e.target.closest("a, button, [role='button']");
            if (target) {
                play();
            }
        };

        document.addEventListener("mouseover", handleMouseEnter);

        return () => {
            document.removeEventListener("mouseover", handleMouseEnter);
        };
    }, []);
}
