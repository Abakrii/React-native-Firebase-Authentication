

import firebase from 'firebase';
import React ,{Component} from 'react';
import { View , TextInput , Text} from 'react-native';

import { Button , Card , CardSection , Input, Spinner } from "./common";







export default class LoginForm extends Component{

    state ={email :'' , password:'' ,error:'' , loading:false};

    onButtonPress(){

        const {email , password} = this.state;

         this.setState({error:'', loading:true}); // btrg3 lel 7ala el tabe3ya ya3ny lma el user y7slo auth failed , w yd5l tany kelmt el auth fail bttshal l2en kda rg3to lel state b3d lma et3ml update


        firebase.auth().signInWithEmailAndPassword(email , password)
            .then(this.onLoginSuccess.bind(this)) //trun awel my3m signin sa7

            .catch (()=> {

            firebase.auth().createUserWithEmailAndPassword( email,password )
                .then(this.onLoginSuccess.bind(this))

                .catch(this.onLoginFail.bind(this));

                //      or use this without onLoginFail mETHOD //     this.setState({error:'Authentication Failed.'});

                    });

    }

    onLoginFail(){

        this.setState({error:'Authenticaton Failed', loading:false});


    }

    onLoginSuccess(){
//update object
        this.setState({
            email:'',
            password:'',
            loading: false , //to requesting copmlit the spin shokrn w2f kda . no need to show
            error:''
        });

    }
    renderButton(){

        if(this.state.loading){
            return <Spinner size="small"/>;
        }

        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }

    render(){
        return(
           <Card>

               <CardSection>
               <Input

                   placeholder="user@gmail.com"
                   label="Email"
                   value={this.state.email}
                   onChangeText={email=>this.setState({email})}
                />
               </CardSection>



               <CardSection>
                   <Input
                       secureTextEntry
                       placeholder="password"
                       label="Password"
                       value={this.state.password}
                       onChangeText={password=>this.setState({password})}
                   />


               </CardSection>

               <Text style={styles.errorTextStyle}>
                   {this.state.error}
               </Text>
               <CardSection>
                   {this.renderButton()}
               </CardSection>
           </Card>
        );
    }
}


    const styles={

        errorTextStyle:{
          fontSize:20,
            alignSelf:'center',
            color:'red'

        },

    };



export {LoginForm};

