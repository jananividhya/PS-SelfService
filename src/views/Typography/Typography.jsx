import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import "../TableList/Tablelist.css";
import Card from "components/Card/Card.jsx";
import axios from 'axios'
import Popup from "reactjs-popup";
class Typography extends Component {
  constructor(props){
    super(props);
    this.state={
      icon:"fa fa-sort",
      tdA:[],
      thA:[],
      headingCheck:false,
      headingClicked: false,
    }
    axios.get(`http://localhost:3300`)
      .then(res => {
        console.log("printing",res.data)
        this.setState({
          tdA:res.data.tdA,
          thA:res.data.thA,
        })
      })
    this.iconclick=this.iconclick.bind(this);
    this.compareBy.bind(this);
    this.sortBy.bind(this);
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
  headerCheckboxClick = () => {
    let arrayCopy=this.state.tdA;
    this.setState({
      headingCheck:!this.state.headingCheck
    })
    arrayCopy.map((prop,key) => {
       prop[0]=!this.state.headingCheck;
    })
   }
 
   rowCheckboxClick = (key) => {
     let arrayCopy=this.state.tdA;
     arrayCopy[key][0]=!arrayCopy[key][0];
     this.setState({tdA:arrayCopy})
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
  sortBy=(key)=> {
    console.log("sortBy",key)
    let arrayco = this.state.tdA;
  if(this.state.icon==="fa fa-sort-desc"){
    console.log("this.state.icon",this.state.icon)
   arrayco.reverse( arrayco.sort(this.compareBy(key)));
    this.setState({tdArray: arrayco});
  }
  if(this.state.icon==="fa fa-sort-asc"){
    arrayco.sort(this.compareBy(key));
    this.setState({tdArray: arrayco});
  }
  if(this.state.icon==="fa fa-sort"){
    arrayco.sort(this.compareBy(key));
    this.setState({tdArray: arrayco});
  }
  }
  updateRecord = (key,dataFeild1,dataFeild2) => {
    console.log("data----------",dataFeild1.value,this.state.tdA[key][1])
     axios.get('http://localhost:3300/update3/'+key+'/'+dataFeild1.value+'/'+dataFeild2.value).then(
       res => {
         console.log("delete->", res.data.tdA)
         this.setState({
           tdA: res.data.tdA
         })
       }
     );
   }
 
   deleteRecord = (key) => {
     axios.get('http://localhost:3300/delete3/' + key).then(
       res => {
         console.log("delete->", res.data.tdA)
         this.setState({
           tdA: res.data.tdA
         })
       }
     );
   }
 
  render() {
    var data1;
    var data2;
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
                  <button className="rose"  title="Add Role" style={{ outline:"none", float: "right",paddingLeft:"15px",paddingRight:"15px",paddingTop:"10px",paddingBottom:"10px", border: "2px solid  #777777", borderRadius: "20px", marginRight: "20px" }}  ><i className="fa fa-user-plus fa-1x "> </i></button>
                  <br></br>
              <br></br>
              <button className="rose"  title="Toggle" style={{outline:"none", float: "left", paddingLeft:"15px",paddingRight:"15px",paddingTop:"10px",paddingBottom:"10px", border: "2px solid  #777777", borderRadius: "20px", marginLeft: "20px"}}  ><i className="fa fa-th-list fa-1x"> </i></button>
                    
                    <div className="dropdown" style={{display:"inline"}}>
                    &nbsp;&nbsp;&nbsp;
    <button title="columns"  className="btn dropdown-toggle rose" type="button" data-toggle="dropdown" style={{borderRadius:"30px",padding:"10px",borderColor:"rgb(119, 119, 119)"}}><i class="fa fa-columns" aria-hidden="true"></i>
    <i className="fa fa-sort-desc" aria-hidden="true"></i></button>
    <ul className="dropdown-menu" style={{right:"600px",left:"0px",width:"50px",top:"28px"}}>
      <li style={{borderBottom:"1px solid #eee"}}><a href="#"><input type="checkbox" checked/>&nbsp;ROLE</a></li>
      <li style={{borderBottom:"1px solid #eee"}}><a href="#"><input type="checkbox" checked />&nbsp;FUNCTION</a></li>
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
                          {this.state.thA.map((prop, key) => {
                            console.log(key);
                            if (key === 0)
                            return <th key={key} className="text-center"><input type="checkbox" name="listItem" onClick={this.headerCheckboxClick} checked={this.state.headingCheck} />
                            </th>
                              else if(key===2)
                              return  <th key={key} className="text-center">{prop}
                              <button className="ssss" onClick={this.iconclick}>
                               
                              <i className={this.state.icon}></i>
                               </button>
                            
                             </th>;
                           
                              else if(key===3)
                              return <th key={key} className="text-right">{prop}</th>;
                              else
                              return  <th key={key} className="text-center">{prop}</th>;
                          })}
                        </tr>
                      
                      </thead>
                      
                      <tbody>
                        {this.state.tdA.map((prop, key) => {
                          return (
                            <tr>
                              <td key={key} className="text-center"><input type="checkbox" onClick={()=> this.rowCheckboxClick(key)} checked={prop[0]}/></td>
                              <td key={key} className="text-center">{prop[1]}</td>
                              <td key={key} className="text-center">{prop[2]}</td>
                              <td key={key} className="text-right td-actions">
                                    <a rel="tooltip" title="View" className="btn btn-link btn-info table-action view" href="javascript:void(0)"><i className="fa fa-image"></i></a>

                                    <Popup trigger={<a rel="tooltip" title="Edit" className="btn btn-link btn-warning table-action edit" href="javascript:void(0)"><i class="fa fa-edit"></i></a>}>
                                    <input type="text" className='input 1' id="input1" defaultValue={prop[1]} ref={(input) => {data1=input}}></input>
                                    <input type="text" className="input 2" defaultValue={prop[2]} id="input2" ref={(input) => {data2=input}}></input>
                                    <button onClick={() => this.updateRecord(key,data1,data2)} >submit</button>

                                    </Popup>

                                    <a rel="tooltip" title="Remove" className="btn btn-link btn-danger table-action remove" href="javascript:void(0)" onClick={() => { this.deleteRecord(key) }}><i className="fa fa-trash"></i></a>
                                  </td>
                              </tr>
                          );
                        })}
                      </tbody>
                    </Table>
  
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

export default Typography;
