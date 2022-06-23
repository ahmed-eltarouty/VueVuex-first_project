export class EmployeeService{
    static employeeList=[
        {
            "id":1,
            "name":"Ahmed Eltarouty",
            "email":"Ahmed.eltarouty@gmail.com",
            "phone": "01004253046",
            isSelected:false

        },
        {
            "id":2,
            "name":"Ahmed Eltarouty 2",
            "email":"Ahmed.eltarouty@gmail.com 2",
            "phone": "01004253046 2",
            isSelected:false

        },
        {
            "id":3,
            "name":"Ahmed Eltarouty 3",
            "email":"Ahmed.eltarouty@gmail.com 3",
            "phone": "01004253046 3",
            isSelected:false

        },
        {
            "id":4,
            "name":"Ahmed Eltarouty 4",
            "email":"Ahmed.eltarouty@gmail.com 4",
            "phone": "01004253046 4",
            isSelected:false

        },
        {
            "id":5,
            "name":"Ahmed Eltarouty 5",
            "email":"Ahmed.eltarouty@gmail.com 5",
            "phone": "01004253046 5",
            isSelected:false

        }
    ]

    static getAllEmployees(){
        return this.employeeList
    }
}