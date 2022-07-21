import './page.css';
import { createHeader } from './Header';

export const createPage = () => {
  const article = document.createElement('article');
  let user = null;
  let header = null;

  const rerenderHeader = () => {
    const wrapper = document.getElementsByTagName('article')[0];
    wrapper.replaceChild(createHeaderElement(), wrapper.firstChild);
  };

  const onLogin = () => {
    window.open("https://ayushi-auth.auth.us-east-1.amazoncognito.com/login?client_id=1n0bfv1hhkps5d6rm3us66mp2q&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=http://localhost:6006/?path=/story/example-page--logged-in")
    user = { name: 'Ayushi' };
    rerenderHeader();
  };

  const onLogout = () => {
    window.open("https://ayushi-auth.auth.us-east-1.amazoncognito.com/logout?client_id=1n0bfv1hhkps5d6rm3us66mp2q&logout_uri=http://localhost:6006/?path=/story/example-page--logged-out")
    user = null;
    rerenderHeader();
  };

  const onCreateAccount = () => {
    window.open("https://ayushi-auth.auth.us-east-1.amazoncognito.com/signup?client_id=1n0bfv1hhkps5d6rm3us66mp2q&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=http://localhost:6006/?path=/story/example-page--logged-in")
    user = { name: 'Jane Doe' };
    rerenderHeader();
  };

  const createHeaderElement = () => {
    return createHeader({ onLogin, onLogout, onCreateAccount, user });
  };

  header = createHeaderElement();
  article.appendChild(header);

  const section = `
  <h3>Hello, this is home page</h3>
`;

  article.insertAdjacentHTML('beforeend', section);

  return article;
};
