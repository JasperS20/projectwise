export default {
    async createProject(context, data) {
        const userId = context.rootGetters.userId;
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
    },

    async loadProjects(context, payload) {
        const userId = context.rootGetters.userId;

        const response = await fetch(`https://projectwise-45eca-default-rtdb.firebaseio.com/projects/${userId}.json`);

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch!');
            throw error;
        }

        const projects = [];

        for (const key in responseData) {
            const project = {
                id: key,
                name: responseData[key].name,
                category: responseData[key].category,
                banner: responseData[key].category,
                team_members: responseData[key].team_members,
                created_at: responseData[key].created_at
            }
            projects.push(project);
        }

        context.commit('setProjects', projects);
    },

    async deleteProject(context, payload) {
        const userId = context.rootGetters.userId;
        const token = context.rootGetters.token;

        const projectName = payload.name;

        try {
            const response = await fetch(`https://projectwise-45eca-default-rtdb.firebaseio.com/projects/${userId}/${projectName}.json?auth=` + token, {
            method: 'DELETE',
            });

            if (!response.ok) {
                console.log('Failed deleting project');
            }

            context.commit('deleteProject', {
                ...projectName
            });
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
};
