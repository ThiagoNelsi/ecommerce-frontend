import { MdSearch } from 'react-icons/md';
import { HeaderTag, InputBlock } from './styles';

function Header() {
  return (
    <HeaderTag>
      <h1>LOGO</h1>
      <InputBlock>
        <MdSearch />
        <input type='text' />
      </InputBlock>
      <button>Login</button>
    </HeaderTag>
  );
}

export default Header;
