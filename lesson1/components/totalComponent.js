const TotalComponent = {
    /**
     * data from parent, auto sync data child to parent ? => yes
     * I use computed on parent
     */
    props: ['total'],
    template: `
        <div>
            Total: {{total}}
        </div>
    `,

}

export default TotalComponent