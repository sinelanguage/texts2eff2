import KoaRouter from 'koa-router';

const api = KoaRouter();

const validateCollections = async (ctx, next) => {

    // get collection from url params object using es6 destructuring
    const { collection } = ctx.params;

    // if this collection from params is not in ctx.state throw err
    if (!(collection in ctx.state.collections)) {
        return ctx.throw(404);
    }

    // done move onto next middleware
    await next();
};

const validateKey = async (ctx, next) => {

    // get authorization key from request header
    const { authorization } = ctx.request.headers;

    //check if the authorization key from the request headers matches the authorization key stored in in ctx.state, if it doesn't throw a 401'
    if(authorization !== ctx.state.authorizationHeader){
        return ctx.throw(401);
    }

    await next();
};

api.get('/:collection/:attribute/:value/count',

    // middlewares: call the first two middlewares from above
    validateCollections,
    validateKey,

    async (ctx, next) => {

        // grab route param values off ctx
        const {
            collection,
            attribute,
            value
        } = ctx.params;
        

    }
)

