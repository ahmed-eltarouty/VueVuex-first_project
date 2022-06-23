<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success">Employee</p>
                <p class="fst-italic">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias distinctio quo earum, est autem, sapiente voluptates deserunt labore quas asperiores sunt voluptas hic? Voluptas aut assumenda illum itaque, nisi quasi.</p>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <ul class="list-group">
                    <li class="list-group-item list-group-item-success" v-for="employee of employees" :key="employee.id">
                        <input type="checkbox" class="form-check-input" @change="updateSelected(employee.id)">
                        {{employee.name}}
                    </li>
                </ul>
            </div>
            <div class="col-md-6">
                <div v-for="employee of employees" :key="employee.id">
                    <div class="card my-2" v-if="employee.isSelected">
                        <div class="card-body list-group-item-success">
                            <ul class="list-group">
                                <li class="list-group-item">Id: <span class="fw-bold">{{employee.id}}</span></li>
                                <li class="list-group-item">Name: <span class="fw-bold">{{employee.name}}</span></li>
                                <li class="list-group-item">Email: <span class="fw-bold">{{employee.email}}</span></li>
                                <li class="list-group-item">Phone: <span class="fw-bold">{{employee.phone}}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"EmployeesComponent",
    data:function(){
        return{
            employees: [
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
        }
    },
    methods:{
        updateSelected:function(empId){
            this.employees.map(emp=>{
                emp.id == empId ? emp.isSelected = !emp.isSelected : emp
            })
        }
    }

}
</script>

<style>

</style>