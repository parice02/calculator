import React from "react";

import {Block, Text} from "expo-ui-kit";

class MyCard extends React.Component {
  render() {
    const {result} = this.props;
    return (
      <Block flex>
        <Block margin elevation={10}>
          <Text h3>{result.value}</Text>
        </Block>
      </Block>
    );
  }
}

export default MyCard;
