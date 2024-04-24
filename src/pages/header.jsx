 import './header.css'; 

function Header() {
    return (
      <div className="Header">
        <header>
            <p><b>Hello Tanzan</b> » May 19, 2023</p>
            <div className='left-header'>
              <img src='./img/clarity_notification-solid-badged.svg' alt='notification'/>
                <div className='search'>
                  <input placeholder='search here'/> <img src='./img/search.svg' alt='🔎' />
                </div>
            </div>
        </header>
      </div>
    );
  }
  
  export default Header;
  