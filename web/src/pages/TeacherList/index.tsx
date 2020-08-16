import React, { useState, FormEvent } from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/input';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherList() {
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekday] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        });
        setTeachers(response.data);

    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponíveis." >
                <form id="search-teachers" onSubmit={searchTeachers}>

                    <Select
                        name="materia"
                        label="Máteria"
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value) }}
                        options={[
                            { value: 'Algoritimo e estutura de dados', label: 'Algoritimo e estutura de dados' },
                            { value: 'introdução a materia', label: 'introdução a materia' },
                            { value: 'Banco de dados', label: 'Banco de dados' },
                            { value: 'Matematico', label: 'Matematico' },
                            { value: 'Calculo', label: 'Calculo' },
                            { value: 'Calculo Aplicado', label: 'Calculo Aplicado' },
                            { value: 'Sistemas Operacionais', label: 'Sistemas Operacionais' },
                            { value: 'Modelagem e processos de negocios', label: 'Modelagem e processos de negocios' },
                        ]}
                    />

                    <Select
                        name="week_day"
                        label="Dia da semana"
                        value={week_day}
                        onChange={(e) => { setWeekday(e.target.value) }}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sabado' },
                        ]}
                    />

                    <Input type="time" value={time}
                        onChange={(e) => {
                            setTime(e.target.value)
                        }}
                        name="time" label="hora" />
                    <button type="submit">
                        Buscar
                    </button>
                </form>

            </PageHeader>
            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />;

                })}
            </main>
        </div>
    )
}

export default TeacherList;