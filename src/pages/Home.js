import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Header from '../components/Header';
import {Card, Title} from 'react-native-paper';
import Carousel, {PaginationLight} from 'react-native-x-carousel';
import Icon from 'react-native-vector-icons/AntDesign';

const Home = ({navigation, route}) => {
  const windowWidth = Dimensions.get('window').width;

  const windowHeight = Dimensions.get('window').height;

  //Categories data
  const Catlog = [
    {
      id: '1',
      name: 'Masala & Spices',
      image: require('../../assets/seasoning.png'),
    },
    {
      id: '2',
      name: 'Edible Oil',
      image: require('../../assets/oil.png'),
    },
    {
      id: '3',
      name: 'Ghee',
      image: require('../../assets/ghee.png'),
    },
    {
      id: '4',
      name: 'Pickels',
      image: require('../../assets/pickles.png'),
    },
    {
      id: '5',
      name: 'Snacks',
      image: require('../../assets/nachos.png'),
    },
    {
      id: '6',
      name: 'Fruit & Vegetables',
      image: require('../../assets/diet.png'),
    },
  ];

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

  // Carousel data
  const imageData = [
    {
      coverImageUri:
        'http://baneswarspices.in/wp-content/uploads/2020/03/banner_1.jpg',
      cornerLabelColor: '#FFD300',
      cornerLabelText: 'GOTY',
    },
    {
      coverImageUri:
        'https://images.squarespace-cdn.com/content/v1/5af5f71c0dbda32cd6252624/1600125890457-5O8L6HFVHEQAKPTKTMZK/ke17ZwdGBToddI8pDm48kEFCE1w56dqaOyGS9OEby0R7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0haypLsn6iFkXbd5QrnyzAEdFvy2ejpJQpvpwZo7gjCOnuDjE-T1tqwX44-rS2kDHA/AdobeStock_191057762+spice+spoons+on+dark+background.jpeg',
      cornerLabelColor: '#0080ff',
      cornerLabelText: 'NEW',
    },
  ];

  const renderItem = (data) => {
    return (
      <View
        key={data.coverImageUri}
        style={{
          width: windowWidth - 20,
          height: 250,
          borderRadius: 8,
        }}>
        <Image
          source={{uri: data.coverImageUri}}
          style={{width: windowWidth - 20, height: 250, borderRadius: 8}}
        />
      </View>
    );
  };

  // products
  const productItem = ({name, desciption, uri, price}) => {
    return (
      <View style={styles.product}>
        <Card style={styles.productCard}>
          <View style={styles.textContainer}>
            <Image style={styles.productImage} source={{uri: uri}} />
            <Text>{name}</Text>
            <Text>{desciption}</Text>
            <Text> {price} Rs</Text>
          </View>
        </Card>
      </View>
    );
  };

  // categories
  const catlogProduct = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Search', {
          title: item.name,
        })
      }>
      <View
        key={item.id}
        style={{
          height: 200,
          marginRight: 15,
          marginLeft: 2,
          marginBottom: 20,
          width: 160,
          elevation: 2,
          backgroundColor: '#fff',
          padding: 5,
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#295939',
            borderRadius: 100 / 2,
            width: 100,
            height: 100,
            margin: 10,
          }}>
          <Image
            style={{
              width: 60,
              height: 80,
              resizeMode: 'center',
              tintColor: '#fff',
              alignSelf: 'center',
              margin: 5,
            }}
            source={item.image}
          />
        </View>

        <Text
          numberOfLines={2}
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 10,
          }}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Header title="ThekkheIndia" />
      <ScrollView>
        <View style={{padding: 10}}>
          <Text style={{color: '#295939', fontSize: 20, paddingBottom: 15}}>
            Hi TheKkhe India
          </Text>
          <View style={{width: windowWidth}}>
            {/* carousel */}
            <Carousel
              pagination={PaginationLight}
              data={imageData}
              renderItem={renderItem}
              loop
              autoplay
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: windowWidth,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              marginLeft: 10,
              marginBottom: 10,
            }}>
            Our Exclusive Categories
          </Text>
          <Text style={{alignItems: 'center', color: '#cdd0cb', margin: 5}}>
            see all <Icon name="right" />
          </Text>
        </View>

        {/* Categories */}
        <View style={{padding: 10, width: windowWidth}}>
          <FlatList
            data={Catlog}
            numColumns={2}
            renderItem={catlogProduct}
            keyExtractor={(item) => item.id}
          />
        </View>

        <Title style={{margin: 5}}>Newly Added Products</Title>

        <View style={styles.productContainer}>
          {/* Products */}
          <FlatList
            data={Data}
            horizontal={true}
            renderItem={({item}) => {
              return productItem(item);
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryContainer: {
    padding: 10,
  },
  imageStyle: {
    width: '50%',
    height: 100,
  },
  productContainer: {
    padding: 5,
  },
  product: {
    flex: 1,
    height: 200,
    width: 150,
    marginRight: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  productCard: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
});

export default Home;
