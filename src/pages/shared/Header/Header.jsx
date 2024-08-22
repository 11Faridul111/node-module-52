import logo from '../../../assets/assets/logo.png'
import moment from 'moment';
const Header = () => {
      return (
            <div className='text-center space-y-2'>
                <img className='mx-auto' src={logo} alt="" />
                <p>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM D, YYYY, h:mm:ss a")}</p>
            </div>
      );
};

export default Header;