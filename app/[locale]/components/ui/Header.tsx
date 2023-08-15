'use client';

import { useCallback, useState } from 'react';
import { useAnimation, motion } from 'framer-motion';

import SideBar from './Sidebar';
import Burger from './Burger/index';
import PageControls from './PageControls';
import Container from '../Container';
import NavBar from '../NavBar';

export default function Header() {
  const animationControls = useAnimation();

  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  // hide/show header on scroll
  // TO-DO: fix header hide when navigate between sections via <Link />

  // const [hidden, setHidden] = useState(false);
  // const { scrollY } = useScroll();

  // function update() {
  //   if (scrollY.get() < scrollY.getPrevious()) {
  //     setHidden(false);
  //   } else if (scrollY.get() > 200 && scrollY.get() > scrollY.getPrevious()) {
  //     setHidden(true);
  //   }
  // }

  // useEffect(() => {
  //   return scrollY.on('change', () => update());
  // });

  // const headerVariants = {
  //   hidden: { y: '-100%' },
  // };

  // hide/show header on scroll


  const toggleMenu = useCallback(() => {
    animationControls.start(isMenuOpen ? 'open' : 'closed');
    setMenuOpen((prevOpen) => !prevOpen);
  }, [animationControls, isMenuOpen]);

  return (
    <motion.header
      className="sticky top-0 w-full bg-background/90 shadow-xl backdrop-blur-sm"
      // variants={headerVariants}
      // animate={hidden ? 'hidden' : 'visible'}
      transition={{ bounce: 0, duration: 0.2, ease: [0.1, 0.25, 0.3, 1] }}
    >
      <Container className="flex h-[4rem] items-center  justify-between">
        <h1>{'<AT/>'}</h1>

        <NavBar />

        <div className="hidden items-center justify-between lg:flex">
          <PageControls />
        </div>
        <Burger
          isOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          controls={animationControls}
        />
        <SideBar isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </Container>
    </motion.header>
  );
}
