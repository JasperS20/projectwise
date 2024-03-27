let timer;

export default {
    async registerUser(context, data) {
        const userId = context.rootGetters.userId;
        const userData = {
            email: data.email,
            username: data.username,
        }

        const token = context.rootGetters.token;

        const response = await fetch(`https://projectwise-45eca-default-rtdb.firebaseio.com/users/${userId}.json?auth=` + token, {
            method: 'PUT',
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            console.log('error');
        }

        context.commit('registerUser', {
            ...userData,
            id: userId
        });
    },

    async editUserEmail({commit}, payload) {
        try {
            const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDT8Ckl6IPDgO1CQBKEXcJYKNt_1p7AXfw`, {
                method: 'POST',
                body: JSON.stringify({
                    idToken: localStorage.getItem('token'),
                    email: payload.email,
                    returnSecureToken: true
                })
            });
    
            const responseData = await response.json();
            if (!response.ok) {
                throw new Error(responseData.error.message || 'Failed to update user');
            }

            console.log(responseData);

            commit('changeUserEmail', {
                token: responseData.idToken,
                userId: responseData.localId,
            });

        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    async login(context, payload) {
        context.commit('setUserData', {
            email: payload.email,
            password: payload.password
        });

        return context.dispatch('auth', {
            ...payload,
            mode: 'login',
        });
    },

    async signup(context, payload) {
        try {
            const authResult = await context.dispatch('auth', {
                ...payload,
                mode: 'signup',
            });

            const saveUserData = await context.dispatch('registerUser', {
                context,
                ...payload
            });

            context.commit('setUserData', {
                email: payload.email,
                password: payload.password
            });
        } catch (error) {
            console.log('An error occurred during signup:', error);
            throw error;
        }
    },

    async auth(context, payload) {
        const mode = payload.mode;
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDT8Ckl6IPDgO1CQBKEXcJYKNt_1p7AXfw';

        if (mode === 'signup') {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDT8Ckl6IPDgO1CQBKEXcJYKNt_1p7AXfw';
        }

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                username: payload.username,
                email: payload.email,
                password: payload.password,
                returnSecureToken: true,
            })
        });

        const responseData = await response.json();
        console.log(responseData);

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to authenticate');
            throw error;
        }

        const expiresIn = +responseData.expiresIn * 1000;
        const expirationDate = new Date().getTime() + expiresIn;

        timer = setTimeout(function() {
            context.dispatch('autoLogout');
        }, expiresIn)

        localStorage.setItem('token', responseData.idToken);
        localStorage.setItem('userId', responseData.localId);
        localStorage.setItem('tokenExpiration', expirationDate);

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
        });
    },

    tryLogin(context) {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const tokenExpiration = localStorage.getItem('tokenExpiration');

        const expiresIn = +tokenExpiration - new Date().getTime();

        if (expiresIn < 0) {
            return;
        }

        setTimeout(function() {
            context.dispatch('autoLogout');
        }, expiresIn);

        if (token && userId) {
            context.commit('setUser', {
                token: token,
                userId: userId,
            });
        }
    },

    logout(context) {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('tokenExpiration');

        clearTimeout(timer);

        context.commit('setUser', {
            token: null,
            tokenId: null,
        });
    },

    autoLogout(context) {
        context.dispatch('logout');
        context.commit('setAutoLogout');
    }
}