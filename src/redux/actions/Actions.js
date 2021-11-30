import { Action_types } from "../constants/Action_types";
export const select_data=(products)=>{
    return{
        type:Action_types.select_data,
        payload:products,
    };
};

    export const checkvalid=(product)=>{
        return{
            type:Action_types.checkvalid,
            
        };
};
export const select_friends=(friend)=>{
    return{
        type:Action_types.select_friends,
        
    };  };
    export const register=(friend)=>{
        return{
            type:Action_types.register,
            
        };
};
export const addpost=(postdata)=>{
    return{
        type:Action_types.addpost,
        payload:postdata
        
    };
};