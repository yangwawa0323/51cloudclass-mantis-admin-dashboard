const schema = {
    title: 'Radio',
    type: 'object',
    properties: {
        email: {
            type: 'string',
            format: 'email',
            uniforms: {
                placeholder: 'Enter email address',
                component: OutlinedInput,
                title: 'Email Address'
            }
        },
        password: { type: 'string', minLength: 6, uniforms: { type: 'password', placeholder: '******' } }
    },
    required: ['email', 'password']
};
