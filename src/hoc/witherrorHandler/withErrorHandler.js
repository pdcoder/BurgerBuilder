import React,{Component} from 'react';
import Aux from '../Aux';
import Modal  from '../../components/UI/Modal/Modal';


const withErrorHandler = (WrappedComponent,axios) =>{
    return class extends Component {
        state= {
            error: null
        }
        componentWillMount(){

            this.reqIn = axios.interceptors.request.use(req =>{
                this.setState({error:null});
                return req;
            });
            this.resIn = axios.interceptors.response.use(res=>res,error =>{
                this.setState({error:error});
                });
            }

            componentWillUnmount(){
axios.interceptors.request.eject(this.reqIn);
axios.interceptors.response.eject(this.resIn);

            }

            errorConfirmed = () =>{
                this.setState({error:null});
            }

        render(){
        return (
            <Aux>
                <Modal show={this.state.error} modalClosed={this.errorConfirmed}>
                    {this.state.error ? this.state.error.message:null}

                    </Modal>
            <WrappedComponent {...this.props}/>
            </Aux>
        );
    }

}
}
export default withErrorHandler;