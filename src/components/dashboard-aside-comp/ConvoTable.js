import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";

function ConvoTable() {

  const TableRow = [
    {
      id:1,
      peolpesName:'Fatima Adeleye',
      Conversation: '2',
      Insight: '6'
    },
    {
      id:1,
      peolpesName:'Fatima Adeleye',
      Conversation: '2',
      Insight: '6'
    },
    {
      id:1,
      peolpesName:'Fatima Adeleye',
      Conversation: '2',
      Insight: '6'
    },
    {
      id:1,
      peolpesName:'Fatima Adeleye',
      Conversation: '2',
      Insight: '6'
    },
    {
      id:1,
      peolpesName:'Fatima Adeleye',
      Conversation: '2',
      Insight: '6'
    }
  ]

  return (
    <div className='table-box'>
      <Table  bordered hover className=''>
        <thead>
          <tr className='table-heading'>
            <th>Name</th>
            <th>Conversation</th>
            <th>Insight</th>
            <th></th>
          </tr>
        </thead>
        {TableRow.map((item) => {
          return <TableBody key={item.id} peolpesName={item.peolpesName} Conversation={item.Conversation} Insight={item.Insight}/>
        })}
        
      </Table>
      <div className="d-flex justify-content-between align-items-center mt-4 ps-2 pe-3 pb-3 font-all">
            <p>Showing 1 to 5 of 5 results</p>
            <div className="d-flex gap-10">
                <Link to="#" className="form-control text-decoration-none font-all">Previous</Link>
                <Link to="#" className="form-control text-decoration-none font-all">Next</Link>
            </div>
        </div>
    </div>
  );
}

const TableBody = ({peolpesName, Conversation, Insight}) => {
  return (
    <tbody className='tabled font-all'>

          <tr>
            <td>{peolpesName}</td>
            <td>{Conversation}</td>
            <td>{Insight}</td>
            <td><Link to="#" className='text-decoration-none add-cl'>Add Conversation Edit</Link></td>
          </tr>
         
        </tbody>
  )
}

export default ConvoTable;