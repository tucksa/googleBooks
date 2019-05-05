import React from 'react';
import Axios from 'axios';
import './search.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from '../Jumbotron/jumbotron';

class Search extends React.Component{
    state = {
        searched: '',
        title: [],
        authors: [],
        description: [],
        image: [],
        link: []
    }

    handleInput = (e) => {
        e.preventDefault();
        this.setState({
            searched:  e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const searched = this.state.searched;
        let alter= searched.trim().replace(/ /g, '+');
        Axios.get('https://www.googleapis.com/books/v1/volumes?q='+ alter)
            .then(res => {
                let title = [];
                let authors= [];
                let description= [];
                let image = [];
                let link= [];
                for(let i=0; i<res.data.items.length; i++){
                    title.push(res.data.items[i].volumeInfo.title)
                    authors.push(res.data.items[i].volumeInfo.authors)
                    description.push(res.data.items[i].volumeInfo.description)
                    res.data.items[i].volumeInfo.imageLinks? image.push(res.data.items[i].volumeInfo.imageLinks.thumbnail) : image.push("https://onlocationvacations.com/wp-content/uploads/2019/01/book.jpg")
                    link.push(res.data.items[i].volumeInfo.infoLink)
                } 
                console.log(image)
                this.setState({
                    title,
                    authors,
                    description,
                    image,
                    link
                })
            })
            .catch(err => console.log(err));
    }
    handleAddToLibrary = (i) => {
        console.log(i)
        let saved = {
            title: this.state.title[i],
            authors: this.state.authors[i],
            description: this.state.description[i],
            link: this.state.link[i]
        }
        Axios.post('/api/books', saved)
        .then(res=> console.log('succesfully saved to database'))
        .catch(err => console.log(err))
    }
    render(){
        let results = this.state.title.map( (x,i) => <Row id= 'resDisplay' key = {i}><Col xs= {3}><img className= 'bookimg'alt= {`${this.state.title[i]} cover`}src= {this.state.image[i]}/></Col><Col xs = {7}><h4>{x}</h4><br /><h6>{this.state.authors[i]}</h6><br /><p>{this.state.description[i]}</p><br /><a href= {this.state.link[i]}> Read</a></Col><Col xs= {1}><button className= 'libSaveBtn btn btn-primary' onClick= {() => this.handleAddToLibrary(i)}>Add to Library</ button></Col></Row>)        

        return(
            <div>
                <Jumbotron/>
                <form className= 'mySearchBar' onSubmit= {this.handleSubmit}>
                    <div class="form-group">
                        <input onChange= {this.handleInput} class="form-control"  placeholder="Search for books here"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>

                    {results}
            </div>
        )
    }
}

export default Search;