import TableComponent from "./table-component.js"

const ActiveListComponent = {
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
        <h2>List Active</h2>
        <table-component>
            <!--
                Slot is place view task row
            -->
            <tr v-for="task in tasks" v-if="task.active">
                <td>{{task.title}}</td>
                <td class="text-right">
                    <button class="btn btn-sm btn-danger" @click="onRemove(task.id)">Remove</button>
                </td>
            </tr>
        </table-component>
    </div>
    `,
    methods: {
        onRemove(id) {
            const index = this.findIndexTaskById(id);
            this.removeTaskByIndex(index);
        },
        findIndexTaskById(id) {
            return this.tasks.findIndex((obj => obj.id === id))
        },
        removeTaskByIndex(index) {
            this.tasks.splice(index, 1)
        },
    }
}

export default ActiveListComponent