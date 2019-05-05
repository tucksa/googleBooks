import React from 'react';
import Axios from 'axios';
import '../Search/search.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BrowserRouter} from 'react-router-dom';

class Library extends React.Component{
    state = {
        title: [],
        authors: [],
        description: [],
        image: [],
        link: [],
        id : []
    }
    componentDidMount(){
        Axios.get('/api/books')
        .then(res => {
            console.log(res)
            let title = [];
            let authors= [];
            let description= [];
            let image = [];
            let link= [];
            let id= [];
            for(let i=0; i<res.length; i++){
                title.push(res[i].title)
                authors.push(res[i].authors)
                description.push(res[i].description)
                image.push(res[i].image)
                link.push(res[i].link)
                id.push(res[i]._id)
            } 
                console.log(image)
                this.setState({
                    title,
                    authors,
                    description,
                    image,
                    link,
                    id
                })
        })
        .catch(err => console.log(err))
    }
    handleRemove = (id) => {
        console.log(id)
        Axios.delete('/api/books/:id', id)
        .then(res => console.log('removed from your library'))
        .catch(err => console.log(err))
    }
    render(){
        let results = this.state.title.map( (x,i) => <Row id= 'resDisplay' key = {i}><Col xs= {3}><img className= 'bookimg'alt= {`${this.state.title[i]} cover`}src= {this.state.image[i]}/></Col><Col xs = {7}><h4>{x}</h4><br /><h6>{this.state.authors[i]}</h6><br /><p>{this.state.description[i]}</p><br /><a href= {this.state.link[i]}> Read</a></Col><Col xs= {1}><button className= 'libSaveBtn btn btn-primary' onClick= {() => this.handleRemove(this.state.id)}>Remove</ button></Col></Row>)        

        return(
            <div>
                <BrowserRouter>
                    {results}
                </BrowserRouter>  
            </div>
        )
    }
}
export default Library;