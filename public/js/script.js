const showModal = (e) => {
  document.getElementById('modal_backgound').classList.remove('hide');
};
const hideModal = (e) => {
  console.log(e.target.id);
  if (e.target.id == 'modal_backgound')
    document.getElementById('modal_backgound').classList.add('hide');
};

const showDashboard = () => {
  if (getCookie('owner') != '') {
    location.href = '/dashboard';
  } else {
    showModal();
  }
};

const dashboard = document
  .getElementById('dashboard')
  .addEventListener('click', showDashboard);

const modalBack = document
  .getElementById('modal_backgound')
  .addEventListener('click', hideModal);

const getCookie = (cname) => {
  let name = cname + '=';
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};

let msg = getCookie('msg');
console.log('Message:', msg);
console.log('log:', getCookie('logged'));
if (msg != '') {
  msg = msg.split('%20').join(' ');
  const msgDiv = document.getElementById('msg');
  msgDiv.classList.remove('hide');
  document.getElementById('msg-content').innerText = msg;
  setTimeout(() => {
    msgDiv.classList.add('hide');
    document.cookie = 'msg=; Max-Age=0; path=/; domain=' + location.host;
  }, 5000);
}
