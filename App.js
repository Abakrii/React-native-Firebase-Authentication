import firebase from 'firebase';
import {Header  ,Button , CardSection} from "./src/components/common";
import LoginForm from "./src/components/LoginForm";
import React from 'react';
import { StyleSheet, Text, View   } from 'react-native';
import {Spinner} from "./src/components/common/Spinner";


class App extends React.Component {
    state = { loggedIn : null };

    componentWillMount(){

        firebase.initializeApp(
            {
               apiKey: "AIzaSyAkDmxDD6rBPAm9xW1GPHhiRlXvAO38mkU",
                authDomain: "authentication-3f850.firebaseapp.com",
                databaseURL: "https://authentication-3f850.firebaseio.com",
                projectId: "authentication-3f850",
               storageBucket: "authentication-3f850.appspot.com",
               messagingSenderId: "1012261911360"
             });

        firebase.auth().onAuthStateChanged((user)=>{
            if(user) {
                this.setState({loggedIn: true});
            }
            else{
                this.setState({loggedIn:false});
            }
        });
    }

    renderContent(){

        switch (this.state.loggedIn){

            case true:
             return (
                 <CardSection>
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log out
                    </Button>
                </CardSection>
             );

            case false:
                return <LoginForm /> ;
            default:
                return <Spinner size= "large"/>;

        }




    }
        // renderContent() {
        // if (this.state.loggedIn){
        //     return(
        //
        //         <Button>
        //             Log Out
        //         </Button>
        //     );
        // }
        //         return <LoginForm /> ;
        // }

    render() {
        return (


                                <View>
                              <Header headerText="Authentication"/>
                                        {this.renderContent()}



                                </View>

        );
    }
}




export default App;
// import firebase from 'firebase';
// import React ,{Component} from 'react';
// import {Text , View} from 'react-native';
// import {Header} from "./src/components/common/Header";
//
// import LoginForm from "./src/components/LoginForm";
//
//
// export default class App extends Component{
//     componentWillMount(){
//
//         firebase.initializeApp(
//             {
//                 apiKey: "AIzaSyAkDmxDD6rBPAm9xW1GPHhiRlXvAO38mkU",
//                 authDomain: "authentication-3f850.firebaseapp.com",
//                 databaseURL: "https://authentication-3f850.firebaseio.com",
//                 projectId: "authentication-3f850",
//                 storageBucket: "authentication-3f850.appspot.com",
//                 messagingSenderId: "1012261911360"
//             });
//     }
//     render(){
//         return(
//
//             <View>
//
//                 <LoginForm/>
//                 <Header headerText="Authentication"/>
//                 <Text>An App!!</Text>
//
//             </View>
//         );
//     }
// }
//
//
// export default App;