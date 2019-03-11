import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import "../TableList/Tablelist.css";
import Card from "components/Card/Card.jsx";
import { thA, tdA } from "variables/Variables.jsx";

var on=[];
class Typography extends Component {
  constructor(props){
    super(props);
   
    for(var i=0;i<tdA.length;i++){
      on[i]=false
    }
      this.state={
      on
      }
    
    this.state={
      icon:"fa fa-sort",
      tdA:tdA,
      on1:false,
      
    }
    this.iconclick=this.iconclick.bind(this);
    this.compareBy.bind(this);
    this.sortBy.bind(this);
    this.checking=this.checking.bind(this);
   // this.checking2=this.checking2.bind(this);
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
  sortBy=(key)=> {
    console.log("sortBy",key)
    let arrayco = tdA;
  if(this.state.icon==="fa fa-sort-desc"){
    console.log("this.state.icon",this.state.icon)
   arrayco.reverse( arrayco.sort(this.compareBy(key)));
    this.setState({tdA: arrayco});
  }
  if(this.state.icon==="fa fa-sort-asc"){
    arrayco.sort(this.compareBy(key));
    this.setState({tdA: arrayco});
  }
  }
  checking(){
    // sconsole.log("helllllllllooo",this.state.on1)
    if(this.state.on1===false){
        for(var i=0;i<tdA.length;i++){
          on[i]=true
        }
      this.setState({
      on1:true,
      on
      })
    }
   else if(this.state.on1===true){
      for(var i=0;i<tdA.length;i++){
        on[i]=false
      }
        this.setState({
        on1:false,
        on
        })
        // {console.log("ia ma 2 ",on[0])}
    }
    
  }
  checking2(value){
    // console.log("value",value);
    // console.log("vall",tdA[value][2])
    if(this.state.on2===false){
      this.setState({
        on2:true
      })
    }


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
                          {thA.map((prop, key) => {
                            // console.log(key);
                            
                           
                            if (key === 0){
                              // {console.log("heelllon1111111",this.state.on1)}
                              return <th key={key} className="text-center"><input type="checkbox" checked={this.state.on1} onClick={this.checking}></input></th>
                            }
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
                      {console.log(tdA)}
                      
                        {this.state.tdA.map((prop, key) => {
                        console.log("i am top key ",key)
                        {var k=key}
                          return (
                           
                            <tr key={key}>
                            
                              {prop.map((prop, key) => {
                                console.log("prop",prop)
                                if (key === 0){
                            //  var item   
                            // {this.state.on.map(item=>{
                            //   console.log("00000",item)
                            // })}
                            // {console.log("helllllllllllllo",this.state.on)}
                                                            return (<td key={key} className="text-center"><input type="checkbox" checked={this.state.on} ></input></td>)
                                  
                                }
                                   else if (key === 3) {
                                  // console.log(prop)
                                  return <td key={key} className="text-right td-actions">
                                  <a rel="tooltip" title="View" className="btn btn-link btn-info table-action view" href="javascript:void(0)"><i className="fa fa-image"></i></a>
                                  {/* <div className="btn">
                                  <i style={{ color: "#23CCEF", opacity: "0.36", padding: "10px", marginLeft: "30px" }} className={prop[0]}></i>
                                  </div> */}
                                   {/* <a rel="tooltip" title="View" className="btn btn-link btn-info table-action view" href="javascript:void(0)"> <i style={{ color: "#FFA534", opacity: "0.36", padding: "10px", marginLeft: "30px" }} className={prop[1]}></i></a> */}
                                   <a rel="tooltip" title="Edit" className="btn btn-link btn-warning table-action edit" href="javascript:void(0)"><i class="fa fa-edit"></i></a>

                                   {/* <a rel="tooltip" title="View" className="btn btn-link btn-info table-action view" href="javascript:void(0)"> <i style={{ color: "#FB404B", opacity: "0.36", padding: "10px", marginLeft: "30px" }} className={prop[1]} className={prop[2]}></i></a> */}
                                   <a rel="tooltip" title="Remove" className="btn btn-link btn-danger table-action remove" href="javascript:void(0)"><i className="fa fa-trash-o"></i></a>
                                  </td>

                                }

                                else{
                                  // console.log("prop i am content",prop)
                                  return <td key={key} className="text-center">{prop}</td>;
                                }
                              })}
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
