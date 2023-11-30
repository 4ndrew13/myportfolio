import { motion } from 'framer-motion';

const animations = {
    initial: {opacitiy: 0, x: 50},
    animate: {opacitiy: 1, x: 0},
    exit: {opacitiy: 0, x:-100},
}

const AnimatedPage = ({children}) => {
    return (
        <motion.div variants={animations} initial="initial" animate="animate" exit="exit" transition={{duration: 3, ease: [0.22, 1, 0.36, 1]}}>
            {children}
        </motion.div>
    );
};

export default AnimatedPage;