import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/Feather';
import Carousel, {PaginationLight} from 'react-native-x-carousel';
import Back from 'react-native-vector-icons/Ionicons';

const Description = ({navigation, route}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const Title = route.params.title;
  const Uri = route.params.uri;
  const Price = route.params.price;

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

  const imageData = [
    {
      coverImageUri:
        'https://images-na.ssl-images-amazon.com/images/I/71kCNvUUx5L._SX425_.jpg',
      cornerLabelColor: '#FFD300',
      cornerLabelText: 'GOTY',
    },
    {
      coverImageUri:
        'https://5.imimg.com/data5/BH/VU/MY-8301095/sarvottam-gold-besan-500x500.jpg',
      cornerLabelColor: '#0080ff',
      cornerLabelText: 'NEW',
    },
    {
      coverImageUri:
        'https://www.indianonshop.com/wp-content/uploads/2020/07/Sunfeast-Dark-Fantasy-Choco-Fills-20g-Pack-of-20.jpg',
      cornerLabelColor: '#2ECC40',
      cornerLabelText: '-75%',
    },
    {
      coverImageUri:
        'https://www.jiomart.com/images/product/600x600/490000092/everest-garam-masala-50-g-0-20200805.jpg',
      cornerLabelColor: '#2ECC40',
      cornerLabelText: '-20%',
    },
  ];

  const renderItem = (data) => {
    return (
      <View
        key={data.coverImageUri}
        style={{
          width: windowWidth,
          height: 250,
          borderRadius: 8,
        }}>
        <Image
          source={{uri: data.coverImageUri}}
          style={{width: 250, height: 250, borderRadius: 250 / 2}}
        />
      </View>
    );
  };

  const cartValue = (operator) => {
    switch (operator) {
      case '+':
        let cnt = count + 1;
        setCount(cnt);
        let finalPrice = cnt * Price;
        setTotalPrice(finalPrice);
        break;
      case '-':
        let cnt2 = count - 1;
        if (cnt2 < 0) {
          setTotalPrice(0);
          setCount(0);
        } else {
          setCount(cnt2);
          let finalPrice = cnt2 * Price;
          setTotalPrice(finalPrice);
        }
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      {/* <Header title={Title} /> */}
      <View
        style={{
          width: '100%',
          height: 60,
          backgroundColor: '#295939',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{marginVertical: 12, marginHorizontal: 5}}
          onPress={() => navigation.navigate('Search')}>
          <Back name="chevron-back-outline" size={30} color="#fff" />
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
      <ImageBackground
        source={require('../../assets/changeColor.png')}
        style={{height: '45%', width: '100%'}}></ImageBackground>

      <View
        style={{
          height: 250,
          width: 250,
          marginLeft: 50,
          // justifyContent: 'center',
          // alignItems: 'center',
          // paddingHorizontal: 40,
          marginTop: -280,
          // padding: 10,
          // elevation: 4,
          borderRadius: 250 / 2,
        }}>
        {/* <Image
          style={{height: '100%', width: '100%'}}
          source={{
            uri: Uri,
          }}
        /> */}
        <Carousel
          pagination={PaginationLight}
          data={imageData}
          renderItem={renderItem}
          // loop
          // autoplay
        />
      </View>
      <View>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{Title}</Text>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Select Variant</Text>
        <TouchableOpacity
          style={{
            height: 80,
            width: 100,
            backgroundColor: 'green',
            borderRadius: 20,
            marginLeft: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 15, color: '#fff'}}>
            100gm
          </Text>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#fff'}}>
            ₹ {Price}
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          //   alignContent: 'flex-end',
          //   alignItems: 'flex-end',
          height: 50,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
            margin: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              borderRadius: 20,
              height: 40,
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => cartValue('-')}>
              <Icon
                name="minus"
                style={{
                  fontSize: 25,
                  width: 40,
                  textAlign: 'center',
                  color: 'green',
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                width: 40,
                textAlign: 'center',
                borderRightWidth: 1,
                borderLeftWidth: 1,
              }}>
              {count}
            </Text>
            <TouchableOpacity onPress={() => cartValue('+')}>
              <Icon
                name="plus"
                style={{
                  fontSize: 25,
                  width: 40,
                  textAlign: 'center',
                  color: 'green',
                }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: 'green',
              padding: 10,
              borderRadius: 10,
              width: '50%',
            }}>
            <Text style={{textAlign: 'center', color: '#fff'}}>
              Add ₹ {totalPrice}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Description;
