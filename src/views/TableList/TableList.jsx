import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import "./Tablelist.css";
import Popup from "reactjs-popup";
import Card from "components/Card/Card.jsx";
import axios from 'axios';
import '../Icons/Icons.css';

class TableList extends Component {
constructor(props){
  super(props);
  this.state={
    icon:"fa fa-sort",
    thArray:[],
    tdArray:[],
    headingCheck:false,
    headingClicked: false,
    showModal:false
  }
  this.iconclick=this.iconclick.bind(this);
  this.compareBy.bind(this);
  this.sortBy.bind(this);
 
}

oncheck(event){
  console.log("hello")
  const checkboxes = this.form;
  console.log(this.form);
  console.log("checkboxes",checkboxes);
  console.log(checkboxes.name)
  if(checkboxes.name==="pet"){
event.target.checked
  }
  if(this.state.on===""){
    this.setState({
      on:"checked",
      on1:"checked"
    })
  }
  if(this.state.on==="checked"){
    this.setState({
      on:"",
      on1:""
    })
  }
 
}
iconclick(){
  if(this.state.icon==="fa fa-sort")
 {
  this.setState({
    icon:"fa fa-sort-desc",
    
   })
   
 } 
 if(this.state.icon==="fa fa-sort-desc"){
  this.setState({
    icon:"fa fa-sort-asc",
   
   })
  
 }
 if(this.state.icon==="fa fa-sort-asc"){
  this.setState({
    icon:"fa fa-sort-desc"
   })
 }
this.sortBy("2");
}
compareBy(key) {
  return function (a, b) {
    console.log("a   ",a[key],b[key])
    if (a[key] < b[key]) {
      
      console.log("b");
      return -1;}
    if (a[key] > b[key]) {
      console.log("a");
      return 1;
    }
    return 0;
  };
}

toggleModal = () => {
  console.log("ksdcbebwk")
  this.setState({
    showModal:!this.state.showModal
  })
}

sortBy=(key)=> {
  console.log("sortBy",key)
  let arrayCopy = this.state.tdArray;
if(this.state.icon==="fa fa-sort-desc"){
  console.log("this.state.icon",this.state.icon)
 arrayCopy.reverse( arrayCopy.sort(this.compareBy(key)));
  this.setState({tdArray: arrayCopy});
}
if(this.state.icon==="fa fa-sort-asc"){
  arrayCopy.sort(this.compareBy(key));
  this.setState({tdArray: arrayCopy});
}
if(this.state.icon==="fa fa-sort"){
  arrayCopy.sort(this.compareBy(key));
  this.setState({tdArray: arrayCopy});
}
}
rowCheckboxClick = (key) => {
  let arrayCopy=this.state.tdArray;
  arrayCopy[key][0]=!arrayCopy[key][0];
  this.setState({tdArray:arrayCopy})
  let i;
  for(i=0;i<arrayCopy.length;i++)
  {
    if((arrayCopy[i][0]!==true))
    {
      break;
    }
  }
  if(i!==(arrayCopy.length)){
      this.setState({
        headingCheck:false    
      })
  }
  else{
    this.setState({
      headingCheck:true   
    })
  }
}
headerCheckboxClick = () => {
  let arrayCopy=this.state.tdArray;
  this.setState({
    headingCheck:!this.state.headingCheck
  })
  arrayCopy.map((prop,key) => {
     prop[0]=!this.state.headingCheck;
  })
 }
 componentDidMount() {
  axios.get(`http://localhost:3300`)
    .then(res => {
      this.setState({
        tdArray:res.data.tdArray,
        thArray:res.data.thArray
      })
    })
}
 render() {

    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card

                ctTableFullWidth
                ctTableResponsive
                content={
                  <div>
                    <button className="rose" title="Add Function Access" style={{ outline:"none", float: "right", paddingLeft:"15px",paddingRight:"15px",paddingTop:"10px",paddingBottom:"10px", border: "2px solid  #777777", borderRadius: "20px", marginRight: "20px" }}  ><i className="fa fa-user-plus fa-1x "> </i></button>
                    <br></br>
                <br></br>

               <button className="rose" title="Toggle" style={{ float: "left",outline:"none",  paddingLeft:"15px",paddingRight:"15px",paddingTop:"10px",paddingBottom:"10px", border: "2px solid  #777777", borderRadius: "20px", marginLeft: "20px"}} ><i className="fa fa-th-list fa-1x"> </i></button>
                    
                    <div className="dropdown" style={{display:"inline"}}>
                    &nbsp;&nbsp;&nbsp;
    <button title="columns" className="btn dropdown-toggle rose " type="button" data-toggle="dropdown" style={{borderRadius:"30px",padding:"10px"}}><i class="fa fa-columns" aria-hidden="true"></i>
    <i className="fa fa-sort-desc" aria-hidden="true"></i></button>
    <ul className="dropdown-menu" style={{right:"600px",left:"0px",width:"50px",top:"28px"}}>
      <li style={{borderBottom:"1px solid #eee"}}><a href="#"><input type="checkbox" checked/>&nbsp;ROLE</a></li>
      <li style={{borderBottom:"1px solid #eee"}}><a href="#"><input type="checkbox" checked/>&nbsp;FUNCTION</a></li>
      <li style={{borderBottom:"1px solid #eee"}}><a href="#"><input type="checkbox" checked/>&nbsp;ACTION</a></li>
    </ul>
  </div>
            <br></br>
                    <br></br>
                  
                    <input style={{ marginLeft: "15px", color: "black", width: "97%", boxSizing: "border-box", border: "2px solid #ccc", borderRadius: "4px", fontSize: "16px", backgroundColor: "white", padding: "10px" }} type="text" name="search" placeholder="Search"></input>
                  
                    <br></br>
                    <br></br>
                    <Table hover>
                      <thead>
                        <tr>
                          {this.state.thArray.map((prop, key) => {
                         
                            if (key === 0)
                            return <th key={key} className="text-center"><input type="checkbox" name="listItem" onClick={this.headerCheckboxClick} checked={this.state.headingCheck} />
                            </th>
                             else if(key===3)
                              return <th key={key} className="text-right">{prop}</th>;
                              else if(key===2)
                              return  <th key={key} className="text-center">{prop}
                              {/* <button className="ssss" onClick={this.iconclick}> */}
                              <i  className="ssss" onClick={this.iconclick} className={this.state.icon}></i>
                              {/* </button> */}
                             </th>;
                              else
                              return <th key={key} className="text-center">{prop}</th>;
                          })}
                        </tr>
                      
                      </thead>
                      
                      <tbody>
                      {
                          this.state.tdArray.map((prop,key) => {
                            return(
                              <tr key={key}>  
                              <td  className="text-center"><input type="checkbox" onClick={()=> this.rowCheckboxClick(key)} checked={prop[0]}/></td>
                              <td  className="text-center">{prop[1]}</td>
                              <td  className="text-center">{prop[2]}</td>
                              <td  className="text-right td-actions">
                                    <Popup trigger={<a rel="tooltip" title="View" className="btn btn-link btn-info table-action view" href="javascript:void(0)"><i className="fa fa-image"></i></a>}>
                                    <p>{prop[1]}</p>
                                    <p>{prop[2]}</p>
                                    </Popup>
                                    <a rel="tooltip" title="Edit" className="btn btn-link btn-warning table-action edit" href="javascript:void(0)"><i class="fa fa-edit"></i></a>
                                    <a rel="tooltip" title="Remove" className="btn btn-link btn-danger table-action remove" href="javascript:void(0)"><i className="fa fa-trash"></i></a>
                                  </td>
                              </tr>
                            );
                          })
                        }
                      </tbody>
                    </Table>
   <button  style={{marginLeft:"20px",outline:"none",borderRadius:"19px",padding:"7px",paddingLeft:"13px",border:"2px solid  #777777" ,backgroundColor:"white"}}><span>6<i className="fa fa-sort-asc" aria-hidden="true"></i></span>
            </button>&nbsp;&nbsp;&nbsp;rows visible
            <br></br>
            <div className="pagination">
            <a href="#">&laquo;</a>
            <a href="#">&lsaquo;</a>
            <a href="#" className="active">1</a>
            <a href="#" >2</a>
            <a href="#">&rsaquo;</a>
            <a href="#">&raquo;</a>
            </div>
           

                  </div>
                }
              />
            </Col>


          </Row>
        </Grid>
      </div>
    );
  }
}

export default TableList;







