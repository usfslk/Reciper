import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback } from 'react-native';
import { withNavigation } from 'react-navigation';
import * as Animatable from 'react-native-animatable';
import Image from 'react-native-image-progress';
import * as Progress from 'react-native-progress';

class Results extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			query: '',
		}
	}
	componentDidMount() {
		this.refs.listRef.scrollToOffset({ x: 0, y: 0, animated: true })
	}

	render() {
		const { navigate } = this.props.navigation;
		return (
			<Animatable.View style={s.flat} easing='ease-in' duration={800} animation="fadeIn" >

				<FlatList
					ref="listRef"
					data={this.props.results}
					showsVerticalScrollIndicator={false}
					keyExtractor={(item, index) => item.href}
					ListEmptyComponent={this.noItemDisplay}
					renderItem={({ item, index }) => (

						<View style={s.card} >
							<TouchableWithoutFeedback
								onPress={() => navigate('BrowserScreen', { link: item.href, title: item.title.trim() })}
							>
								<View>
									<Image
										source={{ uri: item.thumbnail }}
										indicator={Progress.Bar}
										indicatorProps={{
											size: 10,
											borderWidth: 0,
											color: 'black',
											unfilledColor: 'rgba(200, 200, 200, 0.25)'
										}}
										style={{
											width: 80,
											height: 45,
											borderRadius: 10,
											backgroundColor: '#eee',
											marginBottom: 5
										}} />
									<Text style={s.header} >{item.title.trim()}</Text>
									<Text style={s.ing} >{item.ingredients.trim()}</Text>
								</View>
							</TouchableWithoutFeedback>
						</View>
					)} />
			</Animatable.View>
		);
	}
}

const s = StyleSheet.create({
	flat: {
		flex: 1,
		paddingBottom: 0
	},
	btn: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 20, flex: 1
	},
	ing: {
		fontSize: 12,
		textAlign: 'left',
		fontFamily: 'regular',
	},
	header: {
		fontSize: 16,
		fontFamily: 'bold',
	},
	card: {
		backgroundColor: '#fff',
		marginBottom: 7.5,
		paddingVertical: 10,
		paddingHorizontal: 30,
	},
	inner: {
		marginTop: 20,
	}
});

export default withNavigation(Results);