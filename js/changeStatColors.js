export const changeStatColors = (color) => {
  const stats = document.querySelectorAll('.stats');
  const spanBar = [...document.querySelectorAll('.span-bar')];
  stats.forEach((stat) => {
    stat.style.color = color;
  });
  spanBar.forEach((span) => {
    span.style.background = color;
  });
};
