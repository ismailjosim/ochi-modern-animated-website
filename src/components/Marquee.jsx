import { motion } from 'framer-motion';

const Marquee = () => {
    return (
        <div className='w-full py-20 rounded-3xl bg-[#004d43]'>
            <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap">
                <motion.h2 initial={ { x: "0" } } className='text-[15vw] leading-none font-Founder uppercase font-medium pt-1'>we are ochi</motion.h2>
                <motion.h2 initial={ { x: "0" } } className='text-[15vw] leading-none font-Founder uppercase font-medium pt-1'>we are ochi</motion.h2>
            </div>
        </div>
    );
};

export default Marquee;
