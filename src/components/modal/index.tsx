"use client";

import { motion } from "motion/react";

interface IModal {
    src: string;
    alt?: string;
    onClose?: () => void;
}

const Modal = (props: IModal) => {
    const { src, onClose } = props;

    const stopPropagation = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) => {
        e.stopPropagation();
    };

    return (
        <div
            onClick={onClose}
            className="fixed z-20 inset-0 w-full h-dvh backdrop-blur-sm flex items-center justify-center"
        >
            <motion.div
                key="modal"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                onClick={stopPropagation}
                className="bg-white p-1 md:p-2 shadow-xl w-full max-w-screen-lg"
            >
                <video controls autoPlay={false} className="w-full h-auto">
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </motion.div>
        </div>
    );
};

export default Modal;
