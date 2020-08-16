import React from 'react';
import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

export interface Teacher {

    avatar: string;
    bio: string;
    cost: number
    id: number,
    name: string;
    subject: string;
    whatsapp: string;

}
interface TeachersItemProps {
    teacher: Teacher
}

const TeacherItem: React.FC<TeachersItemProps> = ({ teacher }) => {
    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name} />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p>{teacher.bio}</p>
            <footer>
                <p>preço/hora</p>

                <strong>R$ {teacher.cost}</strong>
                <a href={`https://wa.me/${teacher.whatsapp}`}>
                    <img src={whatsappIcon} alt="whatsapp" />
                Entrar em contato
                </a>
            </footer>
        </article>
    )
}

export default TeacherItem;
