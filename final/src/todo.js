import React from 'react';
import ReactDOM from 'react-dom/client';

class List extends React.Component { 
    constructor(props) { 
      super(props); 
      this.state = { 
        value: '', 
        itemList:[], 
        i:0
      }; 
      this.handleChange = this.handleChange.bind(this); 
      this.handleSubmit = this.handleSubmit.bind(this); 
      this.handleRemove = this.handleRemove.bind(this);
      this.handleRemark = this.handleRemark.bind(this);
      
    } 
    handleChange(event) { 
      this.setState({value: event.target.value}); 
    } 
    handleSubmit(event) { 
      const inserItem={id:this.state.i,value:this.state.value,type:0};
      this.state.itemList.push(inserItem); 
      this.setState({value: '', itemList: this.state.itemList,}); 
      this.state.i++;
      event.preventDefault(); 
    } 
    handleRemove(id,event){
      const newList = this.state.itemList.filter((item) => item.id  !== id);
      this.setState({value: '', itemList: newList,}); 
    }
    handleRemark(id,event){
        for(var  j=0;j<this.state.itemList.length;j++)
        {
          if(this.state.itemList[j].id==id){
            this.state.itemList[j].type=1; 
          }
        }
        this.setState({itemList:this.state.itemList});
        event.preventDefault(); 
      
    }
    
    render() { 
      return ( 
        
        <div> 
        <h6 style={{ textAlign: 'left' }}>comments:</h6><form onSubmit={this.handleSubmit}> 
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} /> <span></span>
          </label>

          <input type="submit" value="Enter" /> 
        </form> 
        <div style={{ textAlign: 'left' }}> 
          {this.state.itemList.map((item, index) => 
          <div key={`item_${index}`}>
            <span style={{textDecorationLine: (item.type != 0) ? 'line-through' : ''}}>{item.value}</span>
            <input type="button" value="X"  onClick={(e) => this.handleRemove(item.id,e)} ></input>
          </div>)} 
        </div> 
        </div> 

              ); 
        
    } 
  } 
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<List />);
  
export default List