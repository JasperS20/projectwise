export default {
    async createProject(context, data) {
        const userId = context.rootGetters.userId;
        //const projectId = context.rootGetters.projectId;
        const projectData = {
            name: data.name,
            category: data.category,
            banner: data.banner,
            team_members: data.team_members,
            created_at: data.created_at
        }

        const token = context.rootGetters.token;

        const response = await fetch(`https://projectwise-45eca-default-rtdb.firebaseio.com/projects/${userId}/${projectData.name}.json?auth=` + token, {
            method: 'PUT',
            body: JSON.stringify(projectData)
        });

        if (!response.ok) {
            console.log('error');
        }

        context.commit('createProject', {
            ...projectData,
        })
    }
};
