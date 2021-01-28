import axios from 'axios'



export default class CommentsService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'https://freedemy-server.herokuapp.com/api/comments',
            withCredentials: true
        })
    }

    getCourseComments = courseId => this.apiHandler.get(`/getCourseComments/${courseId}`)
    saveComment = commentInfo => this.apiHandler.post(`/newComment`, commentInfo)
    deleteComment = commentId => this.apiHandler.delete(`/deleteComment/${commentId}`)
    editComment = (commentId, commentInfo) => this.apiHandler.put(`/editComment/${commentId}`, commentInfo)
}