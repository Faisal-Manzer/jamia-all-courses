__version__ = "1.0.0"

from jamia_all_courses import all_courses

if __name__ == "__main__":
    for category in all_courses:
        print('-', category['name'])
        for course in category['courses']:
            print('    -', course['name'])
            for specialization in course['specializations']:
                print('        -', specialization['name'], specialization['code'])
