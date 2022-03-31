
const getTheme = () => localStorage.getItem('application-theme') || 'dark';

const setTheme = theme => {
  localStorage.setItem('application-theme', theme);

  if (theme === 'dark') {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
  }
  if (theme === 'light') {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
  }
};

export { 
  getTheme,
  setTheme,
}