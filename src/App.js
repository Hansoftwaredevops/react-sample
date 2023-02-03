
import './App.css';
import './assets/css/custom.css';
import './assets/css/mobile.css';
import mainDepositIcon from './assets/img/main-deposit-icon.png';
import mainWithdrawIcon from './assets/img/main-withdraw-icon.png';
import mainExchangeIcon from './assets/img/main-exchange-icon.png';
import mainNoticeIcon from './assets/img/main-notice-icon.png';

function App() {
  return (
	<div className="App">
		<div class="main-header-container">
			<div class="main-header-menu">
				<div class="main-site-logo"></div>
				<div class="main-menu-deposit">
					<img alt="" src={mainDepositIcon} />
					<a href="index.html">Deposit</a>
				</div>
				<div class="main-menu-withdraw">
					<img alt="" src={mainWithdrawIcon} />
					<a href="index.html">Withdraw</a>
				</div>
				<div class="main-menu-exchange">
					<img alt="" src={mainExchangeIcon} />
					<a href="index.html">Exchange</a>
				</div>
				<div class="main-menu-notice">
					<img alt="" src={mainNoticeIcon} />
					<a href="index.html">Notice</a>
				</div>
				<div class="main-auth-menu">
					<div class="main-auth-menu-username">
						<input type="text" placeholder="USER ID" />
					</div>
					<div class="main-auth-menu-password">
						<input type="password" placeholder="PASSWORD" />
					</div>
					<button class="main-auth-menu-login">LOGIN</button>
					<button class="main-auth-menu-signup">SIGN UP</button>
				</div>
			</div>
		</div>


		<div class="banner-content-container">
			<div class="withdraw-ranking-list-group">
				<div class="top-one-week-withraw-group">
					<div class="top-one-week-withraw-header">
						<span class="font-10">RANK TOP 1 WEEK WITHDRAW</span>
						<button class="withdraw-ranking-view-btn">VIEW</button>
					</div>
					<div class="top-one-week-withraw-content">
						<div class="top-one-week-withraw-content-column">
							<span class="withdraw-ranking-date">[02-04 03:00] ****ng</span>
							<span class="withdraw-ranking-amount">000,000,000</span>						
						</div>
						<div class="top-one-week-withraw-content-column">
							<span class="withdraw-ranking-date">[02-04 03:00] ****ng</span>
							<span class="withdraw-ranking-amount">000,000,000</span>						
						</div>
						<div class="top-one-week-withraw-content-column">
							<span class="withdraw-ranking-date">[02-04 03:00] ****ng</span>
							<span class="withdraw-ranking-amount">000,000,000</span>						
						</div>
						<div class="top-one-week-withraw-content-column">
							<span class="withdraw-ranking-date">[02-04 03:00] ****ng</span>
							<span class="withdraw-ranking-amount">000,000,000</span>						
						</div>
						<div class="top-one-week-withraw-content-column">
							<span class="withdraw-ranking-date">[02-04 03:00] ****ng</span>
							<span class="withdraw-ranking-amount">000,000,000</span>						
						</div>
						<div class="top-one-week-withraw-content-column">
							<span class="withdraw-ranking-date">[02-04 03:00] ****ng</span>
							<span class="withdraw-ranking-amount">000,000,000</span>						
						</div>
						<div class="top-one-week-withraw-content-column">
							<span class="withdraw-ranking-date">[02-04 03:00] ****ng</span>
							<span class="withdraw-ranking-amount">000,000,000</span>						
						</div>
						<div class="top-one-week-withraw-content-column">
							<span class="withdraw-ranking-date">[02-04 03:00] ****ng</span>
							<span class="withdraw-ranking-amount">000,000,000</span>					
							<span class="line-5"></span>	
						</div>
					</div>
				</div>
				<div class="live-withdraw-group">
					<div class="live-withdraw-header">
						<span class="font-10">TODAY LIVE WITHDRAW</span>
						<button class="withdraw-ranking-view-btn">VIEW</button>
					</div>
					<div class="live-withdraw-content">
						<div class="live-withdraw-content-column">
							<span class="withdraw-ranking-date">[02-04 03:00] ****ng</span>
							<span class="withdraw-ranking-amount">000,000,000</span>	
						</div>
						<div class="live-withdraw-content-column">
							<span class="withdraw-ranking-date">[02-04 03:00] ****ng</span>
							<span class="withdraw-ranking-amount">000,000,000</span>	
						</div>
						<div class="live-withdraw-content-column">
							<span class="withdraw-ranking-date">[02-04 03:00] ****ng</span>
							<span class="withdraw-ranking-amount">000,000,000</span>	
						</div>
						<div class="live-withdraw-content-column">
							<span class="withdraw-ranking-date">[02-04 03:00] ****ng</span>
							<span class="withdraw-ranking-amount">000,000,000</span>	
						</div>
						<div class="live-withdraw-content-column">
							<span class="withdraw-ranking-date">[02-04 03:00] ****ng</span>
							<span class="withdraw-ranking-amount">000,000,000</span>	
						</div>
						<div class="live-withdraw-content-column">
							<span class="withdraw-ranking-date">[02-04 03:00] ****ng</span>
							<span class="withdraw-ranking-amount">000,000,000</span>	
						</div>
						<div class="live-withdraw-content-column">
							<span class="withdraw-ranking-date">[02-04 03:00] ****ng</span>
							<span class="withdraw-ranking-amount">000,000,000</span>	
						</div>
						<div class="live-withdraw-content-column">
							<span class="withdraw-ranking-date">[02-04 03:00] ****ng</span>
							<span class="withdraw-ranking-amount">000,000,000</span>	
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="live-games-container">	
			<div class="live-games-group">
				<div class="label-12"> LIVE GAMES</div>
				<div class="label-line"></div>
				<div class="live-games-group-row">
					<div class="live-games-group">
						<div class="live-games-banner"></div>
						<div class="live-games-banner-bg label-12">
							<span class="live-games-banner-label">OZ Gaming Baccarat Table No. 1</span>
						</div>
					</div>
					<div class="live-games-group">
						<div class="live-games-banner"></div>
						<div class="live-games-banner-bg label-12">
							<span class="live-games-banner-label">OZ Gaming Baccarat Table No. 2</span>
						</div>
					</div>
					<div class="live-games-group">
						<div class="live-games-banner"></div>
						<div class="live-games-banner-bg label-12">
							<span class="live-games-banner-label">OZ Gaming Baccarat Table No. 3</span>
						</div>
					</div>			
				</div>
				<div class="live-games-group-row">
					<div class="live-games-group">
						<div class="live-games-banner"></div>
						<div class="live-games-banner-bg label-12">
							<span class="live-games-banner-label">OZ Gaming Odd Even Table No. 1</span>
						</div>
					</div>
					<div class="live-games-group">
						<div class="live-games-banner"></div>
						<div class="live-games-banner-bg label-12">
							<span class="live-games-banner-label">OZ Gaming Gostop Table No. 1</span>
						</div>
					</div>		
				</div>			
			</div>
			<div class="slot-games-group">
				<div class="label-12"> SLOT GAMES</div>
				<div class="label-line"></div>
				<div class="slot-games-group-row">
					<div class="live-games-group">
						<div class="live-games-banner"></div>
						<div class="live-games-banner-bg label-12">
							<span class="live-games-banner-label">Wushi Cash</span>
						</div>
					</div>	
					<div class="live-games-group">
						<div class="live-games-banner"></div>
						<div class="live-games-banner-bg label-12">
							<span class="live-games-banner-label">Fortune Prime</span>
						</div>
					</div>	
					<div class="slot-games-group">
						<div class="slot-games-banner"></div>
						<div class="slot-games-banner-bg label-12">
							<span class="live-games-banner-label">King's Valley</span>
						</div>
					</div>		
					<div class="slot-games-group">
						<div class="slot-games-banner"></div>
						<div class="slot-games-banner-bg label-12">
							<span class="live-games-banner-label">Lifeguards</span>
						</div>
					</div>	
				</div>	
				<div class="slot-games-group-row">
					<div class="live-games-group">
						<div class="live-games-banner"></div>
						<div class="live-games-banner-bg label-12">
							<span class="live-games-banner-label">Spooky Halloween</span>
						</div>
					</div>	
					<div class="slot-games-group">
						<div class="slot-games-banner"></div>
						<div class="slot-games-banner-bg label-12">
							<span class="live-games-banner-label">x50 Mega</span>
						</div>
					</div>	
					<div class="slot-games-group">
						<div class="slot-games-banner"></div>
						<div class="slot-games-banner-bg label-12">
							<span class="live-games-banner-label">Flaming Star</span>
						</div>
					</div>	
					<div class="slot-games-group">
						<div class="slot-games-banner"></div>
						<div class="slot-games-banner-bg label-12">
							<span class="live-games-banner-label">Macau Dragon</span>
						</div>
					</div>		
					<div class="slot-games-group">
						<div class="slot-games-banner"></div>
						<div class="slot-games-banner-bg label-12">
							<span class="live-games-banner-label">Cash Rush</span>
						</div>
					</div>	
				</div>	
				<div class="slot-games-group-row">
					<div class="live-games-group">
						<div class="live-games-banner"></div>
						<div class="live-games-banner-bg label-12">
							<span class="live-games-banner-label">Diamond Respin</span>
						</div>
					</div>	
					<div class="live-games-group">
						<div class="live-games-banner"></div>
						<div class="live-games-banner-bg label-12">
							<span class="live-games-banner-label">Six Lightning</span>
						</div>
					</div>	
					<div class="slot-games-group">
						<div class="slot-games-banner"></div>
						<div class="slot-games-banner-bg label-12">
							<span class="live-games-banner-label">Double Diamond</span>
						</div>
					</div>		
					<div class="slot-games-group">
						<div class="slot-games-banner"></div>
						<div class="slot-games-banner-bg label-12">
							<span class="live-games-banner-label">Triple Diamond</span>
						</div>
					</div>	
				</div>		
			</div>
			<div class="table-games-group">
				<div class="label-12"> TABLE GAMES</div>
				<div class="label-line"></div>
				<div class="live-games-group-row">
					<div class="lg-table-games-group-column">
						<div class="lg-table-games-group-container">
							<div class="live-games-group">
								<div class="super-speed6-baccarat-banner"></div>
								<div class="live-games-banner-bg label-12">
									<span class="live-games-banner-label">Speed Super6 Baccarat</span>
								</div>
							</div>
							<div class="live-games-group">
								<div class="tongits-banner"></div>
								<div class="live-games-banner-bg label-12">
									<span class="live-games-banner-label">Tongits</span>
								</div>	
							</div>								
						</div>
						<div class="sm-table-games-group-container">						
							<div class="sm-table-games-group-column">
								<div class="sm-table-games-group">
									<div class="speed6-baccarat-banner"></div>
									<div class="sm-table-games-banner-bg label-12">
										<span class="live-games-banner-label">Super6 Baccarat</span>
									</div>
								</div>	
								<div class="sm-table-games-group">
									<div class="speed-baccarat-banner"></div>
									<div class="sm-table-games-banner-bg label-12">
										<span class="live-games-banner-label">Speed Baccarat</span>
									</div>
								</div>					
							</div>					
							<div class="sm-table-games-group-column">
								<div class="sm-table-games-group">
									<div class="sm-baccarat-banner"></div>
									<div class="sm-table-games-banner-bg label-12">
										<span class="live-games-banner-label">Baccarat</span>
									</div>
								</div>	
								<div class="sm-table-games-group">
									<div class="sm-pusoydos-banner"></div>
									<div class="sm-table-games-banner-bg label-12">
										<span class="live-games-banner-label">Pusoy Dos</span>
									</div>
								</div>					
							</div>							
						</div>		
					</div>
				</div>			
			</div>
		</div>
		<div class="main-footer">
			<div class="main-footer-container">
				<div class="footer-notice">
					<div class="footer-notice-group-container">
						<div class="footer-notice-group">
							<div class="footer-notice-banner"></div>
							<div class="footer-notice-content-group">
							<div class="footer-notice-title">Title</div>
							<div class="footer-notice-content">Content Text</div>
							<div class="footer-notice-date">2021-02-08</div>
							</div>
						</div>
						<div class="footer-notice-group">
							<div class="footer-notice-banner"></div>
							<div class="footer-notice-content-group">
							<div class="footer-notice-title">Open the site EVENT</div>
							<div class="footer-notice-content">Welcome to out site. Fires a great ope..</div>
							<div class="footer-notice-date">2021-02-08</div>
							</div>
						</div>
						<div class="footer-notice-group">
							<div class="footer-notice-banner"></div>
							<div class="footer-notice-content-group">
							<div class="footer-notice-title">Open the site EVENT</div>
							<div class="footer-notice-content">Welcome to out site. Fires a great ope..</div>
							<div class="footer-notice-date">2021-02-08</div>
							</div>
						</div>					
					</div>
				</div>			
				<div class="footer-nav-link-container">
					<div class="footer-nav-links">
						<div class="footer-nav-link-title">NAVIGATE</div>
						<div class="footer-nav-content">
							<a href="index.html" class="footer-nav-content-link">Deposit</a>
							<a href="index.html" class="footer-nav-content-link">Withdraw</a>
							<a href="index.html" class="footer-nav-content-link">Withdraw Board</a>
							<a href="index.html" class="footer-nav-content-link">Exchange</a>
							<a href="index.html" class="footer-nav-content-link">Notice</a>
							<a href="index.html" class="footer-nav-content-link">Message (0)</a>
							<a href="index.html" class="footer-nav-content-link">Live Chatting</a>
							<a href="index.html" class="footer-nav-content-link">Profile</a>
						</div>
					</div>				
				</div>
				<div class="footer-game-container">
					<div class="footer-game-title">GAMES</div>
					<div class="footer-game-section">				
						<div class="footer-game-section-div">
							<a href="index.html" class="footer-game-section-links">OZ Gaming</a>
						</div>	
						<div class="footer-game-section-div">
							<a href="index.html" class="footer-game-section-links">GG Gaming</a>				
						</div>
						<br /><br /><br /><br /><br />
					</div>
				</div>
				<div class="footer-contact-us-container">
					<div class="footer-contact-us-title">CUSTOMER</div>
					<a href="index.html" class="footer-contact-us-content">Contact Us</a>
				</div>
				<div class="footer-partner-banners"></div>
				<div class="footer-translation-container">
					<div class="footer-translation-dropdown">
						<select class="footer-translation-select">
							<option class="footer-translation-option" selected="">EN</option>
							<option class="footer-translation-option">KR</option>
							<option class="footer-translation-option">CH</option>
						</select>
					</div>
					<div class="footer-copyright-label">
						<span>OZ Entertainment Corp.</span>
					</div>
				</div>
			</div>
		</div>
	</div>
  );
}

export default App;
