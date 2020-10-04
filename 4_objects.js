let course = {
    courseName: 'Introduction to Artificial Intelligence',
    department: 'COSC',
    courseNumber: 394,
    professor: {
        firstName: 'John',
        lastName: 'Smith',
        yearsTeaching: 10,
        tenured: false
    }
}


let teacherName = course.professor.firstName + ' ' + course.professor.lastName;


console.log(teacherName + ' is teaching ' + course.courseName)


course.professor.yearsTeaching += 1

course['professor']['tenured'] = true


let moreDescriptiveCourse = {
    ...course,
    description: 'A class that covers topics such as KNN, Markov Models, and Convolutional Neutral networks',
    semseter: 'Fall',
    capacity: 25
}