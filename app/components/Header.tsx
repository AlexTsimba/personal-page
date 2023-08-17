import PageControls from './PageControls';
import Container from './Container';

import Navigation from './Navigation';
import NavBar from './NavBar';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/90 shadow-xl backdrop-blur-sm">
      <Container className="flex h-[4rem] items-center justify-between">
        <h1>{'<AT/>'}</h1>
        <Navigation>
          <NavBar />
        </Navigation>
        <PageControls />
      </Container>
    </header>
  );
}

// 'use client';

// import PageControls from './PageControls';
// import Container from './Container';

// import Navigation from './Navigation';
// import NavBar from './NavBar';
// import { useScroll, motion } from 'framer-motion';
// import { useEffect, useState } from 'react';

// export default function Header() {
//   const [hidden, setHidden] = useState(false);
//   const { scrollY } = useScroll();

//   function update() {
//     if (scrollY.get() < scrollY.getPrevious()) {
//       setHidden(false);
//     } else if (scrollY.get() > 200 && scrollY.get() > scrollY.getPrevious()) {
//       setHidden(true);
//     }
//   }

//   useEffect(() => {
//     return scrollY.on('change', () => update());
//   });

//   const headerVariants = {
//     hidden: { y: '-100%' },
//   };

//   return (
//     <motion.header
//       variants={headerVariants}
//       animate={hidden ? 'hidden' : 'visible'}
//       transition={{ bounce: 0, duration: 0.2, ease: [0.1, 0.25, 0.3, 1] }}
//       className="fixed top-0 w-full bg-background/90 shadow-xl backdrop-blur-sm"
//     >
//       <Container className="flex h-[4rem] items-center justify-between">
//         <h1>{'<AT/>'}</h1>
//         <Navigation>
//           <NavBar />
//         </Navigation>
//         <PageControls />
//       </Container>
//     </motion.header>
//   );
// }
