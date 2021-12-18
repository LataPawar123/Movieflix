import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
 
const [newUsers,setNewUsers]=useState([])
  
useEffect(()=>{

  const getNewUsers=async()=>{
    try{
     const  res = await axios.get("/users?new=true",{
       header:{
         token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYmIxYTZiNWI3NmVhZTFkZGUyNGEwYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTcxMzg1MiwiZXhwIjoxNjQwMTQ1ODUyfQ.UYi4aCRs9VoM35mNFEuVMcMu6Fs-hB1-SXCjLrrOYx0"  //url to be pasted here
       },
    });
    setNewUsers(res.data);   
    }catch(err){
      console.log(err);
    }
  };
  getNewUsers();
},[]);
 return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map(user=>(

        <li className="widgetSmListItem"> 
        
          <img
            src={users.profilePic ||
               "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>  
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      ))} 
      </ul>
    </div>
  );
}
