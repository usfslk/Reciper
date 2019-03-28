import React, { Component } from "react";
import { View, Text, FlatList, ImageBackground } from "react-native";
import styles from "./styles";

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		};
	}

	apiCall() {
		this.setState({ loaded: false, loading: true });
		let url = `https://www.reddit.com/r/quotes/${
			this.props.option
		}.json?limit=15`;
		console.log(url);
		fetch(url)
			.then(response => response.json())
			.then(responseJson => {
				this.setState({
					data: responseJson.data.children,
					loading: false,
					loaded: true
				});
			});
	}

	componentDidMount() {
		const { option } = this.props.option;
    const data = this.state;
    this.apiCall()
	}
	render() {
		return (
			<View style={{flex: 1}}>
				{this.state.loading ? (
					<View style={styles.spinner}>
						<Text style={styles.loadingText}>Loading ...</Text>
					</View>
				) : null}

				<View style={styles.outerListVertical}>
					<FlatList
						showVerticalScrollIndicator={false}
						automaticallyAdjustContentInsets={false}
						contentInset={{ top: 0, bottom: 0 }}
						data={this.state.data}
						showsVerticalScrollIndicator={false}
						ListEmptyComponent={this.noItemDisplay}
						keyExtractor={(item, index) => item.data.title}
						renderItem={({ item, index }) => (
							<View style={styles.cardVertical}>
									<View style={styles.innerCardVertical}>
										<Text style={styles.quote}>{item.data.title}</Text>
										<Text style={styles.author}>Posted by : {item.data.author}</Text>								
									</View>
							</View>
						)}
					/>
				</View>
			</View>
		);
	}
}
export default List;
