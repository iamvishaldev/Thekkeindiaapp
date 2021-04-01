import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
  Button,
  Alert,
  Dimensions,
} from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/Ionicons';

const Search = ({navigation, route}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const Title = route.params.title;

  const [name, setName] = useState();
  const [modal, setModal] = useState('false');
  const [data, setData] = useState([]);

  const Data = [
    {
      id: '1',
      name: 'Pooja Items',
      desciption: 'Dark Fantasy',

      uri:
        'https://www.indianonshop.com/wp-content/uploads/2020/07/Sunfeast-Dark-Fantasy-Choco-Fills-20g-Pack-of-20.jpg',
      price: '79',
    },
    {
      id: '2',
      name: 'Pooja Items',
      desciption: 'Besan',
      uri:
        'https://5.imimg.com/data5/BH/VU/MY-8301095/sarvottam-gold-besan-500x500.jpg',
      price: '30',
    },
    {
      id: '3',
      name: 'Pooja Items',
      desciption: 'Basmati',
      uri:
        'https://images-na.ssl-images-amazon.com/images/I/71kCNvUUx5L._SX425_.jpg',
      price: '250',
    },
    {
      id: '4',
      name: 'Pooja Items',
      desciption: 'Evereset Masala',
      uri:
        'https://www.jiomart.com/images/product/600x600/490000092/everest-garam-masala-50-g-0-20200805.jpg',
      price: '163',
    },
    {
      id: '5',
      name: 'Pooja Items',
      desciption: 'Cadbury Chocolate',
      uri:
        'https://www.bigbasket.com/media/uploads/p/l/40157246-2_2-cadbury-dairy-milk-silk-hazelnut-chocolate-bar.jpg',
      price: '50',
    },
    {
      id: '6',
      name: 'Pooja Items',
      desciption: 'Agarbatti',
      uri:
        'https://www.marketingmind.in/wp-content/uploads/2020/01/cycle-pure.jpg',
      price: '10',
    },
  ];

  useEffect(() => {
    setData(Data);
  }, []);

  // Filter Search Logic
  const searchText = (text) => {
    setName(text);
    let search = text;
    if (search === '') {
      setData(Data);
    } else {
      const searchedData = Data.filter((d) => d.desciption.includes(search));
      setData(searchedData);
    }
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Description', {
          title: item.desciption,
          uri: item.uri,
          price: item.price,
        })
      }>
      <View
        key={item.id}
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          marginHorizontal: 40,
          elevation: 4,
          width: '80%',
          marginTop: 5,
          margin: 12,
          borderRadius: 4,
        }}>
        <Image
          style={{height: 100, width: 100, margin: 5}}
          source={{
            uri: item.uri,
          }}
        />
        <View style={{width: '40%'}}>
          <Text style={{marginTop: 10, fontWeight: 'bold'}}>
            {item.desciption}
          </Text>
          <Text style={{marginVertical: 10, fontWeight: 'bold'}}> ₹100 gm</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text style={{color: 'green', fontWeight: 'bold'}}>
              ₹ {item.price} rs
            </Text>
            <Text
              style={{
                color: 'red',
                fontWeight: 'bold',
                textDecorationLine: 'line-through',
              }}>
              45 rs
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => setModal(true)}
          style={{
            height: 30,
            width: 50,
            backgroundColor: 'green',
            marginLeft: 30,
            marginTop: 30,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 16, color: '#fff'}}>ADD</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={require('../../assets/Frame.png')}
      style={Dimensions.get('window')}>
      <View style={styles.container}>
        <View
          style={{
            //   width: '100%',
            //   height: 60,
            //   backgroundColor: '#295939',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{marginVertical: 12, marginHorizontal: 5}}
            onPress={() => navigation.navigate('Home')}>
            <Icon name="chevron-back-outline" size={30} color="#fff" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 23,
              color: '#fff',
              marginHorizontal: 15,
              marginVertical: 14,
              margin: 5,
            }}>
            {Title}
          </Text>
        </View>

        {/* Search Field */}
        <View style={{marginBottom: 15}}>
          <TextInput
            placeholder="Search Brand"
            placeholderTextColor="#fff"
            color="#252525"
            fontSize={13}
            value={name}
            onChangeText={searchText}
            style={{
              width: '90%',
              borderWidth: 2,
              borderColor: '#fff',
              borderRadius: 10,
              marginLeft: 20,
              marginTop: 5,
              padding: 10,
              paddingLeft: 20,
            }}
          />
        </View>
        <ScrollView>
          <View>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </ScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modal}
          onRequestClose={() => {
            // Alert.alert('Modal has been closed.');
            setModal(false);
          }}>
          <View style={styles.modalView}>
            <View style={{marginTop: 5}}>
              <TouchableOpacity
                style={{
                  width: windowWidth,
                  height: 50,
                  backgroundColor: 'green',
                  borderRadius: 15,
                  padding: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text>Select Variant</Text>
              </TouchableOpacity>
              <View style={{marginLeft: 12}}>
                <Text style={{color: '#212121', fontWeight: 'bold'}}>
                  Quantity/Size
                </Text>
                <Text style={{color: '#8f8c86'}}>
                  Choose one option from the following
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 15,
              }}>
              <View>
                <Text style={{color: '#8f8c86'}}>100 gm</Text>
                <Text style={{fontWeight: 'bold'}}> ₹ 44</Text>
              </View>
              <View style={{marginTop: 10}}>
                <TouchableOpacity
                  style={{
                    height: 30,
                    width: 70,
                    backgroundColor: 'green',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                  }}>
                  <Text>ADD</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{margin: 5, marginHorizontal: 20}}>
              <TouchableOpacity
                onPress={() => setModal(false)}
                style={{
                  width: '100%',
                  height: 50,
                  backgroundColor: '#757574',
                  color: '#fff',
                  borderRadius: 15,
                  padding: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
  },
});

export default Search;
