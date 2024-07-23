import './overview.css';
import Header from './header';

function Overview() {
    return (
      <div className="home">  
        <Header />
        <section className='sec-1'>

          <div className='total-balance'>
            <p className='smp'>Total Balance</p>
            <div className='semi-tb'>
              <span><b>$240,399</b> <p className='small-p'>All Accounts</p></span>
              <div className='card'>
  
                <div>
                  <p className='ssp'>Account Type</p>
                  <p>Credit card</p>
                  <p className='ssp'>**** **** **** 2589</p>
                </div>

                <div>
                  <div className='oop'>
                      <img src='./img/Mastercard.svg' className='master-card' alt='master icon'/>
                    <div className='op'>
                      <p> $25000</p>
                      <img src='./img/Frame 40276.svg' alt='cheeck'/>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className='goals'>
            <p className='smp'>Goals</p>

            <div className='simi-goal'>
              <span> <div className='go'> <b>$20,000</b> <a href='https://www.aha-music.com/#'><img src='./img/pen.svg' alt='gg'/> </a></div> <p className='small-p'>May, 2023</p></span>
              <div>

                <div className='target'>
                  <div >   </div>
                  <div>
                    <div className='tar-icon'> <img src='./img/target.svg' alt='target'/> <div><p className='ssp-ash'> Target Achieved</p>
                  <b> $12,500 </b></div></div> 
                  <div className='tar-text'> <img src='./img/octicon_goal-16.svg' alt='target'/> <div> <p className='ssp-ash'> This Mounth Target </p>
                  <b> $20,000 </b></div> </div>
                  </div>
                <div className='tar-graph'>
                  <img src='./img/Graph.svg' alt='graph' className='graph' />
                  <div> <p className='ssp-black'>$0</p> <b>$12k</b> <p className='ssp-black'>$20</p></div>
                  <p className='lack-text'> Terget Vs Achivement</p>
                </div>
                </div>
              </div> 
            </div>

          </div>

          <div className='upcoming-bills'>
            <div className='up-text'> <p className='smp'>Upcoming Bills</p> <a href='https://www.aha-music.com/#'><p className='ssp-ash' > view all »  </p></a></div>
            <div className='semi-upbills'>
            <div className='fig-1'> 
              <img src='.\img\may 15.svg' alt='w'/>
              <div>
                <p> Figma </p> 
                <b>Figma Mounthly</b>
              </div>
              <button className='fig-btn'>$150</button>
            </div>
            <hr/>
            <div className='fig-2'> 
              <img src='.\img\jun 16.svg' alt='w'/> 
              <div>
                <p><img src='.\img\Adobe.svg' alt='w'/></p>
                <b>Adobe Yearly</b>
              </div>
              <button className='fig2-btn'>$559</button>
            </div>
          </div>
          </div>

        </section>

        <section className='sec-2'>

          <div className='recent-transaction'>

          <div> <p className='smp'>Recent Transaction</p> </div>

          <div className='semi-rec-trans'>
            <div>
              <span className='span-ko'> <p className='ko'>All</p> <p className='ko'>Revenue</p> <p className='ko'>Expenses</p> </span>

              <div className='small-div'>
              <div className='icon-div'>
                <img src=".\img\gamepad.svg" alt="h" />
                  <div> <b> GTR 5</b> <p className='ssp-ash'>Gadget & Rear</p> </div>
                  </div>
                  <div className='div-doll'> 
                    <b>$160</b>
                    <p className="ssp-ash">17 may 2023</p>
                  </div>
              </div>

              <div className='small-div'>
              <div className='icon-div'>
                <img src=".\img\polo.svg" alt="h" />
                  <div> <b> Polo Shirt</b> <p className='ssp-ash'>XL fashion</p> </div>
                  </div>
                  <div className='div-doll'> 
                    <b>$20.00</b>
                    <p className="ssp-ash">17 may 2023</p>
                  </div>
              </div>

              <div className='small-div'>
              <div className='icon-div'>
                <img src=".\img\briyana.svg" alt="h" />
                  <div> <b> Briyani</b> <p className='ssp-ash'> Hajir Briyani</p> </div>
                  </div>
                  <div className='div-doll'> 
                    <b>$10.00</b>
                    <p className="ssp-ash">17 may 2023</p>
                  </div>
              </div>

              <div className='small-div'>
              <div className='icon-div'>
                <img src=".\img\taxi.svg" alt="h"/>
                  <div> <b>Taxi Fare</b> <p className='ssp-ash'>Uber</p> </div>
                  </div>
                  <div className='div-doll'> 
                    <b>$12.00</b>
                    <p className="ssp-ash">17 may 2023</p>
                  </div>
              </div>

              <div className='small-div'>
              <div className='icon-div'>
                <img src=".\img\keyboard.svg" alt="h" />
                  <div> <b> Keyboard</b> <p className='ssp-ash'>Gadget & Rear</p> </div>
                  </div>
                  <div className='div-doll'> 
                    <b>$22.00</b>
                    <p className="ssp-ash">17 may 2023</p>
                  </div>
              </div>

            </div>
          </div>
          </div>

          <div className='statistic-div'>
            <div className="staistics">
              <div> <p className='smp'>Staistics</p> </div>
              <div> 
                <select name="1" id="defualt"> 
                  <option><i className='bold'> Weekly Coparison </i> </option>
                  <option><i className='bold'> Daily Coparison </i> </option> 
                  <option><i className='bold'> mounthly Coparison </i> </option> 
                </select>
              </div>
              <div className='graph'>
                <img src="./img/Graph.png" alt="" />
              </div>
            </div>
            
            <div className="expenses">
              <div> <p className='smp'>Expenses and Breaked</p> </div>
              <div className='semi-expenses'>

                <div className='ex-1'>
                  <div className="subx-1">
                  <div> <img src=".\img\briyana.svg" alt="" />  </div>
                    <div>
                      <p className='ssp-ash'>Housing</p>
                      <p className='bold'>$250.00</p>
                      <p className="ssp-ash">15% <img src=".\img\Up arrow.svg" alt="arrow" /> </p>
                    </div>
                    <div> <img src=".\img\left arrow.svg" alt="" /> </div>
                  </div>

                  <div className="subx-1">
                  <div> <img src=".\img\briyana.svg" alt="" />  </div>
                    <div>
                      <p className='ssp-ash'>Housing</p>
                      <p className='bold'>$250.00</p>
                      <p className="ssp-ash">15% <img src=".\img\Up arrow.svg" alt="arrow" /> </p>
                    </div>
                    <div> <img src=".\img\left arrow.svg" alt="" /> </div>
                  </div>

                  <div className="subx-1">
                  <div> <img src=".\img\briyana.svg" alt="" />  </div>
                    <div>
                      <p className='ssp-ash'>Housing</p>
                      <p className='bold'>$250.00</p>
                      <p className="ssp-ash">15% <img src=".\img\Up arrow.svg" alt="arrow" /> </p>
                    </div>
                    <div> <img src=".\img\left arrow.svg" alt="" /> </div>
                  </div>
                </div>

                <div className='ex-2'>

                <div className="subx-2">
                  <div> <img src=".\img\briyana.svg" alt="" />  </div>
                    <div>
                      <p className='ssp-ash'>Housing</p>
                      <p className='bold'>$250.00</p>
                      <p className="ssp-ash">15% <img src=".\img\Up arrow.svg" alt="arrow" /> </p>
                    </div>
                    <div> <img src=".\img\left arrow.svg" alt="" /> </div>
                  </div>

                  <div className="subx-2">
                  <div> <img src=".\img\briyana.svg" alt="" />  </div>
                    <div>
                      <p className='ssp-ash'>Housing</p>
                      <p className='bold'>$250.00</p>
                      <p className="ssp-ash">15% <img src=".\img\Up arrow.svg" alt="arrow" /> </p>
                    </div>
                    <div> <img src=".\img\left arrow.svg" alt="" /> </div>
                  </div>

                  <div className="subx-2">
                  <div> <img src=".\img\briyana.svg" alt="" />  </div>
                    <div>
                      <p className='ssp-ash'>Housing</p>
                      <p className='bold'>$250.00</p>
                      <p className="ssp-ash">15% <img src=".\img\Up arrow.svg" alt="arrow" /> </p>
                    </div>
                    <div> <img src=".\img\left arrow.svg" alt="" /> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
        </div>
    );
}

export default Overview;