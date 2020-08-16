import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, AsyncStorage } from "react-native";
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';

function TeacherList() {
    const [isfiltersVisible, setIsfiltersVisible] = useState(false);

    const [teachers, setTeachers] = useState([]);

    const [favorites, setFavorites] = useState<number[]>([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeek_day] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeacherd = JSON.parse(response);
                setFavorites(favoritedTeacherd);

                const favoritedTeacherdIds = favoritedTeacherd.map((teacher: Teacher) => {
                    return teacher.id;
                })
                setFavorites(favoritedTeacherdIds);
            }

        });
    }, []);

    function handleToggleFilterVisible() {
        setIsfiltersVisible(!isfiltersVisible);
    }

    async function handleFiltersSubmit() {

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        });
        handleToggleFilterVisible();
        setTeachers(response.data);
    }

    return (
        <View style={styles.container}>
            <PageHeader
                title="Proffys disponiveis"
                headerRigth={(
                    <BorderlessButton onPress={handleToggleFilterVisible}>
                        <Feather name='filter' size={20} color='#FFF' />
                    </BorderlessButton>
                )}
            >
                {isfiltersVisible &&
                    (
                        <View style={styles.searchForm}>

                            <Text style={styles.label}>Matérias</Text>
                            <TextInput
                                style={styles.input}
                                value={subject}
                                onChangeText={text => setSubject(text)}
                                placeholder="Qual a matéria"
                            />

                            <View style={styles.inputGroup}>
                                <View style={styles.inputBlock}>

                                    <Text style={styles.label}>Dia da Semana</Text>
                                    <TextInput
                                        style={styles.input}
                                        value={week_day}
                                        onChangeText={text => setWeek_day(text)}
                                        placeholder="Qual o dia?"
                                    />
                                </View>

                                <View style={styles.inputBlock}>

                                    <Text style={styles.label}>Horário</Text>
                                    <TextInput
                                        style={styles.input}
                                        value={time}
                                        onChangeText={text => setTime(text)}
                                        placeholder="Qual o horário?"
                                    />
                                </View>
                            </View>

                            <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                                <Text style={styles.submitButtonText}>Filtrar</Text>
                            </RectButton>
                        </View>
                    )}
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 10,
                    paddingBottom: 20,
                }}
            >
                {teachers.map((teacher: Teacher) => (
                    <TeacherItem
                        key={teacher.id}
                        teacher={teacher}
                        favorited={favorites.includes(teacher.id)}
                    />
                ))}

            </ScrollView>

        </View>
    );
}

export default TeacherList;