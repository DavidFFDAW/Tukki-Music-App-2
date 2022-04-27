const production = { 
    name: 'prod',
    url: 'http://vps-f87b433e.vps.ovh.net:8443/api' 
};
const development =  { 
    name: 'dev',
    url: 'http://localhost:3525/api' 
};

const env = production;

export const apiURL = env.url;