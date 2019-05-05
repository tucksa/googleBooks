import React from 'react';
import Axios from 'axios';

class Search extends React.Component{
    state = {
        searched: ''
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
            .then(res => console.log(res.data.items[0].volumeInfo.title + "\n\n"+ res.data.items[0].volumeInfo.authors + '\n\n'+ res.data.items[0].volumeInfo.description+ '\n\n'+ res.data.items[0].volumeInfo.imageLinks.thumbnail+ '\n\n'+ res.data.items[0].volumeInfo.infoLink))
            .catch(err => console.log(err));
    }
    render(){
        return(
            <form onSubmit= {this.handleSubmit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Search</label>
                    <input onChange= {this.handleInput} class="form-control"  placeholder="Search for books here"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default Search;