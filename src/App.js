import './app.scss'
import MiddleContainter from './Components/MiddleContent/MiddleContainter';
import RightContainer from './Components/RightContent/RightContainer';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      {/* SideBar */}
      <Sidebar />

      {/* Middle Content */}
      <MiddleContainter />

      {/* RightSide News Feeds */}
      <RightContainer />
    </div>
  );
}

export default App;
