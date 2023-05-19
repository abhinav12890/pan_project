export const fadeIn = (direction, delay) => {
  const remSize = 16; // set a base rem size, usually 16px
  return {
    hidden: {
      y: direction === 'up' ? remSize * 1.25 : direction === 'down' ? remSize * -1.25 : 0,
      opacity: 0,
      x: direction === 'left' ? remSize * 1.25 : direction === 'right' ? remSize * -1.25 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
