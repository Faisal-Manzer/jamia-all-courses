# All Courses in Jamia
This repo contains index of courses available in Jamia Millia Islamia.

## Installation
yarn/npm: directly install `jamia-all-courses`
```
yarn add jamia-all-courses
or
npm install --save jamia-all-courses
```

## Usages
```js
import allCourses from 'jamia-all-courses';
// or
// const allCourses = require('jamia-all-courses');

allCourses.map(({name: category, courses}) => {
    console.log('- ' + category);
    courses.map(({name: course, specializations}) => {
        console.log('    - ' + course);
        specializations.map(({name: specialization, code}) => {
            console.log('        - ' + specialization, code);
        })
    })
});
```

Or import specific programme:
- `doctoralProgrammes`
- `mastersProgrammes`
- `postgraduateDiplomaProgrammes`
- `undergraduateProgrammes`
- `advancedDiplomaProgrammes`
- `diplomaProgrammes`
```js
import {undergraduateProgrammes} from 'jamia-all-courses';

undergraduateProgrammes.courses.map(({name: course, specializations}) => {
        console.log('    - ' + course);
        specializations.map(({name: specialization, code}) => {
            console.log('        - ' + specialization, code);
        })
    })
```

- `getCourse(hash)`: **[category, course, specialization]**
    - Returns array of 3 with their respective labels

- `getCourseName(hash)`: Returns string of course and specialisation

```js
import {getCourseName, getCourse} from "./index";

console.log(getCourseName('3fc6d'));
// B.Tech. Computer Engineering

console.log(getCourse('3fc6d'));
// ['Undergraduate Programmes', 'B.Tech.','Computer Engineering']
```

## Structure
```
[{
    name: 'category',
    courses: [{
        name: 'course',
        specializations: [{
            name: 'specialization',
            code: 'hash'
        }]
    }]
}]
```
