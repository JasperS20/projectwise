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
            method: 'POST',
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

    async editUser(context, payload) {
        return context.dispatch('auth', {
            ...payload,
            mode: 'edit'
        });
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

        if (mode === 'edit') {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDT8Ckl6IPDgO1CQBKEXcJYKNt_1p7AXfw';
        }

        console.log('test');

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                // idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImJhNjI1OTZmNTJmNTJlZDQ0MDQ5Mzk2YmU3ZGYzNGQyYzY0ZjQ1M2UiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJvamVjdHdpc2UtNDVlY2EiLCJhdWQiOiJwcm9qZWN0d2lzZS00NWVjYSIsImF1dGhfdGltZSI6MTcxMTU0NDEwNiwidXNlcl9pZCI6InA3UlVHV2c0em5Xc05TWlY4WGpabVhMdUNjRTMiLCJzdWIiOiJwN1JVR1dnNHpuV3NOU1pWOFhqWm1YTHVDY0UzIiwiaWF0IjoxNzExNTQ0MTA2LCJleHAiOjE3MTE1NDc3MDYsImVtYWlsIjoiamFzcGVyLnNhbXNvbkBrcG5tYWlsLm5sIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImphc3Blci5zYW1zb25Aa3BubWFpbC5ubCJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.OHDK1QGTkYWmPYOWOj6k54ugotNvuTO8sLr2cOOrVL4kqkDghm7feTXoYNDdGDOWTacNfzyAdG6z6pOrKwGTZKTfNmpu9gZrufHCBJNwKCDcUGM2VTKk82PnwfW185nJedU5ib4riXPZk6eke7ZieWjzEN5BEcS6r1JM9Om0Fz9BVpiSuQmR0EA7NPiIbDPy_StLciHKmui3pi-OuePVc_lTiCFi81GCatogSf5L_1Rp_Z3hcGSiWCtQGc6lcRcW6NrNmfTTDENU60FdAZAzXElzV0yWpe5otrF8F1nqcM2ZZ0UO3pwGOxkZfuUFaEW9hO9v6uwVhmc2Sd5ham7wSQ",
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