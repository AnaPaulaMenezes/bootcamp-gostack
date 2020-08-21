import {Request, Response} from 'express';
import createUser from './services/CreateUser'

export default function helloWorld (request: Request, response: Response) {
    const user = createUser({
        email:'ana@test.com', 
        password:'32322', 
        techs: [
            'node', 
            'react', 
            'react-native', 
            {title:'Javascript', experience:100}
        ],
        
    });
    
    
    return response.json({message: 'Hello world!'});
};