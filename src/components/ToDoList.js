import React, { Component } from 'react'


class ToDoList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0,
             SerialNumber : 1,
             description : ''
            
        }
    }

    
    clickhandler = (n)=>{
        console.log(this.state.count)
        
        var table = document.getElementById("dataList");
        var row = table.insertRow(this.state.count+1 );
        // var tr = n.parentNode.parentNode.cloneNode(true);
        // document.getElementById('tbl').appendChild(tr);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

       
        cell1.innerHTML =`${this.state.count + 1}`;
        cell2.innert=<input type="checkbox"></input>
        var x = document.createElement("INPUT");
        x.setAttribute("type", "checkbox");
       
        cell2.append(x) ;        
      
        var y = document.createElement("INPUT");
        y.setAttribute("type", "text");
        y.setAttribute("value", `${this.state.description}`);
        cell3.append(y) ; 
      
        this.setState(previousState =>{
            
      
      
         return { 
              count : previousState.count + 1 
               
          }
       
        })
     
        
    }

    deletehandler =()=>{

        this.setState({

        })
    }
    render() {
        const {count} = this.state 
        return (
            <div>
                <h1> To do List </h1>

                <button onClick={this.clickhandler}>Add Task </button>
                <button onClick={this.deletehandler}>Delete task </button>
                <br></br>
                <center>
                <table id="dataList" >
                    <tbody id="body">
                    
                    <tr>
                        <th width = "150" align="left">count</th>
                        <th width = "150" align="left">Done</th>
                        <th width = "150"  align="left">decription</th>
                        
                    </tr>
                    <tr>
                    <td width="150">
                         
                        </td>
                        <td width="150">
                    
                        </td>
                        <td width="150">
                  
                        </td>
                    </tr>
                    </tbody>
                </table>
                </center>
            
            </div>
        )
    }
}

export default ToDoList
