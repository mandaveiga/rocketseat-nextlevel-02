import React from 'react';
import { View, Image, Text, Linking } from "react-native";
import { RectButton } from 'react-native-gesture-handler';

import HeartOutLineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

export interface Teacher {

    avatar: string;
    bio: string;
    cost: number
    id: number,
    name: string;
    subject: string;
    whatsapp: string;

}

interface TeacherItemProps {
    teacher: Teacher;
    favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
    function handleLinkToWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
    }

    function handleToggleFavorite() {

    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: teacher.avatar }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.subject}</Text>
                </View>
            </View>

            <Text style={styles.bio}>{teacher.bio}</Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora {'    '}
                    <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
                </Text>

                <View style={styles.buttonsContainer}>

                    <RectButton style={[styles.favoriteButton, styles.favorited]} >
                        {/* <Image source={HeartOutLineIcon} />*/}
                        <Image source={unfavoriteIcon} />
                    </RectButton>

                    <RectButton onPress={handleLinkToWhatsapp} style={styles.contactButton} >
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entar em contato</Text>
                    </RectButton>

                </View>
            </View>
        </View>
    );
}

export default TeacherItem;