export const EnvConfiguration = () => ({
    enviorment:process.env.NODE_ENV || 'dev',
    mongoDb:process.env.MONGODB,
    port:process.env.PORT || 3002,
    defaultLimit:+process.env.DEFAULT_LIMIT || 7
})

