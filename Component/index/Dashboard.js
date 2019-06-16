import React from 'react';
import{View, Text ,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Dashboard = ({}) => {
    return(
        <View>
            <View>
                <TouchableOpacity>
                    <Image ></Image>
                    <Text>Dashboard</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default Dashboard;