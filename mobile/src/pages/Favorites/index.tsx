import React from 'react';
import { View, ScrollView } from "react-native";

import styles from './styles';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

function TeacherList() {
    return (
        <View style={styles.container}>

            <PageHeader title="Meus Proffys favoritos" />

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 10,
                    paddingBottom: 20,
                }}
            >
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>

        </View>
    );
}

export default TeacherList;