import * as React from 'react';
import {
    Container,
    Header,
    Title,
    Content,
    Text,
    Button,
    Icon,
    Left,
    Body,
    Right,
    List,
    ListItem,
    Card,
    CardItem,
    Thumbnail
  } from 'native-base';
import styles from './styles';

export interface Props {
    user: any;
}
export interface State {}

  class UserItem extends React.Component<Props, State> {
      render () {
          const {user} = this.props;
          return (
            
            <Card>
                <CardItem style={styles.carditem}>
                
                    <Thumbnail source={{ uri: user.avatar_url }} style={styles.useravatar}/>
                    <Text style={styles.userlogin}>
                        {user.login}
                    </Text>
                
                </CardItem>
            </Card>
          );
      };
  }
  export default UserItem;