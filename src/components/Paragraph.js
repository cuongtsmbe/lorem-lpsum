
import react,{Component} from "react";
class  Paragraph extends react.Component {

  render(){

    return (
      <>
        <p>{this.props.data}</p>
      </>
    );
      
  }
}

export default Paragraph;
