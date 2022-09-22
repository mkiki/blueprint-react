import './App.css';
import { Shell, ShellBody } from './Shell';
import HeaderBar from './HeaderBar';
import LeftMenuRail from './LeftMenuRail';
import Content from './Content';
import BreadCrumb from './BreadCrumb';
import RightRail from './RightRail';

function App() {
  return (
    <div className="App">
      <Shell>
        <HeaderBar title="Welcome to React-Blueprints" logo="anchor"></HeaderBar>
          <ShellBody>
            <LeftMenuRail collapsed={false}></LeftMenuRail>
            <Content>
              <BreadCrumb items={[ "Audiences", "Add new audience source" ]}></BreadCrumb>
              <RightRail></RightRail>
            </Content>
          </ShellBody>
      </Shell>
    </div>
  );
}

export default App;

