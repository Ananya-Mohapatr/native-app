import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';

const App = () => {

  const [name, SetName] = useState('');

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Please write your name:
      </Text>
      <TextInput
        style={styles.input}
        placeholder='e.g. John'
        onChangeText={(value) => SetName(value)}
      />
      <Text style={styles.text}>
        Your name is: {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
  },
});

export default App;











































//Old one for practice


// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   RefreshControl,
//   FlatList,
//   SectionList,
//   ScrollView,
// } from 'react-native';

// const App = () => {

//   const [Items, setItems] = useState([
//     { name: 'Item 1' },
//     { name: 'Item 2' },
//     { name: 'Item 3' },
//     { name: 'Item 4' },
//     { name: 'Item 5' },
//     { name: 'Item 6' },
//     { name: 'Item 7' },
//     { name: 'Item 8' },
//     { name: 'Item 9' },
//     { name: 'Item 27' },
//     { name: 'Item 78' },
//   ]);
//   const DATA = [
//     {
//       title: 'Title 1',
//       data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
//     },
//     {
//       title: 'Title 2',
//       data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
//     },
//     {
//       title: 'Title 3',
//       data: ['Item 3-1'],
//     },
//     {
//       title: 'Title 4',
//       data: ['Item 4-1', 'Item 4-2'],
//     },
//   ]

//   const [newArr,setNewArr]=useState([DATA[0]])
//   const [index,setIndex]=useState(0)
  
//   const [Refreshing, setRefreshing] = useState(false);
//   const onRefresh = () => {
//     setRefreshing(true);
//     let arr=[]
//     if(index<3){
      
//       setIndex(index+1);
//       let i=-1
//       while(i<=index && index<3){
//         arr.push(DATA[i+1])
//         i++; 
//       }
//     }
//          else{
//           arr[0]=DATA[0];
//           setIndex(0)      
//          }
//          setNewArr(arr)
//          setRefreshing(false); 
    
//   }

//   return (
//       // <ScrollView nestedScrollEnabled={true}>
//     <View style={styles.body}>
//       <SectionList
//       // keyExtractor={(item,index)=>index}
//       // showsVerticalScrollIndicator={true}
//       nestedScrollEnabled={true}
//       sections={newArr}
//       keyExtractor={(item, index) =>  index}
//       // renderItem={({ item }) => <Item title={item} />}
//       // renderSectionHeader={({ section: { title } }) => (
//       //   <Text style={styles.header}>{title}</Text>
//       // )}
//       renderItem={(item)=>{
//         return(
//             <View style={styles.item}>
//               {console.log("item",item)}
//               <Text style={styles.item}>{item.item}</Text>
//               </View>
          
//         )
//       }}
//       renderSectionHeader={(item)=>{
//       return  (
//           <View style={styles.item}>
//             {console.log("item2",item)}
//             <Text style={styles.text}>{item.section.title}</Text>
//             </View>
//         )
//       }}
      
//       refreshControl={
//           <RefreshControl
//             refreshing={Refreshing}
//             onRefresh={onRefresh}
//             colors={['#ff00ff']}
//           />
//       }
//       />
//       {/* Using flatlist */}
      
//       {/* <FlatList
//         // horizontal              //For horizontally viewing the items(But they are displayed by default from left to right)
//         // inverted                //inverted will change the flow from right to left
//         keyExtractor={(item, index) => index}
//         data={Items}
//         renderItem={({ item }) =>
//         (
//           <View style={styles.item}>
//             <Text style={styles.text}>{item.name}</Text>
//           </View>
//         )
//         }
//         refreshControl={
//           <RefreshControl
//             refreshing={Refreshing}
//             onRefresh={onRefresh}
//             colors={['#ff00ff']}
//           />
//         }
//       /> */}
//     </View>
//     // Using ScrollView
//     // </ScrollView>
//     // <ScrollView
//     //   style={styles.body}
//     //   refreshControl={
//     //     <RefreshControl
//     //       refreshing={Refreshing}
//     //       onRefresh={onRefresh}
//     //       colors={['#ff00ff']}
//     //     />
//     //   }
//     // >
//     //   {
//     //     Items.map((object) => {
//     //       return (
//     //         <View style={styles.name} key={object.key}>
//     //           <Text style={styles.text}>{object.item}</Text>
//     //         </View>
//     //       )
//     //     })
//     //   }
//     // </ScrollView>
//   );
// };

