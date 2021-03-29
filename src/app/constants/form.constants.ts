import { InjectionToken } from "@angular/core";
import { ActionInterface } from "../interfaces/action";


export const FORM_ACTION_TOKEN = new InjectionToken<ActionInterface>('action.config');

export const FORM_ACTION_CONFIG: {[name: string]: ActionInterface} = {
    add: {header: 'Create User', button: 'Add'},
    edit: {header: 'Edit User', button: 'Save'}
}