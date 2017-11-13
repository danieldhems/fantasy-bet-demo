import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false,
        };
    }
    componentDidCatch(error, info){
        console.log(error, info);
        this.setState({
            hasError: true,
        })
    }
    render(){
        const { hasError } = this.state;
        const { children } = this.props;
        if(hasError){
            return 'Something went wrong';
        }

        return {children};
    }
}

export default ErrorBoundary;
