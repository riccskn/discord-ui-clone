import './App.css'
import Layout from "./components/Layout";
import ServerList from "./components/ServerList";
import GlobalStyle from "./styles/GlobalStyle";
import ServerName from "./components/ServerName";
import ChannelList from "./components/ChannelList";
import ChannelInfo from "./components/ChannelInfo";
import ChannelData from "./components/ChannelData";
import MembersList from "./components/MembersList";
import UserInfo from "./components/UserInfo";

function App() {

  return (
    <>
    <GlobalStyle/>

    <Layout>
      <ServerList/>
      <ChannelList/>
      <UserInfo/>
      <ChannelInfo/>
      <ChannelData/>
      <MembersList/>
    </Layout>
    </>
  )
}

export default App
