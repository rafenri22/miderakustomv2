import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import { jasaDesain } from '../config/helpers';

import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img 
              src='./threejs.png'
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                MIDERAHATS <br className="xl:block hidden" /> MENGKUSTOM.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
              MideraHats juga bisa request desain kustom lhoo.. <strong>Ayo bikin</strong>{" "} dan miliki topi kustom yang kamu inginkan.
              </p>

              <CustomButton 
                type="filled"
                title="Kustomisasi"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
              <CustomButton 
              type="filled"
              title="Kembali Ke Toko"
              handleClick={() => window.location.href = "https://miderahats.netlify.app"}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />

              <p className="max-w-md font-normal text-gray-600 text-base">
              Atau mau dibikinin desainnya? <strong>bisa kok</strong>{" "} caranya klik tombol dibawah ini untuk menghubungi admin Midera.
              </p>

              <CustomButton 
              type="filled"
              title="Jasa Desain Topi"
              handleClick={jasaDesain}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />

            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home