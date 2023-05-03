import Nav from "./header";
import Footer from "./footer";
import { motion, AnimatePresence } from "framer-motion";
import classNames from "../util/classNames";

const variants = {
  hidden: { opacity: 0, x: 0, y: 0, scale: 1 },
  enter: { opacity: 1, x: 0, y: 0, scale: 1 },
  exit: { opacity: 0, x: 0, y: 0, scale: 1 },
};
const Layouts = ({ children }) => {
  return (
    <div
      className={classNames(
        "relative flex justify-center z-10 mx-auto w-full px-0 pt-0",
        "sm:max-w-screen-sm sm:px-4 sm:pb-8 sm:mx-auto"
      )}
    >
      {/* <div
        className={classNames(
          " h-20 z-1 rounded-3xl md:hidden xl:inline opacity-50 w-40 sm:w-[520px] top-0 absolute bg-gradient-to-r"
        )}
      ></div> */}
      <div className="fixed top-0 sm:top-0 z-30 w-full">
        <div
          className={classNames(
            "w-full "
          )}
        >
          <Nav />
        </div>
      </div>
      <div
        className={classNames(
          " w-full ",
          "sm:rounded-2xl sm:w-full  sm:mx-auto"
        )}
      >
        <div
          className={classNames(
            "relative my-4",
            "sm:px-12 sm:py-5 sm:pb-1",
            "sm:pt-12 pt-1 sm:px-3"
          )}
        >
          <motion.main
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: "ease", duration: 0.1 }}
            style={{
              height: "auto",
            }}
          >
            {children}
          </motion.main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layouts;
