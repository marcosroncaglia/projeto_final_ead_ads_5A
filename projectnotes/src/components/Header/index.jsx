import {RiShutDownLine} from 'react-icons/ri';
import {Container, Profile, Logout} from './styles';

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img 
          src="https://github.com/marcosroncaglia.png"
          alt="Foto do usuário / User photo" />

        <div>
          <span>
            Bem-vindo,
          </span>

          <strong>
            Marcos Roncaglia
          </strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>

    </Container>
  );
}