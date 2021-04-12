import React from 'react';
import {Banner} from "./Banner";

class Page extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            warningBanner: false
        }
    }

    showBannerHandle(){
        const {warningBanner} = this.state;

        this.setState({
            warningBanner: !warningBanner
        })
    }

    render() {
        const {warningBanner} = this.state
        return(
            <div>
                <Banner warn={warningBanner}/>
                <button onClick={this.showBannerHandle.bind(this)}>
                    {(warningBanner) ? "Сховати" : "Показати"}
                </button>
            </div>
        )
    }
}

export default Page;