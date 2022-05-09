import React from "react";
import {ProductList} from "./ProductCardList";



const withSearch = WrappedComponent => {
    return class extends React.Component {
        state = {
            searchTerm: ""
        }


        handleChange = (e) => {
            this.setState({searchTerm: e.target.value})
        }



        render() {
            const {searchTerm} = this.state;
            return(
                <div>
                    <input type="text" placeholder="Please Search...." 
                    onChange={this.handleChange}
                    name="search"
                    />
                    <WrappedComponent searchTerm={searchTerm} />
                </div>
            )
        }
    }
}


export const ProductCardListWithSearch = withSearch(ProductList)