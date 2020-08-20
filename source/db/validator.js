 export default function validator(name, post, email) {

  if (name !== '' && post !== '' && testMail(email)) {
    return true;
  }
  else
    return false;
}

function testMail(mail) {
  let reg = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
  return reg.test(mail) ? true: false;
}