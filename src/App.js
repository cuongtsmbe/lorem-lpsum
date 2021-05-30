
import './App.css';
import react,{Component} from "react";
import Paragraph from "./components/Paragraph";
import dataParagraph from "./data/index"; 
class  App extends react.Component {
  constructor(props){
    super(props);
    this.state={
      number:1,
      data:[]
    };
  }
  onSubmitChange=(e)=>{
    e.preventDefault();
    let praNumber=[];
    for(var i=0;i<this.state.number;i++){
      praNumber.push(dataParagraph[i]);
    }
    this.setState({data:praNumber});
  }
  setNUmbetState=(value)=>{
    if(value<=0){
      value=1;
    }
      this.setState({
        number:value
      });
  }
  renderPra=()=>{
    return this.state.data.map((e,index)=>{
      return <Paragraph data={e} key={index} />;
    })
  }
  render(){
    const {data}=this.state;
    return (
      <div className="App">
          <h5>TIRES OF BORING LOREM IPSUM</h5>
          <form className="form-number" onSubmit={(e)=>this.onSubmitChange(e)}>
            <div className="input_button">
              <h4>Number: </h4>
              <input type="number" onChange={(e)=>this.setNUmbetState(e.target.value)}/>
              <button>EXECUTION</button>
            </div>
          </form>
         {this.renderPra()}
      </div>
    );

  }
}

export default App;
