import './Navbar.css';
import Mobilenav from './mobilenav';

function Nav() {
    return (
      <div className="nav">
      <Mobilenav />
        <h3>FINEbank.IO</h3>
        <div className='active-btn'>
            <div className='top-btn'>
              <button> <img src="./img/Overview.svg" alt="jj"/> <p className='btn-p'>Overview</p> </button>
              <button> <img src="./img/Wallet.svg" alt="jj"/> <p className='btn-p'> Balance</p> </button>
              <button> <img src="./img/Transaction.svg" alt="jj"/> <p className='btn-p'>Transactions </p></button>
              <button> <img src="./img/Vector.svg" alt="jj"/> <p className='btn-p'> Bills</p> </button>
              <button> <img src="./img/Expencces.svg" alt="jj"/> <p className='btn-p'>Expenses</p> </button>
              <button> <img src="./img/Goal.svg" alt="jj"/><p className='btn-p'> Goals </p></button>
              <button> <img src="./img/Settings.svg" alt="jj"/><p className='btn-p'> Settings</p> </button>
            </div>

              <div className='btm-button'>
                <button className='logout-btn'> <img src="./img/Logout.svg" alt="jj"/> <p className='btn-p'>Logout</p>  </button>
                <hr className='logout-line' />
              </div>

              <div className='vu-profile'>
                <div className='profile'>
                  <img src="./img/Image.png" alt="jj"/>
                </div>

                <div className='profile-img'>
                  <p className='Tanzir's>Tanzir Raman</p>
                  <a href='https://www.youtube.com/account'>view profile</a>
                </div>
                
              </div>
          </div>
      </div>
    );
  }
export default Nav;