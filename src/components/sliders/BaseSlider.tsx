'use client';
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BaseButton from "../buttons/BaseButton";
import { useTranslation } from 'react-i18next';

interface BaseSliderProps {
  slides: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
}

export default function BaseSlider({ slides, autoPlay = false, interval = 5000 }: BaseSliderProps) {

    const { t } = useTranslation();

    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        if (!autoPlay) return;

        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, interval);

        return () => clearInterval(timer);
    }, [autoPlay, interval, slides.length]);

    return (
    <motion.section
        initial={{ opacity: 0, y: 0, x: -50 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative text-center px-4 py-16 sm:py-24 text-foreground"
    >
        <AnimatePresence mode="wait">
        <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
        >
            {slides[currentSlide]}
        </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex justify-center gap-4">
        <BaseButton onClick={prevSlide}>{t("slider.previous")}</BaseButton>
        <BaseButton onClick={nextSlide}>{t("slider.next")}</BaseButton>
        </div>
    </motion.section>
    );
}
