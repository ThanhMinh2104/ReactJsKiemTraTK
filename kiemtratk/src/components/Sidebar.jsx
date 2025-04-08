import square from "/imgs/Squares four 1.png"
import Projects from "/imgs/Folder.png"
import Integrations from "/imgs/Code.png"
import Teams from "/imgs/Groups.png"
import Analytics from "/imgs/Pie chart.png"
import Messages from "/imgs/Chat.png"
import logo from "/imgs/Image 1858.png"
import group from "/imgs/Group.png"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <ul className="sidebar-list">
                <li className="sidebar-item">
                    <img src={logo} alt="" />
                </li>
                <li className="sidebar-item active">
                    <img src={square} alt="" />
                    <span>Dashboard</span>
                </li>
                <li className="sidebar-item">
                    <img src={Projects} alt="" />
                    <span>Projects</span>
                </li>
                <li className="sidebar-item">
                    <img src={Teams} alt="" />
                    <span>Teams</span>
                </li>
                <li className="sidebar-item">
                    <img src={Analytics} alt="" />
                    <span>Analytics</span>
                </li>
                <li className="sidebar-item">
                    <img src={Messages} alt="" />
                    <span>Messages</span>
                </li>
                <li className="sidebar-item">
                    <img src={Integrations} alt="" />
                    <span>Integrations</span>
                </li>
            </ul>

            <div className="container-sidebar_group">
                <img className="sidebar_group" src={group} alt="" />
                <button>Try now</button>
            </div>
        </div>
    )
}