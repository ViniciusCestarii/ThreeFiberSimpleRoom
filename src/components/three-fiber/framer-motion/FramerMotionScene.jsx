import { Suspense, useState } from "react";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import { Shapes } from "@/components/three-fiber/framer-motion/Shapes";
import useMeasure from "react-use-measure";
import { transition } from "./settings";

const FramerMotionScene = () => {
  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="absolute top-28 left-64 -translate-x-1/2 z-10">
      <MotionConfig transition={transition}>
        <motion.button
          className="appearance-none border-none cursor-pointer bg-myBlue text-white rounded-[60px] outline-none m-0 p-[12px] font-nunito font-bold z-[1] text-[48px] leading-[48px] tracking-[-1px] relative text-center flex items-center"
          ref={ref}
          initial={false}
          animate={isHover ? "hover" : "rest"}
          whileTap="press"
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.5 },
            press: { scale: 1.4 }
          }}
          onHoverStart={() => {
            resetMousePosition();
            setIsHover(true);
          }}
          onHoverEnd={() => {
            resetMousePosition();
            setIsHover(false);
          }}
          onTapStart={() => setIsPress(true)}
          onTap={() => setIsPress(false)}
          onTapCancel={() => setIsPress(false)}
          onPointerMove={(e) => {
            mouseX.set(e.clientX - bounds.x - bounds.width / 2);
            mouseY.set(e.clientY - bounds.y - bounds.height / 2);
          }}
        >
          <motion.div
            className="shapes absolute -inset-[1px] rounded-[60px] bg-gradient-to-tr from-20% from-myBlue to-myPink"
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 }
            }}
          >
            <div className="right-5 bg-myPurple absolute -bottom-[15px] w-24 h-7 blur-[25px]" />
            <div className="left-5 bg-myBlue absolute -bottom-[15px] w-24 h-7 blur-[25px]" />
            <div className="absolute -inset-[100px] w-[calc(100% + 200px) pointer-events-none]">
              <Suspense fallback={null}>
                <Shapes
                  isHover={isHover}
                  isPress={isPress}
                  mouseX={mouseX}
                  mouseY={mouseY}
                />
              </Suspense>
            </div>
          </motion.div>
          <motion.div
            variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
            className="w-[180px] z-[1] py-5"
          >
            Hover For 3D
          </motion.div>
        </motion.button>
      </MotionConfig>
    </div>
  );
}

export default FramerMotionScene