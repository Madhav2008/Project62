import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header from '../components/Header';
import db from '../config';
import Table from '../components/Table';
var present;
var absent;
var today;

export default class ListScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      all_students: [],
      presentPressedList: [],
      absentPressedList: [],
    };
  }

  componentDidMount = async () => {
    var class_ref = await db.ref('/').on('value', (data) => {
      var all_students = [];
      var class_a = data.val().class_A;
      for (var i in class_a) {
        all_students.push(class_a[i]);
      }
      all_students.sort(function (a, b) {
        return a.roll_no - b.roll_no;
      });

      this.setState({ all_students: all_students });
    });

    today = new Date();
    var date = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();

    today = date + '-' + month + '-' + year;
    return today;
  };

  goToSummary = () => {
    this.props.navigation.navigate('SortedScreen');
  };
  render() {
    return (
      <ScrollView>
        <View>
          <Header />
          <Table />
          <View style={styles.grid}>
            <Text style={styles.name}>1.        Madhav Arora</Text>
            <TouchableOpacity
              style={styles.Greenbutton}
              onPress={() => {
                db.ref('class/01/').update({
                  [today]: 'Present',
                  Name: 'Madhav Arora',
                  Roll_No: 1,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Redbutton}
              onPress={() => {
                db.ref('class/01/').update({
                  [today]: 'Absent',
                  Name: 'Madhav Arora',
                  Roll_No: 1,
                }),
                  { disabled: true };
              }}>
              <Text style={styles.text}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>2.         Raghav Arora</Text>
            <TouchableOpacity
              style={styles.Greenbutton}
              onPress={() => {
                db.ref('class/02/').update({
                  [today]: 'Present',
                  Name: 'Raghav Arora',
                  Roll_No: 2,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Redbutton}
              onPress={() => {
                db.ref('class/02/').update({
                  [today]: 'Absent',
                  Name: 'Raghav Arora',
                  Roll_No: 2,
                });
              }}>
              <Text style={styles.text}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>3.             Priya Arora</Text>
            <TouchableOpacity
              style={styles.Greenbutton}
              onPress={() => {
                db.ref('class/03/').update({
                  [today]: 'Present',
                  Name: 'Priya Arora',
                  Roll_No: 3,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Redbutton}
              onPress={() => {
                db.ref('class/03/').update({
                  [today]: 'Absent',
                  Name: 'Priya Arora',
                  Roll_No: 3,
                });
              }}>
              <Text style={styles.text}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>4.             Vijay Arora</Text>
            <TouchableOpacity
              style={styles.Greenbutton}
              onPress={() => {
                db.ref('class/04/').update({
                  [today]: 'Present',
                  Name: 'Vijay Arora',
                  Roll_No: 4,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Redbutton}
              onPress={() => {
                db.ref('class/04/').update({
                  [today]: 'Absent',
                  Name: 'Vijay Arora',
                  Roll_No: 4,
                });
              }}>
              <Text style={styles.text}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>5.           Srishti Arora</Text>
            <TouchableOpacity
              style={styles.Greenbutton}
              onPress={() => {
                db.ref('class/05/').update({
                  [today]: 'Present',
                  Name: 'Srishti Arora',
                  Roll_No: 5,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Redbutton}
              onPress={() => {
                db.ref('class/05/').update({
                  [today]: 'Absent',
                  Name: 'Srishti Arora',
                  Roll_No: 5,
                });
              }}>
              <Text style={styles.text}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>6.            Tripta Arora</Text>
            <TouchableOpacity
              style={styles.Greenbutton}
              onPress={() => {
                db.ref('class/06/').update({
                  [today]: 'Present',
                  Name: 'Tripta Arora',
                  Roll_No: 6,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Redbutton}
              onPress={() => {
                db.ref('class/06/').update({
                  [today]: 'Absent',
                  Name: 'Tripta Arora',
                  Roll_No: 6,
                });
              }}>
              <Text style={styles.text}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>7.           Siddhi Arora</Text>
            <TouchableOpacity
              style={styles.Greenbutton}
              onPress={() => {
                db.ref('class/07/').update({
                  [today]: 'Present',
                  Name: 'Siddhi Arora',
                  Roll_No: 7,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Redbutton}
              onPress={() => {
                db.ref('class/07/').update({
                  [today]: 'Absent',
                  Name: 'Siddhi Arora',
                  Roll_No: 7,
                });
              }}>
              <Text style={styles.text}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>8.             Vidhi Arora</Text>
            <TouchableOpacity
              style={styles.Greenbutton}
              onPress={() => {
                db.ref('class/08/').update({
                  [today]: 'Present',
                  Name: 'Vidhi Arora',
                  Roll_No: 8,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Redbutton}
              onPress={() => {
                db.ref('class/08/').update({
                  [today]: 'Absent',
                  Name: 'Vidhi Arora',
                  Roll_No: 8,
                });
              }}>
              <Text style={styles.text}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>9.           Bobby Arora</Text>
            <TouchableOpacity
              style={styles.Greenbutton}
              onPress={() => {
                db.ref('class/09/').update({
                  [today]: 'Present',
                  Name: 'Bobby Arora',
                  Roll_No: 9,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Redbutton}
              onPress={() => {
                db.ref('class/09/').update({
                  [today]: 'Absent',
                  Name: 'Bobby Arora',
                  Roll_No: 9,
                });
              }}>
              <Text style={styles.text}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>10.           Sonia Arora</Text>
            <TouchableOpacity
              style={styles.Greenbutton}
              onPress={() => {
                db.ref('class/10/').update({
                  [today]: 'Present',
                  Name: 'Sonia Arora',
                  Roll_No: 10,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Redbutton}
              onPress={() => {
                db.ref('class/10/').update({
                  [today]: 'Absent',
                  Name: 'Sonia Arora',
                  Roll_No: 10,
                });
              }}>
              <Text style={styles.text}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>11.       Jagdish Arora</Text>
            <TouchableOpacity
              style={styles.Greenbutton}
              onPress={() => {
                db.ref('class/11/').update({
                  [today]: 'Present',
                  Name: 'Jagdish Arora',
                  Roll_No: 11,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Redbutton}
              onPress={() => {
                db.ref('class/11/').update({
                  [today]: 'Absent',
                  Name: 'Jagdish Arora',
                  Roll_No: 11,
                });
              }}>
              <Text style={styles.text}>ABSENT</Text>
            </TouchableOpacity>

          </View>
          
          <TouchableOpacity style={styles.buttons1} onPress={this.goToSummary}>
            <Text style={styles.text1}>SUBMIT</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Greenbutton: {
    backgroundColor: 'lightgreen',
    borderWidth: 2,
    borderRadius: 15,
    padding:3,
    width: 70,
    height:30,
    marginTop: 15,
    marginRight: 5,
    left: 7,
  },
  Redbutton: {
    backgroundColor: 'red',
    borderWidth: 2,
    borderRadius: 15,
    padding:3,
    width: 70,
    height:30,
    marginTop: 15,
    marginRight: 5,
    left: 7,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 5,
    padding: 5,
  },
  grid: {
    backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  buttons1: {
    fontWeight: 'bold',
    borderRadius: 15,
    padding: 6,
    alignSelf: 'center',
    backgroundColor: 'blue',
    borderWidth: 3,
    width: 200,
    height:40,
    left: 20,
    marginTop: 20,
  },
  text1: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});