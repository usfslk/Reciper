/*  Youssef Selkani 2019   */

import React, { Component } from "react";
import {
	View,
	Text,
	StatusBar,
	ScrollView,
	ImageBackground
} from "react-native";
import styles from "./styles";
import List from "./List";
import ListVertical from "./ListVertical";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'expo'

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			loaded: true
		};
	}
	render() {
		return (
			<ImageBackground
				style={{ width: "100%", height: "100%" }}
				source={require("../assets/bg.jpg")}
				resizeMode="cover"
			>
				<StatusBar />

				<View style={styles.header}>
					<View style={styles.innerHeader} />
				</View>

				<ScrollView style={styles.container}>
					{this.state.loaded ? (
						<View>
							<View style={styles.largedivider} />

							<Text style={styles.headingText}>Hot</Text>
							<List option="hot" url={this.state.shuffle1} />

							<Text style={styles.headingText}>New</Text>
							<ListVertical option="new" url={this.state.shuffle3} />
						</View>
					) : null}
				</ScrollView>
				<AdMobBanner
				adSize="smartBanner"
				adUnitID="ca-app-pub-8573101599140905/2580991187"
				testDeviceID="EMULATOR"
				/>
			</ImageBackground>
		);
	}
}
