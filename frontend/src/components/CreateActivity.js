import React, {Component} from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class CreateActivity extends Component{

    state = {
        title: '',
        description:'',
       // time: new Date(),
       // startDay:new Date(),
        days:0,
        priority:'',
        editing:false,
        _id:''

    }




    async componentDidMount(){
        if (this.props.match.params.id){
            const res = await axios.get('http://localhost:4000/api/activities/'+this.props.match.params.id)
            //Obtiene dentro de res dentro de data , que de ahi viene la actividad 
            this.setState({
                title:res.data.title,
                description:res.data.description,
                //time:new Date(res.data.time),
                //startDay: new Date(res.data.startDay),
                days:res.data.days,
                priority:res.data.priority,
                editing:true,
                _id:this.props.match.params.id
            })
        }
    }
    //Buscar los datos del estado, crear una actividad y guardarla
    onSubmit=async(e)=>{
        e.preventDefault()
        const newActivity = {
            title:this.state.title,
            description:this.state.description,
            //startDay:this.state.startDay,
            days:this.state.days,
            priority:this.state.priority
        }
        //si esta editando, y esta trabajando con un ID se guarda la activ. editada,sino se guarda la activ. nueva
        if(this.state.editing){
            await axios.put('http://localhost:4000/api/activities/'+this.state._id,newActivity)
        }else{
            await axios.post('http://localhost:4000/api/activities/',newActivity)
        }

        window.location.href ="/activities"
    }


    onInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
/*
    onChangeDate= startDay=>{
        this.setState({startDay})
    }
    */
    DaysOnClick= e=>{
        this.setState({
            days:this.state.days+1
        })
    }


    render(){
        return(
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h3>Create Activity</h3>

                    <div className="form-group">
                <input type="text"
                 className="form-control"
                 placeholder="Title"
                 name="title"
                 onChange={this.onInputChange}
                 value={this.state.title}
                 required
                />
            </div>
            <div className="form-group">
            <textarea                  
                 className="form-control"
                 placeholder="Description"
                 name="description"
                 onChange={this.onInputChange}
                 value={this.state.description}
                />
            </div>

           <div className="form-group">
                <input type="text"
                 className="form-control"
                 placeholder="Priority"
                 name="priority"
                 onChange={this.onInputChange}
                 value={this.state.priority}
                 required
                />
            </div> 
            
            <h3>Days completed:{this.state.days}</h3>
            <button type="button" class="btn btn-info" onClick={this.DaysOnClick}>+</button>

            <form onSubmit={this.onSubmit}>
                <button type="submit" className="btn btn-primary">
                    Save
                </button>
                 </form>
                </div>
            </div>
            
        )
    }


}