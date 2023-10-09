// Example component using the Axios instance
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import the Axios instance

import MyForm from './MyForm';

function Example(props) {
  const [data, setData] = useState(null);
  const [expired,setExpired]=useState(null);

  useEffect(()=>{
    if(localStorage.getItem('token') === null || localStorage.getItem('token') === undefined){
        props.history.push('/')
    }

    // document.getElementById('body').style.backgroundColor='white';
},[])

  const token = localStorage.getItem('token');
 // localStorage.setItem('token','eyJraWQiOiI1RDVOdFM1UHJBajVlSlVOK1RraXVEZE15WWVMMFJQZ3RaUDJGTlhESHpzPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206Y291bnRyeSI6IlBIIiwic3ViIjoiOTdmNTA0OWYtZDBmNC00MDRmLTg5N2MtM2RkMzhjYWExODRiIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImN1c3RvbTpwZXJzb25hbGl6YXRpb25BdXRoIjoiMSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX0FVSGdRMDhDQiIsImNvZ25pdG86dXNlcm5hbWUiOiI5N2Y1MDQ5Zi1kMGY0LTQwNGYtODk3Yy0zZGQzOGNhYTE4NGIiLCJjdXN0b206Y29tcGFueSI6ImtvcnZlciIsImF1ZCI6IjFlZ3M2M3E5OXAzc2ViZWNoc2I3Mjl0ODBvIiwiZXZlbnRfaWQiOiI1NDFkY2EzZC1iMTk5LTRiYmUtYWRkNS1kYjUyNTU2NWY1NDEiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTY5NDYwNzY4MywibmFtZSI6ImZyYXMiLCJleHAiOjE2OTQ2OTQwODMsImlhdCI6MTY5NDYwNzY4MywiZmFtaWx5X25hbWUiOiJzaWx2IiwiZW1haWwiOiJjb25zaXN0ZW5nb2xmMUBnbWFpbC5jb20iLCJjdXN0b206bWFya2V0aW5nQXV0aCI6IjEifQ.j2wGS0RFsNaShyTVfaddleK59NxQeSPn4fVqS7hwNl7Nk36qqae7IIyJDKCN8nFzJEmVluFA83bUfNPqQpf3Z3J64T7Wxwl5joLtf-IfWJLS55zplt50yM0fAT8cert5ffIcrLFOeInDP6ksyXC_AI33p6q6PosUzfrl9TtElmTXbwn8EkVSJXP4aM4VR6cnLa62SUYhq6RmJMq-20zC4hUBFIlp7w62oPgI1NXZhdMcwZ4meINVOojvHS8c4hu7rTce8eWqvRreEK0Ho3_8hcLrHexj95EUfm5EDXLeOaF6GEcjNl4ntkHuBALBiLGMGeL-30sQLKVxqGqcJyxvkg');
     const config = {
        headers: { 'Authorization': `Bearer ${token}`,
        'Content-type':'application/json'
     } 
    };  
  useEffect(() => {
    axios.post('https://nlapi.expert.ai/v2/analyze/standard/en/entities',{
            document:{
                text:'Michael Jordan was one of the best basketball players of all time. Scoring was Jordan stand-out skill, but he still holds a defensive NBA record, with eight steals in a half.'
            }
        },config).then((response) => {
        
        setData(response.data);
        if(data === null || data=== undefined){
          props.history.push('/');
        }
      })
      .catch((error) => {
        // setToken (false);
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {/* Display the fetched data */}Data:
      <h2>Patients:</h2>

       <a href="https://drchrono.com/o/authorize/?redirect_uri='https://lighthouse247.com/drchrono/drc_connect.php'&?response_type=code
     &client_id=CyKPHeQH1SIYZpRqDMfkxbjwnVzk4FfuCLPliz3T&state=''&scope=users:read" className="cLink">Connect Your Account</a>
      {/* <MyForm /> */}
      {/* <a href='https://developer.expert.ai/oauth2/token'>Connect</a> */}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default Example;