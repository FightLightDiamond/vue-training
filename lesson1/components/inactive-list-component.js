import TableComponent from "./table-component.js"

const InactiveListComponent = {
    data: function () {
        return {

        }
    },
    /**
     * data from parent, auto sync data child to parent ? => yes
     */
    props: ['tasks'],
    components: {
        'table-component': TableComponent
    },
    template: `
    <div>
        <h2>List inactive</h2>
        <table-component>
            <tr v-for="task in tasks" v-if="!task.active">
                <td>{{task.title}}</td>
                <td class="text-right">
                    <button class="btn btn-sm btn-danger" @click="onActive(task.id)">Active</button>
                </td>
            </tr>
        </table-component>
    </div>
    `,
    methods: {
        onActive(id) {
            // alert('call active from child')
            // get index by id
            const index = this.findIndexTaskById(id)
            this.activeTaskByIndex(index)
            // you can write code here
        },
        findIndexTaskById(id) {
            return this.tasks.findIndex((obj => obj.id === id))
        },
        activeTaskByIndex(index) {
            this.tasks[index].active = 1
        }
    }
}

export default InactiveListComponent