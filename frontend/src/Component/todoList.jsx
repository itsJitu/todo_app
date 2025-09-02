import React from "react";

function todoList() {
  return (
    <div style={{padding:'12px 24px', }}>
      <main style={{border:'1px solid #000', borderRadius:'12px'}}>
        <div style={{display:'flex', justifyContent:'center', padding:'12px 24px', borderRadius:'12px'}}>
          <h1>To-Do List </h1>
        </div>
        
        {/* header */}
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'12px 24px', width:'100%', gap:'5%'}}>

            <div style={{ padding:'8px', backgroundColor:'#e6e6e6', borderRadius:'8px', textAlign:'center',border:'1px solid red', width:'40%'}}>
                <span>Add a new to-do</span>
            </div>

            <div style={{display:'flex', padding:'12px 24px', gap:'20%', width:'100%', }}>
                <div style={{padding:'8px', backgroundColor:'#007aff', borderRadius:'8px', textAlign:'center', color:'#e6e6e6', width:'20%'}}>
                    <span>All</span>
                </div>
                <div style={{padding:'8px', backgroundColor:'#e6e6e6', borderRadius:'8px', textAlign:'center',border:'1px solid red', width:'15%' }}>
                    <span>To-Do</span>
                </div>
                <div style={{padding:'8px', backgroundColor:'#e6e6e6', borderRadius:'8px', textAlign:'center',border:'1px solid red', width:'15%'}}>
                    <span>Completed</span>
                </div>
            </div>
        </div>


      </main>
              <div>
            <table style={{width:'100%', }}>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>when</th>
                        <th>Priority</th>
                        <th>Fulfillment</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tbody>
            </table>
        </div>
    </div>
  );
}

export default todoList;
