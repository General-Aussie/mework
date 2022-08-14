window.addEventListener('scroll', function(){
  const header = document.querySelector('ul');
  header.classList.toggle("sticky", window.scrollY > 0);
});