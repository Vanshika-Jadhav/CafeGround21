 Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () = {
    navLinks.classList.toggle('active');
    
     Animate the hamburger icon lines
    const spans = hamburger.querySelectorAll('span');
    if (navLinks.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });
}

 Menu Filtering Logic
const filterBtns = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');

if (filterBtns.length  0) {
  filterBtns.forEach(btn = {
    btn.addEventListener('click', () = {
       Remove active state from all buttons
      filterBtns.forEach(b = b.classList.remove('active'));
       Add active state to clicked button
      btn.classList.add('active');
      
      const filterValue = btn.getAttribute('data-filter');
      
       Filter items based on category
      menuItems.forEach(item = {
        if (filterValue === 'all') {
          item.style.display = 'flex';
        } else {
          if (item.classList.contains(filterValue)) {
            item.style.display = 'flex';
          } else {
            item.style.display = 'none';
          }
        }
      });
    });
  });
}