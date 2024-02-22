// import React, { useEffect, useState } from 'react';
// import {Table,Button} from 'react-bootstrap';
// import { FaUserEdit} from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// //import {v4 as uuidv4}  from 'uuid';
// import './todolist.css';

// const TodoList = () => {

//   const [list, setlist]=useState('');
//   const [addlist,setaddlist]=useState([]);
//   const navigate=useNavigate();

//   const fetchtitles=()=>
//   {
//     axios.get("http://localhost:3002/posts")
//     .then((response)=>{setaddlist(response.data)})
//     .catch((error)=>console.log(error));
//   };
//   useEffect(()=>
//   {
//      fetchtitles();
//   },[]);
//   const handleaddtitle=(event)=>
//   {
//     event.preventDefault();
//     if(!list)
//     {
//       alert('please Enter title..!');
//       return;
//     }
//     //const ids=uuidv4();
//     axios.post("http://localhost:3002/posts",{title:list,isPublished:false,})
//     .then((response)=>{
//        if(response.status===201)
//        {
//         fetchtitles();
//         setlist('');
//        }

//     })
//     .catch((error)=>console.log(error))
//   }

//   const handledelete=(id)=>
//   {
//     axios.delete(`http://localhost:3002/posts/${id}`)
//     .then((response)=>{
//       if(response.status===200)
//       {
//        fetchtitles();

//       }

//    })
//    .catch((error)=>console.log(error))
//   }

//   const handleedit=(id,title,isPublished)=>
//   {
//     navigate(`/list/${id}`,
//     {
//     state:{id,title,isPublished}
//     });
//   //   const formdata ={title:'Manohar'};
//   //   axios.put(`http://localhost:3002/posts/${id}`,formdata)
//   //   .then((response)=>{
//   //     if(response.status===200)
//   //     {
//   //      fetchtitles();

//   //     }

//   //  })
//   //  .catch((error)=>console.log(error))

//   }
//   return (
//     <div className='container'>
//       <h1>ToDoLiSt</h1>
//       <form onSubmit={handleaddtitle}>
//         <input type='text' value={list} onChange={(e)=>setlist(e.target.value)}
//         placeholder='Enter title'/>
//         <button type='submit' id='button'>Add Title</button>
//       </form>
//       <Table striped bordered hover className=' tableconatiner' variant="dark">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>TITLE</th>
//             <th>PUBLISHED?</th>
//             <th>Actions</th>

//           </tr>
//         </thead>
//         <tbody>
//          {addlist.map(({id,title,isPublished})=>
//          (
//           <tr key={id}>
//           <td>{id}</td>
//           <td>{title}</td>
//           <td>{{isPublished}? "Yes":"No"}</td>
//           <td id='actionsbutton'> <Button variant="warning" onClick={()=>handleedit(id,title,isPublished)}><FaUserEdit /></Button>
//           <Button variant="danger" onClick={()=>{handledelete(id)}}><MdDelete size={20}  /></Button></td>
//         </tr>
//          ))}
//         </tbody>
//       </Table>
//     </div>
//   )
// }

// export default TodoList;





import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";
//import {v4 as uuidv4}  from 'uuid';
import "./todolist.css";

const TodoList = () => {
  const [list, setlist] = useState("");
  const [addlist, setaddlist] = useState([]);

  const fetchtitles = () => {

    axios
      .get("http://localhost:3002/posts")
      .then((response) => {
        setaddlist(response.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchtitles();
  }, []);
  const handleaddtitle = (event) => 
  {
    event.preventDefault(); 
     if (!list) {
      alert("please Enter title..!");
      return;
    }
    //const ids=uuidv4();
    axios.post("http://localhost:3002/posts", { title:list,isPublished:false })
      .then((response) => {
        if (response.status === 201) {
          fetchtitles();
          setlist("");
        }
      })
      .catch((error) => console.log(error));
  };

  const handledelete = (id) => {
    axios
      .delete(`http://localhost:3002/posts/${id}`)
      .then((response) => {
        if (response.status === 200) {
          fetchtitles();
        }
      })
      .catch((error) => console.log(error));
  };

  // const handleEdit = (id, newTitle) => {
  //   axios
  //     .put(`http://localhost:3002/posts/${id}`, [{ title: newTitle }])
  //     .then((response) => {
  //       if (response.status === 200) {
  //         fetchtitles();
  //       }
  //     })
  //     .catch((error) => console.log(error));
  // };

  const [editableId, setEditableId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");

  const handleEditClick = (id, title) => {
    setEditableId(id);
    setEditedTitle(title);
  };

  const handleSaveEdit = (id) => {
   // handleEdit(id, editedTitle);

   // console.log(id,editedTitle);
    axios
      .put(`http://localhost:3002/posts/${id}`, { title: editedTitle })
      .then((response) => {
        if (response.status === 200) {
          fetchtitles();
          setEditableId(null);
          setEditedTitle("");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <h1>ToDoLiSt</h1>
      <form onSubmit={handleaddtitle}>
        <input
          type="text"
          value={list}
          onChange={(e) => setlist(e.target.value)}
          placeholder="Enter title"
        />
        <button type="submit" id="button">
          Add Title
        </button>
      </form>
      <Table striped bordered hover className=" tableconatiner" variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>PUBLISHED?</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {addlist.map(({ id, title, isPublished }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>
                {editableId === id ? (
                  <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                  />
                ) : (
                  title
                )}
              </td>
              <td>{isPublished ? "Yes" : "No"}</td>
              <td id="actionsbutton">
                {editableId === id ? (
                  <Button variant="warning" onClick={()=>handleSaveEdit(id)} >
                    Save
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="warning"
                      onClick={() => handleEditClick(id, title)}
                    >
                      <FaUserEdit />
                    </Button>
                    <Button variant="danger" onClick={() => handledelete(id)}>
                      <MdDelete size={20} />
                    </Button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TodoList;
