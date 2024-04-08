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
        if (!payload.forceRefresh && !context.getters.shouldUpdate) {
            return;
        }

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
        context.commit('setFetchTimestamp');
    },

    async deleteProject(context, payload) {
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
                ...projectId,
            });
            await context.dispatch('loadProjects', { forceRefresh: true });
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

        try {
            const response = await fetch(`https://projectwise-45eca-default-rtdb.firebaseio.com/projects/${projectId}/tasks/${taskStatus}.json?auth=` + token, {
                method: 'POST',
                body: JSON.stringify(taskData)
            });

            if (!response.ok) {
                console.log('error');
            }

            const responseData = await response.json();
            const taskId = {
                id: responseData.name
            }

            await fetch(`https://projectwise-45eca-default-rtdb.firebaseio.com/projects/${projectId}/tasks/${taskStatus}/${responseData.name}.json?auth=` + token, {
                method: 'PATCH',
                body: JSON.stringify(taskId)
            });

            await context.dispatch('loadProjects', { forceRefresh: true });

        } catch(error) {
            console.log(error);
        }
    },

    async editTask(context, payload) {
        console.log(payload);
        const token = context.rootGetters.token;

        const projectId = payload.projectId;
        const taskStatus = payload.status;
        const previousStatus = payload.previousStatus;

        const taskData = {
            name: payload.name,
            description: payload.description,
            priority: payload.priority,
            id: payload.taskId
        }

        try {
            const update = await fetch(`https://projectwise-45eca-default-rtdb.firebaseio.com/projects/${projectId}/tasks/${taskStatus}/${taskData.id}.json?auth=` + token, {
                method: 'PUT',
                body: JSON.stringify(taskData)
            });

            if (!update.ok) {
                console.log('Failed during updating task status!');
            }

            const remove = await fetch(`https://projectwise-45eca-default-rtdb.firebaseio.com/projects/${projectId}/tasks/${previousStatus}/${taskData.id}.json?auth=` + token, {
                method: 'DELETE'
            });

            if (!remove.ok) {
                console.log('Failed during removing task');
            }

            await context.dispatch('loadProjects', { forceRefresh: true });

        } catch (error) {
            console.log(error);
        }
    }
};
