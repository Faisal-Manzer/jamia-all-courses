import jamiaAllCourses from './jamia-all-courses';

export default jamiaAllCourses
export const doctoralProgrammes = jamiaAllCourses[0];
export const mastersProgrammes = jamiaAllCourses[1];
export const postgraduateDiplomaProgrammes = jamiaAllCourses[2];
export const undergraduateProgrammes = jamiaAllCourses[3];
export const advancedDiplomaProgrammes = jamiaAllCourses[4];
export const diplomaProgrammes = jamiaAllCourses[5];

export const getCourse = (hash) => {
    for(let i=0; i<jamiaAllCourses.length;) {
        const {name: category, courses} = jamiaAllCourses[i];

        for(let ii = 0; ii < courses.length ;) {
            const {name: course, specializations} = courses[ii];

            for(let iii = 0; iii < specializations.length;){
                const {name: specialization, code} = specializations[iii];

                if(hash === code)
                    return [category, course, specialization];

                iii += 1;
            }

            ii += 1;
        }

        i += 1;
    }

    return []
};

export const getCourseName = (hash) => {
    const [category, course, specialization] = getCourse(hash);

    return `${course} ${specialization}`;
};
