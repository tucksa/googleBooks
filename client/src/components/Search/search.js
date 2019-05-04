import React from 'react';
import Axios from 'axios';
//("Title: "+res.data.items[0].volumeInfo.title+"\n\nBy: "+ res.data.items[0].volumeInfo.autors[0]+ "\n\nDescription: "+res.data.items[0].volumeInfo.description + "\n\nImageSrc: "+ res.data.items[0].volumeInfo.imageLinks.thumbnail+ "\n\nLink: "+ res.data.items[0].volumeInfo.infoLink
class Search extends React.Component{
    componentDidMount(){
        Axios.get('https://www.googleapis.com/books/v1/volumes?q=of+mice+and+men')
        .then(res => console.log(res.data.items[0].volumeInfo.title + "\n\n"+ res.data.items[0].volumeInfo.authors + '\n\n'+ res.data.items[0].volumeInfo.description+ '\n\n'+ res.data.items[0].volumeInfo.imageLinks.thumbnail+ '\n\n'+ res.data.items[0].volumeInfo.infoLink))
        .catch(err => console.log(err));
    }

    render(){
        return(
            <h1>testing</h1>
        )
    }
 
}

export default Search;