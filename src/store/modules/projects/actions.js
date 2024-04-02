export default {
    async createProject(context, data) {
        const userId = context.rootGetters.userId;
        const projectData = {
            name: data.name,
            category: data.category,
            banner: data.banner,
            team_members: [userId],
            created_at: data.created_at
        }

        const token = context.rootGetters.token;

        const response = await fetch(`https://projectwise-45eca-default-rtdb.firebaseio.com/projects.json?auth=` + token, {
            method: 'POST',
            body: JSON.stringify(projectData)
        });

        if (!response.ok) {
            console.log('error');
        }

        const responseData = await response.json();

        context.commit('createProject', {
            ...projectData,
            id: responseData.name
        })
    },

    async loadProjects(context, payload) {
        const response = await fetch(`https://projectwise-45eca-default-rtdb.firebaseio.com/projects.json`);

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
                tasks: responseData[key].tasks,
                created_at: responseData[key].created_at
            }
            projects.push(project);
        }

        context.commit('setProjects', projects);
    },

    async deleteProject(context, payload) {
        const userId = context.rootGetters.userId;
        const token = context.rootGetters.token;

        const projectId = payload.id;

        try {
            const response = await fetch(`https://projectwise-45eca-default-rtdb.firebaseio.com/projects/${projectId}.json?auth=` + token, {
                method: 'DELETE',
            });

            if (!response.ok) {
                console.log('Failed deleting project');
            }

            context.commit('deleteProject', {
                ...projectId
            });
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    async addTask(context, payload) {
        const token = context.rootGetters.token;
        const projectId = payload.projectId;
        const taskStatus = payload.status;

        const taskData = {
            name: payload.name,
            description: payload.description,
            priority: payload.priority,
        }

        console.log(payload);

        try {
            const response = await fetch(`https://projectwise-45eca-default-rtdb.firebaseio.com/projects/${projectId}/tasks/${taskStatus}.json?auth=` + token, {
                method: 'POST',
                body: JSON.stringify(taskData)
            });

            if (!response.ok) {
                console.log('error');
            }
        } catch(error) {
            console.log(error);
        }
    },
};
