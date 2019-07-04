const messages_defaults = (name) => ( 
    {
        NOT_FOUD: `No ${name} found for informed data`,
        SERVER_ERROR_GET: `Error fetching ${name}`,
        SERVER_ERROR_CREATE: `Error creating ${name}`,
        SERVER_ERROR_UPDATE: `Error updating ${name}`,
        SERVER_ERROR_DELETE: `Error deleting ${name}`
    }
)


module.exports = messages_defaults