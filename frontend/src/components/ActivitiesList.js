import React, { Component } from 'react'
import axios from 'axios'
import {format} from 'timeago.js'
import {Link} from 'react-router-dom'

export default class ActivitiesList extends Component {
    //se crea el estado con una lista vacia para las actividades
    state={
        activities:[]
    }


    componentDidMount(){
        this.getActivities()
    }

    async getActivities(){
        const res = await axios.get('http://localhost:4000/api/activities')
        this.setState({activities:res.data})

    }
    deleteActivity= async (id)=>{
    await axios.delete('http://localhost:4000/api/activities/'+id)
    this.getActivities()//se llama a la funcion para que vuelva a traer las actividades actualizadas
      }

    
      render(){
          return(
              <div className="row">
                {
                    this.state.activities.map(activity =>(
                     <div className="col-md-4 p-2" key={activity._id}>
                        <div className="card">
                         <div className="card-header d-flex justify-content-between">
                        <h4>
                            {activity.title}
                        </h4>
                        <Link className="btn btn-secondary" to={"/editactivity/"+activity._id}>
                                    Edit
                                </Link>


                        </div>

                        <div className="card-body">
                        <h6>Descripción:</h6>
                        <p>{activity.description}</p>
                        <h6>Prioridad:</h6>
                        <p>{activity.priority}</p>
                        <h6>Días cumplidos:</h6>
                        <p>{activity.days}</p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-danger" onClick={()=>this.deleteActivity(activity._id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
                    ))


                }  
                  
                  </div>
          )
      }
    
    



}