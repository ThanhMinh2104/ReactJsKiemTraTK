import { useState } from "react"
import { useEffect } from "react"
import { data } from "react-router-dom"

export default function Content() {
    const [overviews, setOverView] = useState([])
    const [datas, setData] = useState([])

    useEffect(() =>{
        fetch("http://localhost:3000/overview")
            .then(resp => resp.json())
            .then(datas => 
                setOverView(datas)
            )
    }, [])

    useEffect(() =>{
        fetch("http://localhost:3000/table")
            .then(resp => resp.json())
            .then(data => 
                setData(data)
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
                                <th className="customer_check"><input type="checkbox" name="" id="" /></th>
                                <th>CUSTOMER NAME</th>
                                <th>COMPANY</th>
                                <th>ORDER VALUE</th>
                                <th>ORDER DATE</th>
                                <th className="colum_status">STATUS</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                datas.map((data) => (
                                    <tr key={data.id}>
                                        <td className="customer_check"><input type="checkbox" name="" id="" /></td>
                                        <td className="customer_name">
                                            <img src={data.img} className="customer_avatar" alt="" />
                                            {data.name}
                                        </td>
                                        <td>{data.company}</td>
                                        <td>{data.orderValue}</td>
                                        <td>{data.orderDate}</td>
                                        <td className="row_status">{data.status}</td>
                                        <td className="customer_edit"><i className="fa-solid fa-pen"></i></td>
                                    </tr>
                                ))
                            }
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