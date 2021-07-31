import React,{Component} from 'react';
//In class component properties are reserved through "this.props"
class Welcome1 extends Component{
    /*const {name} = this.props  ---We can use this way also
    .......return <h2> Class Component for {name} </h2>
    */
    render (){
        return <h4> Class Component for {this.props.name} </h4>
    }
} 
export default Welcome1;