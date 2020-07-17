// Get the modal element
var modal1 = document.getElementById('portfolioModal1');
var modal2 = document.getElementById('portfolioModal2');
var modal3 = document.getElementById('portfolioModal3');
var modal4 = document.getElementById('portfolioModal4');
var modal5 = document.getElementById('portfolioModal5');
var modal6 = document.getElementById('portfolioModal6');

// Get 'open modal' Buttons
var modalBtn1 = document.getElementById('modalBtn1');
var modalBtn2 = document.getElementById('modalBtn2');
var modalBtn3 = document.getElementById('modalBtn3');
var modalBtn4 = document.getElementById('modalBtn4');
var modalBtn5 = document.getElementById('modalBtn5');
var modalBtn6 = document.getElementById('modalBtn6');

// Get 'close modal' Buttons
var closeBtn1 = document.getElementById('closeBtn1');
var closeBtn2 = document.getElementById('closeBtn2');
var closeBtn3 = document.getElementById('closeBtn3');
var closeBtn4 = document.getElementById('closeBtn4');
var closeBtn5 = document.getElementById('closeBtn5');
var closeBtn6 = document.getElementById('closeBtn6');


// Listen for open Click
modalBtn1.addEventListener('click', openModal1);
modalBtn2.addEventListener('click', openModal2);
modalBtn3.addEventListener('click', openModal3);
modalBtn4.addEventListener('click', openModal4);
modalBtn5.addEventListener('click', openModal5);
modalBtn6.addEventListener('click', openModal6);

// Listen for close Click
closeBtn1.addEventListener('click', closeModal1);
closeBtn2.addEventListener('click', closeModal2);
closeBtn3.addEventListener('click', closeModal3);
closeBtn4.addEventListener('click', closeModal4);
closeBtn5.addEventListener('click', closeModal5);
closeBtn6.addEventListener('click', closeModal6);

// Listen for outside Click
window.addEventListener('click', outsideClick);

// Func to open modal
function openModal1()
{
  modal1.style.display = 'block';
}
function openModal2()
{
  modal2.style.display = 'block';
}
function openModal3()
{
  modal3.style.display = 'block';
}
function openModal4()
{
  modal4.style.display = 'block';
}
function openModal5()
{
  modal5.style.display = 'block';
}
function openModal6()
{
  modal6.style.display = 'block';
}

// Func to close modal on cross click
function closeModal1()
{
  modal1.style.display = 'none';
}
function closeModal2()
{
  modal2.style.display = 'none';
}
function closeModal3()
{
  modal3.style.display = 'none';
}
function closeModal4()
{
  modal4.style.display = 'none';
}
function closeModal5()
{
  modal5.style.display = 'none';
}
function closeModal6()
{
  modal6.style.display = 'none';
}

// Func to close modal on outside click
function outsideClick(e)
{
  if(e.target == modal1)
  {
    modal1.style.display = 'none';
  }
  else if (e.target == modal2) {
    modal2.style.display = 'none';
  }
  else if (e.target == modal3) {
    modal3.style.display = 'none';
  }
  else if (e.target == modal4) {
    modal4.style.display = 'none';
  }
  else if (e.target == modal5) {
    modal5.style.display = 'none';
  }
  else if (e.target == modal6) {
    modal6.style.display = 'none';
  }
}
