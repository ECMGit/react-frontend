import axios from "axios";

const USER_API_URL = "http://localhost:9000/user/";
const JOBS_API_URL = "http://localhost:9000/jobs";

const getJobs = () => {
    return axios.get(JOBS_API_URL).then(res => {
        console.log(res);
        return res.data;
    }).catch(err => {
        console.log(err);
    })
}

const postJob = (job: {
    title: string;
    courseId: number;
    courseSchedule: string;
    totalHoursPerWeek: number;
    maxNumberOfTAs: number;
    requiredCourses: string;
    requiredSkills: string;
    TAStats: string;
    notes?: string;
    deadlineToApply: Date;
    facultyId: number;
}) => {
    return axios.post(JOBS_API_URL, job).then(res => {
        console.log(res);
        return res.data;
    }).catch(err => {
        console.log(err);
        alert(err)
    })
}

const api = {
    getJobs,
    postJob
}

export default api;