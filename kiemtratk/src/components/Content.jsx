import { useState } from "react"
import { useEffect } from "react"
import img1 from "../imgs/data1.png"
import { data } from "react-router-dom"

export default function Content() {
    const [overviews, setOverView] = useState([])

    useEffect(() =>{
        fetch("http://localhost:3000/overview")
            .then(resp => resp.json())
            .then(data => 
                setOverView(data)
            )
    }, [])
    
    return (
        <div className="content">
            <div className="overview">
                <h1>Overview</h1>
                <ul>
                    {
                        overviews.map((overview) => (
                            <li key={overview.id} className="overview-item">
                                <div className="overview-item_data">
                                    <h4 className="overview_item-title">{overview.title}</h4>
                                    <h1 className="overview_item-cost">${overview.value}</h1>
                                    <p className="overview_item-perchange">{overview.changePercent} period of change</p>
                                </div>
                                <div
                                    className="overview-item_icon"
                                    dangerouslySetInnerHTML={{ __html: overview.icon }}
                                ></div>

                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="detailReport">
                <div className="detailReport_header">
                    <span>Detail Report</span>
                    <div className="detailReport_io">
                        <button>Import</button>
                        <button>Export</button>
                    </div>
                </div>

                <div className="detailReport_table">
                    <table>
                        <thead>
                            <tr>
                                <th><input type="checkbox" name="" id="" /></th>
                                <th>CUSTOMER NAME</th>
                                <th>COMPANY</th>
                                <th>ORDER VALUE</th>
                                <th>ORDER DATE</th>
                                <th>STATUS</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td><input type="checkbox" name="" id="" /></td>
                                <td className="customer_name">
                                    <img src={img1} className="customer_avatar" alt="" />
                                    Elizabeth Lee
                                </td>
                                <td>Avatar System</td>
                                <td>$359</td>
                                <td>10/07/2023</td>
                                <td>New</td>
                                <td className="customer_edit"><i className="fa-solid fa-pen"></i></td>
                            </tr>

                            <tr>
                                <td><input type="checkbox" name="" id="" /></td>
                                <td className="customer_name">
                                    <img src={img1} className="customer_avatar" alt="" />
                                    Elizabeth Lee
                                </td>
                                <td>Avatar System</td>
                                <td>$359</td>
                                <td>10/07/2023</td>
                                <td>New</td>
                                <td className="customer_edit"><i className="fa-solid fa-pen"></i></td>
                            </tr>
                            
                            <tr>
                                <td><input type="checkbox" name="" id="" /></td>
                                <td className="customer_name">
                                    <img src={img1} className="customer_avatar" alt="" />
                                    Elizabeth Lee
                                </td>
                                <td>Avatar System</td>
                                <td>$359</td>
                                <td>10/07/2023</td>
                                <td>New</td>
                                <td className="customer_edit"><i className="fa-solid fa-pen"></i></td>
                            </tr>

                            <tr>
                                <td><input type="checkbox" name="" id="" /></td>
                                <td className="customer_name">
                                    <img src={img1} className="customer_avatar" alt="" />
                                    Elizabeth Lee
                                </td>
                                <td>Avatar System</td>
                                <td>$359</td>
                                <td>10/07/2023</td>
                                <td>New</td>
                                <td className="customer_edit"><i className="fa-solid fa-pen"></i></td>
                            </tr>

                            <tr>
                                <td><input type="checkbox" name="" id="" /></td>
                                <td className="customer_name">
                                    <img src={img1} className="customer_avatar" alt="" />
                                    Elizabeth Lee
                                </td>
                                <td>Avatar System</td>
                                <td>$359</td>
                                <td>10/07/2023</td>
                                <td>New</td>
                                <td className="customer_edit"><i style={{display: "block"}} className="fa-solid fa-pen"></i></td>
                            </tr>
                        </tbody>

                    </table>
                </div>

                <div className="detailReport_footer">
                    <div className="detailReport_result">63 results</div>
                    <ul className="detailReport_changPage">
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}