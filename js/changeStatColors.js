export const changeStatColors = (color) => {
  const stats = document.querySelectorAll('.stats');
  stats.forEach((stat) => {
    stat.style.color = color;
  });
};
