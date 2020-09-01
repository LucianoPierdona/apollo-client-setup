import { makeSchema, queryType } from '@nexus/schema';

const Query = queryType({
    definition(t) {
        t.string("name", () => "Luciano Pierdona");
    },
});

const types = {
    Query
};

export const schema = makeSchema({
    types
});

