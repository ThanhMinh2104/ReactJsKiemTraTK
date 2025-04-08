export default function Content() {
    return (
        <div className="content">
            <div className="overview">
                <h1>Overview</h1>
                <ul>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
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
                                <th>NameColoum</th>
                                <th>NameColoum</th>
                                <th>NameColoum</th>
                                <th>NameColoum</th>
                                <th>NameColoum</th>
                                <th>NameColoum</th>
                                <th>NameColoum</th>
                            </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>Dữ liệu 1.1</td>
                            <td>Dữ liệu 1.2</td>
                            <td>Dữ liệu 1.3</td>
                            <td>Dữ liệu 1.1</td>
                            <td>Dữ liệu 1.2</td>
                            <td>Dữ liệu 1.3</td>
                            <td>Dữ liệu 1.2</td>

                        </tr>
                        <tr>
                            <td>Dữ liệu 2.1</td>
                            <td>Dữ liệu 2.2</td>
                            <td>Dữ liệu 2.3</td>
                            <td>Dữ liệu 1.1</td>
                            <td>Dữ liệu 1.2</td>
                            <td>Dữ liệu 1.3</td>
                            <td>Dữ liệu 1.2</td>
             
                        </tr>
                        <tr>
                            <td>Dữ liệu 3.1</td>
                            <td>Dữ liệu 3.2</td>
                            <td>Dữ liệu 3.3</td>
                            <td>Dữ liệu 1.1</td>
                            <td>Dữ liệu 1.2</td>
                            <td>Dữ liệu 1.3</td>
                            <td>Dữ liệu 1.2</td>
              
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