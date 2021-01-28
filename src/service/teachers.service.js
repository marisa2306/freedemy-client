
import axios from 'axios'


export default class TeacherService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'https://freedemy-server.herokuapp.com/api/teachers',
            withCredentials: true
        })
    }

    getTeachers = () => this.apiHandler.get('/getAllTeachers')
    getTheTeacher = teacherId => this.apiHandler.get(`/getTheTeacher/${teacherId}`)
    getTeacher = userId => this.apiHandler.get(`/getOneTeacher/${userId}`)
    saveTeacher = teacherInfo => this.apiHandler.post(`/newTeacher/`, teacherInfo)
    editTeacher = (teacherId, teacherInfo) => this.apiHandler.put(`/editTeacher/${teacherId}`, teacherInfo)
    deleteTeacher = teacherId => this.apiHandler.delete(`/deleteTeacher/${teacherId}`)
}